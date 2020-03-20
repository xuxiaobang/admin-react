/*
*  定义日期时间处理的工具函数模块
*  传入毫秒数, 格式化为YYYY-MM-DD 格式
* */

export function formateDate(time , formate){
    if(!time) return ''
    let date = new Date(time)

    // 处理年份
    let year = date.getFullYear() + ''
    let formateYear = /Y+/g.exec(formate)[0];
    formate = formate.replace(formateYear, year.substr(-formateYear.length))


    // 处理其他月日时分秒
    let dateObj = {
        'MM+' : toTwo(date.getMonth()),
        'DD+' : toTwo(date.getDate()),
        'hh+' : toTwo(date.getHours()),
        'mm+' : toTwo(date.getMinutes()),
        'ss+' : toTwo(date.getSeconds())
    }


    for (let key in dateObj){
        let exec = new RegExp(key).exec(formate);
        if(exec){
            formate = formate.replace(exec[0], dateObj[key])
        }
    }


    // 处理各位数的问题
    function toTwo(num){
        return (num < 10? "0": '')+num
    }

    return formate
}
