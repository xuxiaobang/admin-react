import React, {Component} from 'react';
import './index.less'

import LinkButton from '../link-button'
import {withRouter} from 'react-router-dom'
import {getWeather} from '../../api/index'
import {formateDate} from "../../utils/dateUtil";
import menuList from "../../config/menuConfig"

import memoryUtil from '../../utils/memoryUtil'
import storageUtil from '../../utils/storageUtils'
import { Modal} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;


class Header extends Component {

    // 创建state
    state =  {
        currentTime: formateDate(Date.now(),"YYYY-MM-DD hh:mm:ss"),
        weather: '',
        temperature: ''
    }

    // 定时器函数
    getTime = () => {
       this.timer = setInterval(() => {
           const currentTime = formateDate(Date.now(),"YYYY-MM-DD hh:mm:ss")
           this.setState({currentTime})
       },1000)
    }


    // 获取天气
    getWeather = async () => {
        let {today: {weather,temperature}} =  await getWeather("长沙")
        // console.log(weather)
        this.setState({
            weather,temperature
        })
    }

    // 处理路由切换标题函数
    getTitle = () => {
        let pathname = this.props.location.pathname
        let menu = menuList.filter((item) => {
            if(!item.children){
                return item.key === pathname;
            }else{
                let child = item.children.filter((child) => {
                    return  child.key === pathname
                } )

                return child.length
            }
        })


        return menu.length ? menu[0].title: "首页"
    }

    handleLogout = () => {
        confirm({
            title: '确定退出吗?',
            icon: <ExclamationCircleOutlined />,
            cancelText: "取消",
            okText: "确定",
            onOk:() => {
                // 如果函数执行说明点击了确定退出
                // 退出要做的几件事情
                // 1. 删除本地存储数据
                storageUtil.removeUser()
                memoryUtil.user = {}

                // 2. 页面跳转到登录页面
                this.props.history.replace("/login")
            }

        });
    }

    // 生命周期函数
    UNSAFE_componentWillMount(){
        this.getWeather()
        this.getTime()
        // this.getTitle()
    }

    // 组件关闭是清除定时器
    componentWillUnmount(){
        clearInterval(this.timer)
    }



    render() {
        // 解构state数据
        const {currentTime, weather, temperature}  = this.state;

        // 通过getTitle 获取标题
        const title = this.getTitle()

        // 获取登录信息
        const username = memoryUtil.user.username


        return (
            <div className="header">
                <div className="logout">
                    <span>欢迎, {username}</span>
                    <LinkButton onClick={this.handleLogout}>退出</LinkButton>
                </div>

                <div className="header-bottom">
                    <div className="header-bottom-left">{title}</div>
                    <div className="header-bottom-right">
                        <span>{currentTime}</span>
                        <span>{temperature}</span>
                        <span>{weather}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Header)
