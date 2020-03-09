import React, {Component} from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


// 引入图片
import Logo from '../../assets/images/logo.png'
import './login.less'

class Login extends Component {
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
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                    </Form>
                </section>
            </div>
        );
    }
}

export default Login;

