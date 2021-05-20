import http from "../request/index.js"
export default{
     // 用户注册
    userRegister(data){
        return http.get('register',{params:data})
    },
    // 用户登录
    userLogin(data){
        return http.get('login',{params:data})
    },
    // 用户忘记重设密码
    userChangepd(data){
        return http.get('changepwd',{params:data})
    },
    // 热门景点
    hotTour(){
        return http.get('tourism')
    },
    //热门音乐
    hotMusic(data){
        return http.get('hotMusic',{params:data})
    },
    // 发布旧书
    salebook(data){
        return http.get('salebook',{params:data})
    },
    //获取书籍种类
    getbooktype(data){
        return http.get('booktype',{params:data})
    },
    // 获取旧书列表
    getbooklist(data){
        return http.get('booklist',{params:data})
    },
    // 获取个人页面信息
    getPersonInfo(data){
        return http.get('info',{params:data})
    },
    // 获取出售价格规则
    getSaleRule(){
        return http.get('salerule')
    },
    //安全建议
    getsafeinformation(){
        return http.get('safe')
    },
    //重新设置昵称
    getResetNickName(data){
        return http.get('resetNickName',{params:data})
    }
}