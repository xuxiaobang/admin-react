import React, {Component} from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


// 引入图片
import Logo from '../../assets/images/logo.png'
import './login.less'


class Login extends Component {
    //
    handleSubmit = (values) => {
        console.log(values)
    }
    handleFailed = ({errorFields}) => {
        console.log(errorFields)
    }
    /*
      自定义密码的验证
        1). 必须输入
        2). 必须大于等于4位
        3). 必须小于等于12位
        4). 必须是英文、数字或下划线组成
       */
    validator = (rule, value) => new Promise((resolve,reject) => {
        // console.log(arguments)
        /*
        * callback() 不传参数表示验证通过
        * callback("文本") 传参数表示验证没有通过, 参数为提示文本
        * callback 已经弃用
        * 以前callback的用法
        * if(!value){
        *   callbak(“密码必须输入”)
        * }
        * */
        if(!value){
            reject("请输入密码")
        }else if(value.length < 4){
            reject("密码长度不能小于4位")
        }else if(value.length > 12){
            reject("密码长度不能大于12位")
        }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
            reject("密码必须由英文,数字或下划线组成")
        }else{
            resolve()
        }
    })

    render() {
        return (
            <div className='login'>
                {/* header */}
                <header className="login-header">
                    <img src={Logo} alt="login"/>
                    <h1>React项目: 后台管理系统</h1>
                </header>
                {/* content */}
                <section className="login-content">
                    <h2>用户登录</h2>

                    {/* Form */}
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            username: "admin",
                        }}
                        onFinish={this.handleSubmit}
                        onFinishFailed = {this.handleFailed}
                    >
                        {/*
                            用户名的规则
                                1.必须输入
                                2.必须大于等于4为
                                3.必须小于等于12为
                                4.必须是英文,数字或下划线组成
                        */}
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    whitespace:true,
                                    message: '请输入用户名!',
                                },
                                {
                                    min: 4,
                                    message:'用户名最少由4位字母,数字,下划线组成'
                                },
                                {
                                    max: 12,
                                    message:'用户名最多由12位字母,数字,下划线组成'
                                },
                                {
                                    pattern: /^[a-zA-Z0-9_]+$/,
                                    message:'用户名由必须由字母,数字,下划线组成'
                                }
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />}
                                   placeholder="请输入用户名"
                                   style={{ color: 'rgba(0,0,0,.25)' }}
                                   name= "username"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    validator:this.validator
                                }
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                style={{ color: 'rgba(0,0,0,.25)' }}
                                placeholder="请输入密码"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button className="login-form-button" type="primary" htmlType="submit">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        );
    }
}

export default Login;

