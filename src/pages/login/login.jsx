import React from 'react'
import "./login.scss"
import { InputItem } from 'antd-mobile';
import api from '../../api/index'
export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: '',
            pwd: ''
        }
    }
    componentWillMount() {
      }
    countchange=(event)=>{
        this.setState({
            count:event
        })
    }
    pwdchange=(event)=>{
        this.setState({
            pwd:event
        })
    }
    login = () => {
        console.log(typeof(this.state.count),typeof(this.state.pwd) );
        // alert(this.state.count,this.state.pwd)
        api.userLogin({
            account:this.state.count,
            password:this.state.pwd
        })
        .then((data)=>{
            console.log(data);
            if(data.data.code===1){
                this.props.history.push('/campus')
                localStorage.setItem('token',1)
            }
        })
    }
    render() {
        return (
            <div>
                <div className="bbox">
                    <div className="type">登录</div>
                    <div className="logobox">
                        <img src={require('../../assets/logo.png')} alt="log" />
                    </div>
                    <div className="inputbox">
                        <div className="title">学号</div>
                            <InputItem
                                placeholder="请输入学号"
                                 type="text"
                                value={this.state.count}
                                onChange={this.countchange}
                            ></InputItem>
                        {/* <input type="text" value={this.state.count} onChange={this.countchange}/> */}
                        <div className="title">登录密码</div>
                            <InputItem
                                placeholder="请输入密码"
                                type="password"
                                value={this.state.pwd} 
                                onChange={this.pwdchange}
                               
                            ></InputItem>
                        {/* <input type="text" value={this.state.pwd} onChange={this.pwdchange}/> */}
                        <div className="foot">
                            <div className="register" >注册</div>
                            <div className="forget" >忘记密码？</div>
                        </div>
                    </div>
                    <div className="btn" onClick={this.login}>登录</div>
                </div>

            </div>

        )
    }
}