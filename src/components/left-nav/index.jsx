import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import { Menu} from 'antd';


// left nav data
import menuList from '../../config/menuConfig'


import logo from '../../assets/images/logo.png'
import './index.less'

const { SubMenu } = Menu;

class LeftNav extends Component {

    // 定义state来出来打开二级导航
    state = {
        openKey : []
    }

    // 将导航数据处理为DOM 结构
    // 方法一
    // getMenuNodes = (nemuList) => {
    //     // return 一个JSX的数组
    //     return nemuList.map(item => {
    //         // 通过children属性判断是不是有二级导航
    //         if(!item.children){
    //             return (
    //                 <Menu.Item key={item.key}>
    //                     <Link to={item.key}>
    //                         <item.icon />
    //                         <span>{item.title}</span>
    //                     </Link>
    //                 </Menu.Item>
    //             )
    //         }else{
    //             // 有二级导航
    //             return (
    //                 <SubMenu
    //                     key={item.key}
    //                     title ={
    //                         <span>
    //                              <item.icon />
    //                             <span>{item.title}</span>
    //                         </span>
    //                     }
    //                 >
    //                     {
    //                         this.getMenuNodes(item.children)
    //                     }
    //                 </SubMenu>
    //             )
    //         }
    //     })
    // }


    // 方法二
    getMenuNodes = (menuList) => {
        // 获取当前的path
        const {pathname} = this.props.location;

        return menuList.reduce((prev, item) => {
            // 通过children属性判断是不是有二级导航
            if(!item.children){
                prev.push(
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <item.icon />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            }else {
                // 有二级导航
                // 判断当前的的路由是不是二级导航的路由,如果是的话就是用当前父级的key
                const cItem = item.children.find(cItem => cItem.key.includes(pathname))
                // 如果cItem有值说明被选中二楼
                // console.log(cItem)
                if(cItem){
                    // this.openKey = item.key
                    this.setState({
                        openKey: [item.key]
                    })
                }

                prev.push(
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                 <item.icon/>
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

            return prev;
        },[])
    }

    // 当二级导航打开改变的时候执行函数
    onOpenChange = (openKeys) => {
        // console.log(openKeys)
        // 通过打印arguments就会发现接受一个数组,里面是当前打开几个可以
        // this.openKey = openKeys[1]
        const latestOpenKey = openKeys.find(openKey => !this.state.openKey.includes(openKey))


        this.setState({
            openKey: latestOpenKey ? [latestOpenKey] : []
        })

    }


    // 在组件创建的时候执行函数, 然后将函数执行后的结果保存在this中
    UNSAFE_componentWillMount(){
        this.menuList  = this.getMenuNodes(menuList)
    }



    render() {
        // console.log(this.props.location)
        const {location} = this.props
        const pathname = location.pathname
        // 需要处理跳转的
        // console.log(pathname)
        // 取出默认代开的key
        const openKey = this.state.openKey


        return (
            <div className="left-nav">
                <Link to="/" className="left-nav-header">
                    <img src={logo} alt="logo"/>
                    <h1>后台管理</h1>
                </Link>
                <Menu
                    selectedKeys={[pathname]}
                    openKeys={openKey}
                    mode="inline"
                    theme="dark"
                    onOpenChange={this.onOpenChange}
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
                        // 这样的书写方式,会在组件每次组件根性都有可能执行这个函数
                        // 可以在生命周期函数里,在组件创建的时候执行函数获取数据就可以了
                        // this.getMenuNodes(menuList)

                        // 数据在componentWillMount生命周期函数中获取保存在this.menuList中
                        // 所以只需要使用就可以了
                        this.menuList
                    }
                </Menu>
            </div>
        );
    }
}

/*
* 只有路由组件才会在prop里注入history ,location,match,
* 因为LeftNav不是路由组件所以不会被注入, 但是我们需要使用怎么办,
* 通过witchRouter包裹这个路由, 这样就会有我们需要的值
*
* */
export default withRouter(LeftNav)
