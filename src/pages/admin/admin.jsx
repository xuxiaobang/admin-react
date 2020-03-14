import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'

// antd
import { Layout } from 'antd';

// import utils
import memoryUtils from '../../utils/memoryUtil';

// admin component
import Header from '../../components/header'
import LeftNav from '../../components/left-nav'


const {  Footer, Sider, Content } = Layout;


class Admin extends Component {
    render() {
        // 从内存中取出user,查看user数据来判断是否登录
        const user = memoryUtils.user;
        console.log(user)
        if(!(user && user._id)){
            // 如果内存中是没数据的, 是没登录状态,那就跳转到登录页面
            return <Redirect to="/login" />
        }
        return (
            <Layout style={{height:"100%"}}>
                <Sider>
                    <LeftNav />
                </Sider>
                <Layout>
                    <Header />
                    <Content style={{backgroundColor:'#fff',margin: 24}}>Content</Content>
                    <Footer style={{textAlign:'center',color:'#ccc'}}>
                        推荐使用谷歌浏览器,可以获得更佳的页面操作体验
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Admin;
