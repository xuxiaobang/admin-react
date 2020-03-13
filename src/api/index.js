
import ajax from './ajax'


// 发送login请求
export const reqLogin = (data) => ajax("/login",data,"POST");

