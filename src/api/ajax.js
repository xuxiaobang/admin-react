import axios from 'axios'
import {message} from 'antd';

/*
* 封装axios
* 函数返回值是promise
* 1. 优化: 统一处理异常
*   有两种方案,
*   一种是自己定义一个Promise
*       在请求出错时,提示, 没有出错时返回response.data
*    第二种是通过axios自带的拦截工具
*       axios.interceptors.response.use(成功后的函数, 请求失败后的函数)
*
* */

// 封装的请求函数
// export default function ajax(url,data={},type="GET"){
//    return new Promise((resolve,reject) => {
//        let promise = '';
//        switch(type){
//            case "GET":
//                promise = axios.get(url,{
//                    params:data
//                });
//                break;
//            case "POST":
//                promise = axios.post(url,data);
//                break;
//            default:
//                promise =  new Promise((resolve) => {
//                    resolve({
//                        data:"请检查你输入的请求类型是否有误"
//                    })
//                })
//        }
//
//        // 统一返回data数据
//        promise.then(res => {
//            resolve(res.data)
//        }).catch(err => {
//            // 请求错误
//            message.error("请求错误",err.message)
//        })
//    })
// }


// 第二种方法
// 请求拦截函数
axios.interceptors.response.use((response)=>{
    return Promise.resolve(response.data)
},error=>{
    // 同意处理错误
    message.error("请求错误"+error)
})

// 封装ajax请求函数
export default function ajax(url,data={},type="GET"){

        switch(type){
            case "GET":
                return axios.get(url,{
                    params:data
                });
            case "POST":
                return  axios.post(url,data);
            default:
                return  new Promise((resolve) => {
                    resolve({
                        data:"请检查你输入的请求类型是否有误"
                    })
                })
        }

}

