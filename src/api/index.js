
// import jsonp from 'jsonp'
import ajax from './ajax'



// 发送login请求
export const reqLogin = (data) => ajax("/login",data,"POST");

// 发送天气请求
export const getWeather = (cityname) => ajax("/getweather", {cityname})

