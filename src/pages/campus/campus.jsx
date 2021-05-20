import React from 'react'
import echarts from "echarts";
import axios from 'axios'
// import { PickerView, WhiteSpace } from 'antd-mobile';
import { Button, List } from 'antd-mobile';
// const Item = List.Item;
// const Brief = Item.Brief;
// import { List } from 'antd-mobile';
import './campus.scss'
export default class chengecity extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: '成都',
            opinionData: [],
            opinion: [],
            now: ''
        }
    }
    getweather = (city) => {
        // const me = [];
        axios.get("https://free-api.heweather.net/s6/weather/forecast", {
            params: {
                location: this.state.city,
                key: "54fe7c4881b942b9b2b32ae14bd7ec54"
            }
        })
            .then(
                (data) => {
                    if (data.status === 200) {
                        console.log(data);
                        data.data.HeWeather6[0].daily_forecast.forEach(item => {
                            this.setState(
                                [
                                    this.state.opinionData.push(item.tmp_max),
                                    this.state.opinion.push(item.date.substr(5))
                                ]
                            )
                        });
                        this.drawLine();
                    }

                }
            );
        axios
            .get(
                `https://free-api.heweather.net/s6/weather/now?location=${this.state.city}&key=54fe7c4881b942b9b2b32ae14bd7ec54`
            )
            .then(data => {
                if (data.status === 200) {
                    console.log(data);
                    this.setState({
                        now: data.data.HeWeather6[0].now
                    })
                    console.log(this.state.now);
                }
            });
    }
    drawLine = () => {
        this.charts = echarts.init(document.getElementById("myChart"));
        this.charts.setOption({
            grid: {
                top: "14%",
                bottom: "14%",
                right: "4%",
                left: "4%",
                containLabel: true
            },
            //x轴的配置
            // 校园页面
            xAxis: {
                type: "category",
                // name:"最近三天气温变化",
                // nameLocation: "center",
                data: this.state.opinion,
                nameRotate: 0,
                axisLine: {
                    lineStyle: {
                        color: "#666666",
                        width: 1
                    }
                },
                boundaryGap: false,
                axisLabel: {
                    show: true,
                    interval: 0,
                    rotate: 20,
                    textStyle: {
                        color: "#666"
                    }
                }
            },
            yAxis: {
                type: "value",
                name: "单位(摄氏度)",
                nameTextStyle: {
                    fontSize: 10,
                    fontWeight: 600
                },
                nameLocation: "end",
                axisLine: {
                    lineStyle: {
                        color: "#666666",
                        width: 2
                    }
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    interval: 2,
                    textStyle: {
                        color: "#666"
                    }
                }
            },

            series: [
                {
                    type: "line",
                    stack: "总量",
                    data: this.state.opinionData,
                    smooth: true,
                    lineStyle: {
                        color: "#FFCC03" //折线的颜色
                    }
                }
            ]
        })
    }
    changecity = () => {
        this.props.history.push('/changecity')
    }
    // componentWillMount() {
    //     console.log('将要被渲染');

    // }
    componentDidMount() {
        console.log('已经被渲染')
        this.drawLine()
        this.getweather()
        // this.drawLine()
    }
    render() {
        const Item = List.Item;
        return (
            <div>
                <div className="bbox">
                    <div className="nav">校园</div>
                    <div className="map">
                        <Button type="ghost" size="small" className="changecity" onClick={this.changecity}>切换城市</Button>
                        <div className="mapname">当前天气： {this.state.now.cond_txt}℃</div>
                        <div className="upbox">
                            <div className="upnum">风向：{this.state.now.wind_dir} </div>
                            <div className="upnum">空气湿度：{this.state.now.hum} %</div>
                        </div>
                        <div id="myChart"></div>
                    </div>
                    <List className="my-list icolor">
                        <Item extra="GO!" arrow="horizontal" onClick={() => {console.log(456);}}>今日天气</Item>
                        <Item extra="GO!" arrow="horizontal" onClick={() => { }}>热门景区</Item>
                        <Item extra="GO!" arrow="horizontal" onClick={() => { }}>推荐歌曲</Item>
                    </List>
                </div>

            </div>

        )
    }
}