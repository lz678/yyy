import React, { Component } from 'react'
import api from "../../api/index"
import './me.scss'
export default class me extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    GetPersonInfo=()=>{
        api.getPersonInfo()
        .then((data)=>{
            console.log(data);
        })
    }
    conponentDidMount(){
        console.log(123);
    }
    render() {
        return (
            <div className="bbox">
                <div className="nav">个人中心</div>
                <div className="boxone">
                    <div className="headimg">
                        <img src={require('../../assets/auther.png')} alt='112' />
                    </div>
                    <div className="headname">
                        <span className="nameone">昵称：</span>
                        <div className="namethree">ID:</div>
                    </div>
                </div>
                <div className="hr"></div>
                <div className="menu">
                </div>
            </div>
        )
    }
}

 
