(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{260:function(module,exports,__webpack_require__){__webpack_require__(261),__webpack_require__(339),module.exports=__webpack_require__(340)},340:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(22),_storybook_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(258);__webpack_require__(486);const theme=Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.create)({colorPrimary:"#FF4785",colorSecondary:"#1EA7FD"});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({options:{theme:theme}});const req=__webpack_require__(491);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories(){req.keys().forEach(filename=>req(filename))},module)}.call(this,__webpack_require__(341)(module))},491:function(module,exports,__webpack_require__){var map={"./__stories__/0-home.story.tsx":492,"./__stories__/1-normal.story.tsx":503,"./__stories__/2-initial-value.story.tsx":578,"./__stories__/3-validation.story.tsx":579,"./__stories__/4-validation-onblur.story.tsx":580,"./__stories__/5-validation-message.story.tsx":581};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=491},492:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0}),exports.withStorySource=__webpack_require__(66).withStorySource,exports.__STORY__='import * as React from \'react\';\nimport { Checkbox, CheckboxGroup } from \'react-checkbox-group\';\nimport { storiesOf } from \'@storybook/react\';\nimport { action } from \'@storybook/addon-actions\';\nimport { linkTo } from \'@storybook/addon-links\';\n\nimport useForm from \'../index\';\n\nstoriesOf(\'home\', module).add(\'home\', () => (\n  <div className="container">\n    <h1 className="title">rc-use-form</h1>\n    <h2 className="subtitle">manage form state use React Hooks. </h2>\n    <div className="content">\n      <a href="https://www.npmjs.com/package/rc-use-form" rel="nofollow">\n        <img\n          src="https://camo.githubusercontent.com/5f0c4e29af78c8b828b21f05f48124a4ac4e713c/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f72632d7573652d666f726d2e737667"\n          alt="NPM"\n        />\n      </a>\n      <a href="https://travis-ci.org/ariesjia/react-use-form" rel="nofollow">\n        <img\n          src="https://camo.githubusercontent.com/458a1d86ca583f1da05a0c334306b1dba6640121/68747470733a2f2f7472617669732d63692e6f72672f61726965736a69612f72656163742d7573652d666f726d2e7376673f6272616e63683d6d6173746572"\n          alt="Build Status"\n        />\n      </a>\n    </div>\n    <div className="content">\n      <h3 className="strong">Install</h3>\n      <blockquote>npm install rc-use-form</blockquote>\n    </div>\n    <div className="content">\n      <h3 className="strong">Use</h3>\n      <blockquote>\n        <p>import useForm from \'rc-use-form\'</p>\n        <p>const [form, field] = useForm()</p>\n        <p>{\'<input type="text" {...field("name")}/>\'}</p>\n      </blockquote>\n    </div>\n    <div className="content">\n      <h3 className="strong">Demos</h3>\n      <ol type="1">\n        <li>\n          base use\n          <button onClick={linkTo(\'rc-use-form\', \'normal\')}>Demo</button>\n        </li>\n        <li>\n          initial-value\n          <button onClick={linkTo(\'rc-use-form\', \'initial value\')}>Demo</button>\n        </li>\n        <li>\n          field validation\n          <button onClick={linkTo(\'rc-use-form\', \'validate\')}>Demo</button>\n        </li>\n        <li>\n          field validation (trigger onBlur)\n          <button onClick={linkTo(\'rc-use-form\', \'validate(trigger onBlur)\')}>Demo</button>\n        </li>\n        <li>\n          field validation(custom error message)\n          <button onClick={linkTo(\'rc-use-form\', \'validate(custom error message)\')}>Demo</button>\n        </li>\n      </ol>\n    </div>\n  </div>\n));\n',exports.__ADDS_MAP__={"home--home":{startLoc:{col:30,line:9},endLoc:{col:1,line:65}}};var React=__webpack_require__(0),react_1=__webpack_require__(22),addon_links_1=__webpack_require__(494);react_1.storiesOf("home",module).addDecorator(exports.withStorySource(exports.__STORY__,exports.__ADDS_MAP__)).add("home",function(){return React.createElement("div",{className:"container"},React.createElement("h1",{className:"title"},"rc-use-form"),React.createElement("h2",{className:"subtitle"},"manage form state use React Hooks. "),React.createElement("div",{className:"content"},React.createElement("a",{href:"https://www.npmjs.com/package/rc-use-form",rel:"nofollow"},React.createElement("img",{src:"https://camo.githubusercontent.com/5f0c4e29af78c8b828b21f05f48124a4ac4e713c/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f72632d7573652d666f726d2e737667",alt:"NPM"})),React.createElement("a",{href:"https://travis-ci.org/ariesjia/react-use-form",rel:"nofollow"},React.createElement("img",{src:"https://camo.githubusercontent.com/458a1d86ca583f1da05a0c334306b1dba6640121/68747470733a2f2f7472617669732d63692e6f72672f61726965736a69612f72656163742d7573652d666f726d2e7376673f6272616e63683d6d6173746572",alt:"Build Status"}))),React.createElement("div",{className:"content"},React.createElement("h3",{className:"strong"},"Install"),React.createElement("blockquote",null,"npm install rc-use-form")),React.createElement("div",{className:"content"},React.createElement("h3",{className:"strong"},"Use"),React.createElement("blockquote",null,React.createElement("p",null,"import useForm from 'rc-use-form'"),React.createElement("p",null,"const [form, field]  = useForm()"),React.createElement("p",null,'<input type="text" {...field("name")}/>'))),React.createElement("div",{className:"content"},React.createElement("h3",{className:"strong"},"Demos"),React.createElement("ol",{type:"1"},React.createElement("li",null,"base use",React.createElement("button",{onClick:addon_links_1.linkTo("rc-use-form","normal")},"Demo")),React.createElement("li",null,"initial-value",React.createElement("button",{onClick:addon_links_1.linkTo("rc-use-form","initial value")},"Demo")),React.createElement("li",null,"field validation",React.createElement("button",{onClick:addon_links_1.linkTo("rc-use-form","validate")},"Demo")),React.createElement("li",null,"field validation (trigger onBlur)",React.createElement("button",{onClick:addon_links_1.linkTo("rc-use-form","validate(trigger onBlur)")},"Demo")),React.createElement("li",null,"field validation(custom error message)",React.createElement("button",{onClick:addon_links_1.linkTo("rc-use-form","validate(custom error message)")},"Demo")))))})}).call(this,__webpack_require__(14)(module))},503:function(module,exports,__webpack_require__){"use strict";(function(module){var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.withStorySource=__webpack_require__(66).withStorySource,exports.__STORY__='import * as React from \'react\';\nimport { Checkbox, CheckboxGroup } from \'react-checkbox-group\';\nimport { storiesOf } from \'@storybook/react\';\nimport { action } from \'@storybook/addon-actions\';\n\nimport useForm from \'../index\';\n\ninterface IForm {\n  name: string;\n  password: string;\n  agree: boolean;\n  multi: string[];\n  radio: number;\n  textarea: string;\n}\n\nconst Demo = () => {\n  const [form, field] = useForm<IForm>({\n    name: \'\',\n    password: \'\',\n    agree: true,\n    radio: 4,\n    textarea: \'123123\',\n  });\n\n  const handleSubmit = event => {\n    event.preventDefault();\n    form.validate(errors => {\n      if (!errors) {\n        action(\'submit\')(form.value);\n      }\n    });\n  };\n\n  return (\n    <section className="section container">\n      <div className="columns">\n        <div className="column is-three-fifths">\n          <form onSubmit={handleSubmit}>\n            <div className="field">\n              <label className="label">text</label>\n              <input className="input" type="text" {...field(\'name\')} />\n            </div>\n            <div className="field">\n              <label className="label">password</label>\n              <input className="input" type="password" {...field(\'password\')} />\n            </div>\n            <div className="field">\n              <label className="label">checked</label>\n              <input\n                type="checkbox"\n                onChange={() => field(\'agree\').onChange(!field(\'agree\').value)}\n                onBlur={field(\'agree\').onBlur}\n                checked={!!field(\'agree\').value}\n              />\n            </div>\n            <div className="field">\n              <label className="label">multi checkbox</label>\n              <CheckboxGroup checkboxDepth={2} name="fruits" {...field(\'multi\')}>\n                <label className="checkbox">\n                  <Checkbox value="apple" /> Apple\n                </label>\n                <label className="checkbox">\n                  <Checkbox value="orange" /> Orange\n                </label>\n                <label className="checkbox">\n                  <Checkbox value="watermelon" /> Watermelon\n                </label>\n              </CheckboxGroup>\n            </div>\n            <div className="field">\n              <label className="label">radio</label>\n              <div className="control">\n                {[1, 2, 3, 4, 5].map(item => {\n                  return (\n                    <label key={item} className="radio">\n                      <input\n                        name="radio"\n                        type="radio"\n                        {...field(\'radio\')}\n                        value={item}\n                        onChange={() => field(\'radio\').onChange(item)}\n                        onBlur={field(\'radio\').onBlur}\n                        checked={item === field(\'radio\').value}\n                      />{\' \'}\n                      {item}\n                    </label>\n                  );\n                })}\n              </div>\n            </div>\n            <div className="field">\n              <label className="label">textarea</label>\n              <textarea className="textarea" {...field(\'textarea\')} />\n            </div>\n            <div className="field">\n              <button type="submit" className="button is-link">\n                Submit\n              </button>\n            </div>\n          </form>\n        </div>\n        <div className="column">\n          <div className="notification" style={{ wordBreak: \'break-all\' }}>\n            {JSON.stringify(form.value)}\n          </div>\n        </div>\n      </div>\n    </section>\n  );\n};\n\nstoriesOf(\'rc-use-form\', module).add(\'normal\', () => <Demo />);\n',exports.__ADDS_MAP__={"rc-use-form--normal":{startLoc:{col:37,line:113},endLoc:{col:61,line:113}}};var React=__webpack_require__(0),react_checkbox_group_1=__webpack_require__(504),react_1=__webpack_require__(22),addon_actions_1=__webpack_require__(83),index_1=__webpack_require__(84),Demo=function(){var _a=index_1.default({name:"",password:"",agree:!0,radio:4,textarea:"123123"}),form=_a[0],field=_a[1];return React.createElement("section",{className:"section container"},React.createElement("div",{className:"columns"},React.createElement("div",{className:"column is-three-fifths"},React.createElement("form",{onSubmit:function(event){event.preventDefault(),form.validate(function(errors){errors||addon_actions_1.action("submit")(form.value)})}},React.createElement("div",{className:"field"},React.createElement("label",{className:"label"},"text"),React.createElement("input",__assign({className:"input",type:"text"},field("name")))),React.createElement("div",{className:"field"},React.createElement("label",{className:"label"},"password"),React.createElement("input",__assign({className:"input",type:"password"},field("password")))),React.createElement("div",{className:"field"},React.createElement("label",{className:"label"},"checked"),React.createElement("input",{type:"checkbox",onChange:function(){return field("agree").onChange(!field("agree").value)},onBlur:field("agree").onBlur,checked:!!field("agree").value})),React.createElement("div",{className:"field"},React.createElement("label",{className:"label"},"multi checkbox"),React.createElement(react_checkbox_group_1.CheckboxGroup,__assign({checkboxDepth:2,name:"fruits"},field("multi")),React.createElement("label",{className:"checkbox"},React.createElement(react_checkbox_group_1.Checkbox,{value:"apple"})," Apple"),React.createElement("label",{className:"checkbox"},React.createElement(react_checkbox_group_1.Checkbox,{value:"orange"})," Orange"),React.createElement("label",{className:"checkbox"},React.createElement(react_checkbox_group_1.Checkbox,{value:"watermelon"})," Watermelon"))),React.createElement("div",{className:"field"},React.createElement("label",{className:"label"},"radio"),React.createElement("div",{className:"control"},[1,2,3,4,5].map(function(item){return React.createElement("label",{key:item,className:"radio"},React.createElement("input",__assign({name:"radio",type:"radio"},field("radio"),{value:item,onChange:function(){return field("radio").onChange(item)},onBlur:field("radio").onBlur,checked:item===field("radio").value}))," ",item)}))),React.createElement("div",{className:"field"},React.createElement("label",{className:"label"},"textarea"),React.createElement("textarea",__assign({className:"textarea"},field("textarea")))),React.createElement("div",{className:"field"},React.createElement("button",{type:"submit",className:"button is-link"},"Submit")))),React.createElement("div",{className:"column"},React.createElement("div",{className:"notification",style:{wordBreak:"break-all"}},JSON.stringify(form.value)))))};react_1.storiesOf("rc-use-form",module).addDecorator(exports.withStorySource(exports.__STORY__,exports.__ADDS_MAP__)).add("normal",function(){return React.createElement(Demo,null)})}).call(this,__webpack_require__(14)(module))},574:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.get=function(object,name,defaultValue){var result=object;return name.split(".").forEach(function(item){result&&(result=result[item])}),void 0===result?defaultValue:result}},575:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.mapValues=function(obj,fn){return Object.keys(obj).reduce(function(prev,k){return prev[k]=fn(obj[k],k,obj),prev},{})}},576:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.memoize=function(fn){var cache=new Map;return function(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];var key=JSON.stringify(args),value=cache.get(key);if(value)return value;var result=fn.apply(this,args);return cache.set(key,result),result}}},577:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.omit=function(obj,keys){return Object.keys(obj).filter(function(key){return keys.indexOf(key)<0}).reduce(function(newObj,key){var _a;return Object.assign(newObj,((_a={})[key]=obj[key],_a))},{})}},578:function(module,exports,__webpack_require__){"use strict";(function(module){var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.withStorySource=__webpack_require__(66).withStorySource,exports.__STORY__='import * as React from \'react\';\n\nimport { storiesOf } from \'@storybook/react\';\nimport { action } from \'@storybook/addon-actions\';\nimport useForm from \'../index\';\n\ninterface IForm {\n  name: string;\n  password: string;\n}\n\nconst Demo = () => {\n  const [form, field] = useForm<IForm>({\n    name: \'admin\',\n    password: \'password\',\n  });\n\n  const handleSubmit = event => {\n    event.preventDefault();\n    form.validate(errors => {\n      if (!errors) {\n        action(\'submit\')(form.value);\n      }\n    });\n  };\n\n  return (\n    <section className="section container">\n      <div className="columns">\n        <div className="column is-three-fifths">\n          <form onSubmit={handleSubmit}>\n            <div className="field">\n              <label className="label">text</label>\n              <input className="input" type="text" {...field(\'name\')} />\n            </div>\n            <div className="field">\n              <label className="label">password</label>\n              <input className="input" type="password" {...field(\'password\')} />\n            </div>\n            <div className="field">\n              <button type="submit" className="button is-link">\n                submit\n              </button>\n            </div>\n          </form>\n        </div>\n        <div className="column">\n          <div className="notification" style={{ wordBreak: \'break-all\' }}>\n            {JSON.stringify(form.value)}\n          </div>\n        </div>\n      </div>\n    </section>\n  );\n};\n\nstoriesOf(\'rc-use-form\', module).add(\'initial value\', () => <Demo />);\n',exports.__ADDS_MAP__={"rc-use-form--initial-value":{startLoc:{col:37,line:57},endLoc:{col:68,line:57}}};var React=__webpack_require__(0),react_1=__webpack_require__(22),addon_actions_1=__webpack_require__(83),index_1=__webpack_require__(84),Demo=function(){var _a=index_1.default({name:"admin",password:"password"}),form=_a[0],field=_a[1];return React.createElement("section",{className:"section container"},React.createElement("div",{className:"columns"},React.createElement("div",{className:"column is-three-fifths"},React.createElement("form",{onSubmit:function(event){event.preventDefault(),form.validate(function(errors){errors||addon_actions_1.action("submit")(form.value)})}},React.createElement("div",{className:"field"},React.createElement("label",{className:"label"},"text"),React.createElement("input",__assign({className:"input",type:"text"},field("name")))),React.createElement("div",{className:"field"},React.createElement("label",{className:"label"},"password"),React.createElement("input",__assign({className:"input",type:"password"},field("password")))),React.createElement("div",{className:"field"},React.createElement("button",{type:"submit",className:"button is-link"},"submit")))),React.createElement("div",{className:"column"},React.createElement("div",{className:"notification",style:{wordBreak:"break-all"}},JSON.stringify(form.value)))))};react_1.storiesOf("rc-use-form",module).addDecorator(exports.withStorySource(exports.__STORY__,exports.__ADDS_MAP__)).add("initial value",function(){return React.createElement(Demo,null)})}).call(this,__webpack_require__(14)(module))},579:function(module,exports,__webpack_require__){"use strict";(function(module){var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.withStorySource=__webpack_require__(66).withStorySource,exports.__STORY__="import * as React from 'react';\n\nimport { storiesOf } from '@storybook/react';\nimport { action } from '@storybook/addon-actions';\nimport useForm from '../index';\n\ninterface IForm {\n  name: string;\n  password: string;\n}\n\nconst Demo = () => {\n  const [form, field] = useForm<IForm>({\n    name: '',\n    password: '',\n  });\n\n  const handleSubmit = event => {\n    event.preventDefault();\n    form.validate(errors => {\n      if (!errors) {\n        action('submit')(form.value);\n      } else {\n        action('errors')(errors);\n      }\n    });\n  };\n\n  return (\n    <div className=\"section container\">\n      <h3 className=\"title is-3\">validation</h3>\n      <form onSubmit={handleSubmit}>\n        <div className=\"field\">\n          <label className=\"label\">username</label>\n          <input\n            className=\"input\"\n            type=\"text\"\n            {...field('name', {\n              rules: [{ type: 'string', required: true }],\n            })}\n          />\n          {form.errors.name && <p className=\"help is-danger\">{form.errors.name[0].message}</p>}\n        </div>\n        <div className=\"field\">\n          <label className=\"label\">password</label>\n          <input\n            className=\"input\"\n            type=\"password\"\n            {...field('password', {\n              rules: [{ type: 'string', required: true }],\n            })}\n          />\n          {form.errors.password && <p className=\"help is-danger\">{form.errors.password[0].message}</p>}\n        </div>\n        <button type=\"submit\" className=\"button is-link\">\n          submit\n        </button>\n      </form>\n    </div>\n  );\n};\n\nstoriesOf('rc-use-form', module).add('validate', () => <Demo />);\n",exports.__ADDS_MAP__={"rc-use-form--validate":{startLoc:{col:37,line:63},endLoc:{col:63,line:63}}};var React=__webpack_require__(0),react_1=__webpack_require__(22),addon_actions_1=__webpack_require__(83),index_1=__webpack_require__(84),Demo=function(){var _a=index_1.default({name:"",password:""}),form=_a[0],field=_a[1];return React.createElement("div",{className:"section container"},React.createElement("h3",{className:"title is-3"},"validation"),React.createElement("form",{onSubmit:function(event){event.preventDefault(),form.validate(function(errors){errors?addon_actions_1.action("errors")(errors):addon_actions_1.action("submit")(form.value)})}},React.createElement("div",{className:"field"},React.createElement("label",{className:"label"},"username"),React.createElement("input",__assign({className:"input",type:"text"},field("name",{rules:[{type:"string",required:!0}]}))),form.errors.name&&React.createElement("p",{className:"help is-danger"},form.errors.name[0].message)),React.createElement("div",{className:"field"},React.createElement("label",{className:"label"},"password"),React.createElement("input",__assign({className:"input",type:"password"},field("password",{rules:[{type:"string",required:!0}]}))),form.errors.password&&React.createElement("p",{className:"help is-danger"},form.errors.password[0].message)),React.createElement("button",{type:"submit",className:"button is-link"},"submit")))};react_1.storiesOf("rc-use-form",module).addDecorator(exports.withStorySource(exports.__STORY__,exports.__ADDS_MAP__)).add("validate",function(){return React.createElement(Demo,null)})}).call(this,__webpack_require__(14)(module))},580:function(module,exports,__webpack_require__){"use strict";(function(module){var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.withStorySource=__webpack_require__(66).withStorySource,exports.__STORY__="import * as React from 'react';\n\nimport { storiesOf } from '@storybook/react';\nimport { action } from '@storybook/addon-actions';\nimport useForm from '../index';\n\ninterface IForm {\n  name: string;\n  password: string;\n}\n\nconst Demo = () => {\n  const [form, field] = useForm<IForm>({\n    name: '',\n    password: '',\n  });\n\n  const handleSubmit = event => {\n    event.preventDefault();\n    form.validate(errors => {\n      if (!errors) {\n        action('submit')(form.value);\n      } else {\n        action('errors')(errors);\n      }\n    });\n  };\n\n  return (\n    <div className=\"section container\">\n      <h3 className=\"title is-3\">Validate trigger onblur</h3>\n      <form onSubmit={handleSubmit}>\n        <div className=\"field\">\n          <label className=\"label\">username</label>\n          <input\n            className=\"input\"\n            type=\"text\"\n            {...field('name', {\n              rules: [{ len: 4, trigger: 'blur' }, { required: true }],\n            })}\n          />\n          {form.errors.name && <p className=\"help is-danger\">{form.errors.name[0].message}</p>}\n        </div>\n        <div className=\"field\">\n          <label className=\"label\">password</label>\n          <input\n            className=\"input\"\n            type=\"password\"\n            {...field('password', {\n              rules: [{ len: 4, trigger: 'blur' }, { required: true }],\n            })}\n          />\n          {form.errors.password && <p className=\"help is-danger\">{form.errors.password[0].message}</p>}\n        </div>\n        <button type=\"submit\" className=\"button is-link\">\n          submit\n        </button>\n      </form>\n    </div>\n  );\n};\n\nstoriesOf('rc-use-form', module).add('validate(trigger onBlur)', () => <Demo />);\n",exports.__ADDS_MAP__={"rc-use-form--validate-trigger-onblur":{startLoc:{col:37,line:63},endLoc:{col:79,line:63}}};var React=__webpack_require__(0),react_1=__webpack_require__(22),addon_actions_1=__webpack_require__(83),index_1=__webpack_require__(84),Demo=function(){var _a=index_1.default({name:"",password:""}),form=_a[0],field=_a[1];return React.createElement("div",{className:"section container"},React.createElement("h3",{className:"title is-3"},"Validate trigger onblur"),React.createElement("form",{onSubmit:function(event){event.preventDefault(),form.validate(function(errors){errors?addon_actions_1.action("errors")(errors):addon_actions_1.action("submit")(form.value)})}},React.createElement("div",{className:"field"},React.createElement("label",{className:"label"},"username"),React.createElement("input",__assign({className:"input",type:"text"},field("name",{rules:[{len:4,trigger:"blur"},{required:!0}]}))),form.errors.name&&React.createElement("p",{className:"help is-danger"},form.errors.name[0].message)),React.createElement("div",{className:"field"},React.createElement("label",{className:"label"},"password"),React.createElement("input",__assign({className:"input",type:"password"},field("password",{rules:[{len:4,trigger:"blur"},{required:!0}]}))),form.errors.password&&React.createElement("p",{className:"help is-danger"},form.errors.password[0].message)),React.createElement("button",{type:"submit",className:"button is-link"},"submit")))};react_1.storiesOf("rc-use-form",module).addDecorator(exports.withStorySource(exports.__STORY__,exports.__ADDS_MAP__)).add("validate(trigger onBlur)",function(){return React.createElement(Demo,null)})}).call(this,__webpack_require__(14)(module))},581:function(module,exports,__webpack_require__){"use strict";(function(module){var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.withStorySource=__webpack_require__(66).withStorySource,exports.__STORY__="import * as React from 'react';\nimport { storiesOf } from '@storybook/react';\nimport { action } from '@storybook/addon-actions';\nimport useForm from '../index';\n\ninterface IForm {\n  name: string;\n  password: string;\n}\n\nconst Message = () => {\n  return (\n    <>\n      <span className=\"message\">please input username !!!!!!!!!</span>\n      <style>{`\n        .message {\n          color: red;\n          margin-bottom: 10px;\n          display: inline-block;\n        }\n      `}</style>\n    </>\n  );\n};\n\nconst Demo = () => {\n  const [form, field] = useForm<IForm>({\n    name: '',\n    password: '',\n  });\n\n  const handleSubmit = event => {\n    event.preventDefault();\n    form.validate(errors => {\n      if (!errors) {\n        action('submit')(form.value);\n      } else {\n        action('errors')(errors);\n      }\n    });\n  };\n\n  return (\n    <div className=\"section container\">\n      <h3 className=\"title is-3\">Custom error message</h3>\n      <form onSubmit={handleSubmit}>\n        <div className=\"field\">\n          <label className=\"label\">username</label>\n          <input\n            className=\"input\"\n            type=\"text\"\n            {...field('name', {\n              rules: [{ type: 'string', required: true, message: <Message /> }],\n            })}\n          />\n          {form.errors.name && <p className=\"help is-danger\">{form.errors.name[0].message}</p>}\n        </div>\n        <div className=\"field\">\n          <label className=\"label\">password</label>\n          <input\n            className=\"input\"\n            type=\"password\"\n            {...field('password', {\n              rules: [{ type: 'string', required: true, message: 'password required !!!' }],\n            })}\n          />\n          {form.errors.password && <p className=\"help is-danger\">{form.errors.password[0].message}</p>}\n        </div>\n        <button type=\"submit\" className=\"button is-link\">\n          submit\n        </button>\n      </form>\n    </div>\n  );\n};\n\nstoriesOf('rc-use-form', module).add('validate(custom error message)', () => <Demo />);\n",exports.__ADDS_MAP__={"rc-use-form--validate-custom-error-message":{startLoc:{col:37,line:77},endLoc:{col:85,line:77}}};var React=__webpack_require__(0),react_1=__webpack_require__(22),addon_actions_1=__webpack_require__(83),index_1=__webpack_require__(84),Message=function(){return React.createElement(React.Fragment,null,React.createElement("span",{className:"message"},"please input username !!!!!!!!!"),React.createElement("style",null,"\n        .message {\n          color: red;\n          margin-bottom: 10px;\n          display: inline-block;\n        }\n      "))},Demo=function(){var _a=index_1.default({name:"",password:""}),form=_a[0],field=_a[1];return React.createElement("div",{className:"section container"},React.createElement("h3",{className:"title is-3"},"Custom error message"),React.createElement("form",{onSubmit:function(event){event.preventDefault(),form.validate(function(errors){errors?addon_actions_1.action("errors")(errors):addon_actions_1.action("submit")(form.value)})}},React.createElement("div",{className:"field"},React.createElement("label",{className:"label"},"username"),React.createElement("input",__assign({className:"input",type:"text"},field("name",{rules:[{type:"string",required:!0,message:React.createElement(Message,null)}]}))),form.errors.name&&React.createElement("p",{className:"help is-danger"},form.errors.name[0].message)),React.createElement("div",{className:"field"},React.createElement("label",{className:"label"},"password"),React.createElement("input",__assign({className:"input",type:"password"},field("password",{rules:[{type:"string",required:!0,message:"password required !!!"}]}))),form.errors.password&&React.createElement("p",{className:"help is-danger"},form.errors.password[0].message)),React.createElement("button",{type:"submit",className:"button is-link"},"submit")))};react_1.storiesOf("rc-use-form",module).addDecorator(exports.withStorySource(exports.__STORY__,exports.__ADDS_MAP__)).add("validate(custom error message)",function(){return React.createElement(Demo,null)})}).call(this,__webpack_require__(14)(module))},84:function(module,exports,__webpack_require__){"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__webpack_require__(0),async_validator_1=__webpack_require__(582),safe_get_1=__webpack_require__(574),map_values_1=__webpack_require__(575),memoize_1=__webpack_require__(576),omit_1=__webpack_require__(577),getValidator=memoize_1.memoize(function(descriptor){return Object.keys(descriptor).length?new async_validator_1.default(descriptor):null});exports.default=function(intial){var initialData=intial||{},_a=react_1.useState({fields:Object.keys(initialData).reduce(function(prev,key){return state=prev,name=key,value=initialData[key],Object.assign(state,((_a={})[name]={value:safe_get_1.get(state,name+".value")||value,touched:!1,error:[]},_a));var state,name,value,_a},{}),errors:{}}),state=_a[0],setState=_a[1],updateField=function(name,data){var _a;void 0===data&&(data={});var newState=__assign({},state,{fields:__assign({},state.fields,(_a={},_a[name]=__assign({},state.fields[name],data),_a))});return setState(newState),newState},fieldOptions=[],innerValidate=function(callback,keys,type,newState){void 0===newState&&(newState=state);var isBlur="blur"===type,descriptor=fieldOptions.reduce(function(prev,item){var _a,rules=safe_get_1.get(item,"option.rules");return rules?Object.assign(prev,((_a={})[item.name]=rules.filter(function(rule){return!type||(isBlur?"blur"===rule.trigger:"blur"!==rule.trigger)}),_a)):prev},{}),validator=getValidator(descriptor);if(validator){var formValue=getFormValue(newState);validator.validate(formValue,function(errors,fields){var error=function(fields,keys,newState){var errors=Array.isArray(keys)?keys.reduce(function(prev,key){var _a,fieldsError=fields||{};return fieldsError[key]?__assign({},prev,((_a={})[key]=fieldsError[key],_a)):omit_1.omit(prev,[key])},newState.errors):fields||{},errorState=__assign({},newState,{errors:errors});return setState(errorState),errorState}(fields,keys,newState);errors?callback&&callback(error.errors):callback&&callback()})}else callback&&callback()},getFormValue=function(newState){return void 0===newState&&(newState=state),map_values_1.mapValues(newState.fields,function(field){return field.value})};return[{get value(){return getFormValue()},get errors(){return state.errors},get touched(){return map_values_1.mapValues(state.fields,function(field){return field.touched})},validate:function(callback,keys){return innerValidate(callback,keys)}},function(name,option){return void 0===option&&(option={}),fieldOptions.push({name:name,option:option}),{get value(){return safe_get_1.get(state,"fields."+name+".value")},onChange:function(event){var value=event.target?event.target.value:event,newState=updateField(name,{value:value,touched:!0});innerValidate(function(){},[name],"change",newState)},onBlur:function(){var newState=updateField(name,{touched:!0});innerValidate(function(){},[name],"blur",newState)}}}]}}},[[260,1,2]]]);
//# sourceMappingURL=main.2094e00539b292300449.bundle.js.map