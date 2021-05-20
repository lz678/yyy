import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import "./bookcase.scss"
import api from "../../api/index"

export default class bookcase extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { img: require("../../assets/lunbo.png") },
                { img: require("../../assets/lunbo.png") },
                { img: require("../../assets/lunbo.png") },
            ],
            imgHeight: 176,
            bookType: [],
            bookList: [],
            num: 1
        }

    }

    Getbooktype = () => {
        api.getbooktype()
            .then((data) => {
                var book = data.data.results
                this.setState({
                    bookType: book
                }
                )
            })
    }
    change = (e) => {
        this.setState({
            num: e
        })
        this.Getbooklist(e)
    }
    Getbooklist = (a) => {
        api.getbooklist({
            num: a
        }).then((data) => {
            this.setState({
                bookList: data.data.results
            })
        })
    }
    componentDidMount() {
        console.log('已经被渲染');
        this.Getbooktype()
        this.Getbooklist(this.state.num)
    }
    render() {
        return (
            <div className="bbox">
                <div className="nav">书架</div>
                <div className="my-swipe">
                    <WingBlank>
                        <Carousel
                            autoplay={true}
                            infinite
                        >
                            {this.state.data.map(val => (
                                <img src={val.img} alt="" key={val} />
                            ))}
                        </Carousel>
                    </WingBlank>
                </div>
                <div className="Bmenu">
                    {
                        this.state.bookType.map(
                            (item) => (<div className="menuitem" key={item.num} onClick={() => { this.change(item.num) }}>{item.name}</div>)
                        )
                    }

                </div>
                <div className="menulist">
                    {
                        this.state.bookList.map(
                            (item, index) => (
                                <div className="listitem" key={index}>
                                    <div className="boxL">
                                        <div className="Lname">{item.name}</div>
                                        <div className="Lprice">{item.contact}</div>
                                    </div>
                                    <div className="boxR">{item.price}</div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        )
    }
}
