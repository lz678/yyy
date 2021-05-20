import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter,HashRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import renderRoutes from './routerauth/index'
import * as serviceWorker from './serviceWorker';
import './index.css'
import routes  from './router/index.js'
import 'antd-mobile/dist/antd-mobile.css';
const authed = true // 如果登陆之后可以利用redux修改该值(关于redux不在我们这篇文章的讨论范围之内）
const authPath = '/login' // 默认未登录的时候返回的页面，可以自行设置

ReactDOM.render(
  (<HashRouter>
  {renderRoutes(routes,authed,authPath)}
  </HashRouter>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//