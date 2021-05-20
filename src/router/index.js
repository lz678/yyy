
import login from "../pages/login/login"
import tab from "../pages/tab/tab"
import campus from '../pages/campus/campus'
import bookcase from "../pages/bookcase/bookcase"
import sale from '../pages/sale/sale'
import me from '../pages/me/me'
import changecity from '../pages/changecity/changeCity'
const routes = [
  {
    path: '/login',
    // component: () => import('../pages/login/login'),
    component: login,
    exact: true,
  },
  {
    path: '/changecity',
    component: changecity,
    exact: true,
  },
  
  {
    path: '/',
    component: tab,
    children: [
      {
        path: '/campus',
        component: campus,
      },
      {
        path: '/bookcase',
        component: bookcase,
      },
      {
        path: '/sale',
        component:sale,
      },
      {
        path: '/me',
        component: me,
      }
    ]
  }
]
export default routes
// import React, { Component } from 'react'
// import { Route, Switch, withRouter, BrowserRouter } from 'react-router-dom'
// import login from "../pages/login/login"
// import campus from "../pages/campus/campus"
// import app from '../pages/app/app'
// import my from '../pages/my/my.jsx'
// import tab from '../pages/tab/tab.jsx'
// class Router extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//     }
//   }

//   render() {
//     return (
//       <BrowserRouter>
//         <Switch>
//         <Route exact path="/tab" component={withRouter(tab)} />
//           <Route exact path="/login" component={withRouter(login)} />
//           <Route exact path="/campus" component={withRouter(campus)} />
//           <Route exact path="/app" component={withRouter(app)} />
//           <Route exact path="/my" component={withRouter(my)} />
//         </Switch>
//       </BrowserRouter>
//     )
//   }
// }
// export default Router
