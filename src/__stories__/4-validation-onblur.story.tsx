import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import useForm from '../index';

interface IForm {
  name: string
  password: string,
}

const Demo = () => {
  const [form, field]  = useForm<IForm>({
    name: '',
    password: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    form.validate((errors) => {
      if(!errors) {
        action('submit')(form.value)
      } else {
        action('errors')(errors)
      }
    })
  }

  return (
    <div className="section container">
      <h3 className="title is-3">
        Validate trigger onblur
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">username</label>
          <input className="input" type="text" {...field("name", {
            rules: [
              {len: 4,  trigger: 'blur',},
              {required: true,},
            ]
          })}
          />
          {
            form.errors.name && <p className="help is-danger">{form.errors.name[0].message}</p>
          }
        </div>
        <div className="field">
          <label className="label">password</label>
          <input className="input" type="password" {...field("password", {
            rules: [
              {len: 4,  trigger: 'blur',},
              {required: true,},
            ]
          })}
          />
          {
            form.errors.password && <p className="help is-danger">{form.errors.password[0].message}</p>
          }
        </div>
        <button type='submit' className='button is-link'>submit</button>
      </form>
    </div>
  )
}

storiesOf('rc-use-form', module)
    .add('validate(trigger onBlur)', () => (
        <Demo />
    ))
