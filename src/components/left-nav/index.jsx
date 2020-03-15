import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Menu} from 'antd';


// left nav data
import menuList from '../../config/menuConfig'


import logo from '../../assets/images/logo.png'
import './index.less'

const { SubMenu } = Menu;

export default class LeftNav extends Component {



    // 将导航数据处理为DOM 结构
    // 方法一
    getMenuNodes = (nemuList) => {

        return nemuList.map(item => {


            // 通过children属性判断是不是有二级导航
            if(!item.children){
                return (
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <item.icon />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            }else{
                // 有二级导航

                return (
                    <SubMenu
                        key={item.key}
                        title ={
                            <span>
                                 <item.icon />
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {
                            this.getMenuNodes(item.children)
                        }
                    </SubMenu>
                )
            }
        })
    }

    render() {
        return (
            <div className="left-nav">
                <Link to="/" className="left-nav-header">
                    <img src={logo} alt="logo"/>
                    <h1>后台管理</h1>
                </Link>
                <Menu
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    theme="dark"
                >
                    {/*<Menu.Item key="1">*/}
                        {/*<Link to="/home">*/}
                            {/*<HomeOutlined />*/}
                            {/*<span>首页</span>*/}
                        {/*</Link>*/}
                    {/*</Menu.Item>*/}
                    {/*<SubMenu*/}
                        {/*key="sub2"*/}
                        {/*title ={*/}
                            {/*<span>*/}
                                {/*<AppstoreOutlined />*/}
                                {/*<span>商品</span>*/}
                            {/*</span>*/}
                        {/*}*/}
                    {/*>*/}
                        {/*<Menu.Item key="2">*/}
                            {/*<Link to="/category">*/}
                                {/*<BarsOutlined />*/}
                                {/*<span>品类管理</span>*/}
                            {/*</Link>*/}
                        {/*</Menu.Item>*/}
                        {/*<Menu.Item key="3">*/}
                            {/*<Link to="/product">*/}
                                {/*<MenuOutlined />*/}
                                {/*<span>商品管理</span>*/}
                            {/*</Link>*/}
                        {/*</Menu.Item>*/}
                    {/*</SubMenu>*/}
                    {/*<Menu.Item key="4">*/}
                        {/*<Link to="/user">*/}
                            {/*<UserOutlined />*/}
                            {/*<span>用户管理</span>*/}
                        {/*</Link>*/}
                    {/*</Menu.Item>*/}
                    {/*<Menu.Item key="5">*/}
                        {/*<Link to="/role">*/}
                            {/*<SafetyOutlined />*/}
                            {/*<span>角色管理</span>*/}
                        {/*</Link>*/}
                    {/*</Menu.Item>*/}
                    {/*<SubMenu*/}
                        {/*key="sub3"*/}
                        {/*title={*/}
                            {/*<span>*/}
                                {/*<AreaChartOutlined />*/}
                                 {/*<span>图形图标</span>*/}
                            {/*</span>*/}
                        {/*}*/}
                    {/*>*/}
                        {/*<Menu.Item key="6">*/}
                            {/*<Link to="/charts/bar">*/}
                                {/*<BarChartOutlined />*/}
                                {/*<span>柱状图</span>*/}
                            {/*</Link>*/}
                        {/*</Menu.Item>*/}
                        {/*<Menu.Item key="7">*/}
                            {/*<Link to="/charts/line">*/}
                                {/*<LineChartOutlined />*/}
                                {/*<span>折线图</span>*/}
                            {/*</Link>*/}
                        {/*</Menu.Item>*/}
                        {/*<Menu.Item key="8">*/}
                            {/*<Link to="/charts/pie">*/}
                                {/*<PieChartOutlined />*/}
                                {/*<span>饼图</span>*/}
                            {/*</Link>*/}
                        {/*</Menu.Item>*/}
                    {/*</SubMenu>*/}


                    {
                        this.getMenuNodes(menuList)
                    }
                </Menu>
            </div>
        );
    }
}

