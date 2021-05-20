import React from "react"
import campus from '../campus/campus'
import bookcase from '../bookcase/bookcase';
import sale from '../sale/sale'
import me from '../me/me'
import './tab.scss'
import { Link, Switch, Route, Redirect } from 'react-router-dom';

export default class tab extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: [
                {
                    path: '/campus',
                    img: require("../../assets/xiaoyuan.png"),
                    activeimg: require('../../assets/xiaoyuan1.png'),
                    name: '校园'
                },
                {
                    path: '/bookcase',
                    img: require("../../assets/shujia.png"),
                    activeimg: require('../../assets/shujia1.png'),
                    name: '书架'
                },
                {
                    path: '/sale',
                    img: require("../../assets/zhihuan.png"),
                    activeimg: require('../../assets/zhihuan1.png'),
                    name: '出售'
                },
                {
                    path: '/me',
                    img: require("../../assets/geren.png"),
                    activeimg: require('../../assets/geren1.png'),
                    name: '我的'
                },
            ]
        }
    }
    render() {
        return (
            <div className='bbox'>
                <div>
                    <Switch>
                        <Route path='/campus' component={campus}></Route>
                        <Route path='/bookcase' component={bookcase}></Route>
                        <Route path='/sale' component={sale}></Route>
                        <Route path='/me' component={me}></Route>
                        <Redirect to='/campus'></Redirect>
                    </Switch>
                </div>
                <div className='tabbox'>
                    {
                        this.state.tab.map((item, index) => {
                            return (
                                <div className='tabitem' key={index}>
                                    <Link className='link' to={item.path}>
                                        <div className='tabimg'>
                                            <img src={item.img} alt="1" />
                                        </div>
                                        <div className='tabname'>
                                            {item.name}
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}