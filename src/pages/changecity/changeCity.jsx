import React, { Component } from 'react'
import { PickerView } from 'antd-mobile';
const province = [
    {
        label: '北京市',
        value: '北京市',
        children: [
            {
                label: '北京市',
                value: '北京市',
            },
        ],
    },
    {
        label: '天津市',
        value: '天津市',
        children: [
            {
                label: '天津市',
                value: '天津市',
            },
        ],
    },
    {
        label: "山西省",
        value: "山西省",
        children: [
            {
                label: '太原市',
                value: '太原市',
            },
            {
                label: '大同市',
                value: '大同市',
            },
            {
                label: '阳泉市',
                value: '阳泉市',
            },
            {
                label: '长治市',
                value: '长治市',
            },
            {
                label: '晋城市',
                value: '晋城市',
            },
            {
                label: '朔州市',
                value: '朔州市',
            },
            {
                label: '晋中市',
                value: '晋中市',
            },
            {
                label: '运城市',
                value: '运城市',
            },
            {
                label: '忻州市',
                value: '忻州市',
            },
            {
                label: '临汾市',
                value: '临汾市',
            },
            {
                label: '吕梁市',
                value: '吕梁市',
            },
        ]

    },
    {
        label: "内蒙古自治区",
        value: "内蒙古自治区",
        children: [
            {
                label: "呼和浩特市",
                value: "呼和浩特市",
            },
            {
                label: "包头市",
                value: "包头市",
            },
            {
                label: "乌海市",
                value: "乌海市",
            },
            {
                label: "赤峰市",
                value: "赤峰市",
            },
            {
                label: "通辽市",
                value: "通辽市",
            },
            {
                label: "鄂尔多斯市",
                value: "鄂尔多斯市",
            },
            {
                label: "呼伦贝尔市",
                value: "呼伦贝尔市",
            },
            {
                label: "巴彦淖尔市",
                value: "巴彦淖尔市",
            },
            {
                label: "乌兰察布市",
                value: "乌兰察布市",
            },
            {
                label: "兴安盟",
                value: "兴安盟",
            }, {
                label: "锡林郭勒盟",
                value: "锡林郭勒盟",
            },
            {
                label: "阿拉善盟",
                value: "阿拉善盟",
            }
        ]
    },
    {
        label: "辽宁省",
        value: "辽宁省",
        children: [
            {
                label: "沈阳市",
                value: "沈阳市",
            },
            {
                label: "大连市",
                value: "大连市",
            },
            {
                label: "鞍山市",
                value: "鞍山市",
            },
            {
                label: "抚顺市",
                value: "抚顺市",
            },
            {
                label: "本溪市",
                value: "本溪市",
            },
            {
                label: "丹东市",
                value: "丹东市",
            },
            {
                label: "锦州市",
                value: "锦州市",
            },
            {
                label: "营口市",
                value: "营口市",
            },
            {
                label: "阜新市",
                value: "阜新市",
            },
            {
                label: "辽阳市",
                value: "辽阳市",
            },
            {
                label: "盘锦市",
                value: "盘锦市",
            },
            {
                label: "铁岭市",
                value: "铁岭市",
            },
            {
                label: "朝阳市",
                value: "朝阳市",
            },
            {
                label: "葫芦岛市",
                value: "葫芦岛市",
            }
            ,]
    },
    {
        label: "吉林省",
        value: "吉林省",
        children: [
            {
                label: "长春市",
                value: "长春市",
            },
            {
                label: "吉林市",
                value: "吉林市",
            },
            {
                label: "四平市",
                value: "四平市",
            },
            {
                label: "辽源市",
                value: "辽源市",
            },
            {
                label: "通化市",
                value: "通化市",
            },
            {
                label: "白山市",
                value: "白山市",
            },
            {
                label: "松原市",
                value: "松原市",
            },
            {
                label: "白城市",
                value: "白城市",
            },
            {
                label: "延边朝鲜族自治州",
                value: "延边朝鲜族自治州",
            },
        ]
    },
    {
        label: "四川省",
        value: "四川省",
        children: [
            {
                label: "成都市",
                value: "成都市",
            },
            {
                label: "自贡市",
                value: "自贡市",
            },
            {
                label: "攀枝花市",
                value: "攀枝花市",
            },
            {
                label: "泸州市",
                value: "泸州市",
            },
            {
                label: "德阳市",
                value: "德阳市",
            },
            {
                label: "绵阳市",
                value: "绵阳市",
            },
            {
                label: "广元市",
                value: "广元市",
            },
            {
                label: "遂宁市",
                value: "遂宁市",
            },
            {
                label: "内江市",
                value: "内江市",
            },
            {
                label: "乐山市",
                value: "乐山市",
            },
            {
                label: "南充市",
                value: "南充市",
            },
            {
                label: "眉山市",
                value: "眉山市",
            },
            {
                label: "宜宾市",
                value: "宜宾市",
            },
            {
                label: "广安市",
                value: "广安市",
            },
            {
                label: "达州市",
                value: "达州市",
            },
            {
                label: "雅安市",
                value: "雅安市",
            },
            {
                label: "巴中市",
                value: "巴中市",
            },
            {
                label: "资阳市",
                value: "资阳市",
            },
            {
                label: "阿坝藏族羌族自治州",
                value: "阿坝藏族羌族自治州",
            },
            {
                label: "甘孜藏族自治州",
                value: "甘孜藏族自治州",
            },
            {
                label: "凉山彝族自治州",
                value: "凉山彝族自治州",
            },]
    },
    {
        label: "新疆维吾尔自治区",
        value: "新疆维吾尔自治区",
        children: [
            {
                label: "乌鲁木齐市",

                value: "乌鲁木齐市",
            }, {
                label: "克拉玛依市",

                value: "克拉玛依市",
            }, {
                label: "吐鲁番市",

                value: "吐鲁番市",
            }, {
                label: "哈密市",

                value: "哈密市",
            }, {
                label: "昌吉回族自治州",

                value: "昌吉回族自治州",
            }, {
                label: "博尔塔拉蒙古自治州",

                value: "博尔塔拉蒙古自治州",
            }, {
                label: "巴音郭楞蒙古自治州",

                value: "巴音郭楞蒙古自治州",
            }, {
                label: "阿克苏地区",

                value: "阿克苏地区",
            }, {
                label: "克孜勒苏柯尔克孜自治州",
                value: "克孜勒苏柯尔克孜自治州",
            }
            , {
                label: "喀什地区",

                value: "喀什地区",
            }, {
                label: "和田地区",

                value: "和田地区",
            }, {
                label: "伊犁哈萨克自治州",

                value: "伊犁哈萨克自治州",
            }, {
                label: "塔城地区",

                value: "塔城地区",
            }, {
                label: "阿勒泰地区",

                value: "阿勒泰地区",
            }, {
                label: "自治区直辖县级行政区划",
                value: "自治区直辖县级行政区划",
            }
            ,]
    },
];
export default class changecity extends Component {
    constructor(props){
        super(props)
        this.state={
            district:[
                {
                    label: '夏',
                    value: '夏',
                  },
                  {
                    label: '夏',
                    value: '夏',
                  },
            ],
        }
    }
    render() {
        return (
            <div>
                <PickerView
                    data={province}
                    value={['北京']}
                />
                
            </div>
        )
    }
}
