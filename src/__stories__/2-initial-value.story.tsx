import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import useForm from '../index';

interface IForm {
  name: string
  password: string,
}

const Demo = () => {
  const [form, field]  = useForm<IForm>({
    name: 'admin',
    password: 'password'
  });

  const handleSubmit = (event) => {
    event.preventDefault()
    form.validate((errors) => {
      if(!errors) {
        action('submit')(form.value)
      }
    })
  }

  const handleReset = () => {
    form.reset()
    action('reset')()
  }

  return (
    <section className="section container">
      <div className="columns">
        <div className="column is-three-fifths">
          <form onSubmit={handleSubmit} onReset={handleReset}>
            <div className="field">
              <label className="label">text</label>
              <input className="input" type="text" {...field("name")} />
            </div>
            <div className="field">
              <label className="label">password</label>
              <input className="input" type="password" {...field("password")} />
            </div>
            <div className="field">
              <button type='submit' className="button is-link">Submit</button> <button type='reset' className="button">Reset</button>
            </div>
          </form>
        </div>
        <div className="column">
          <div className="notification" style={{wordBreak: 'break-all'}}>
            { JSON.stringify(form.value) }
          </div>
        </div>
      </div>
    </section>
  );
};

storiesOf('rc-use-form', module)
    .add('initial value', () => (
        <Demo />
    ));
