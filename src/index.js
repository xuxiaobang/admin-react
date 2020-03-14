import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import memoryUtil from './utils/memoryUtil'
import storageUtils from './utils/storageUtils'

// 从内存中取出user,查看user数据来判断是否登录
memoryUtil.user = storageUtils.getUser();

ReactDOM.render(<App />, document.getElementById('root'));


