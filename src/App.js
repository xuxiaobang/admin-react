import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

// 引入模块
import Login from './pages/login/login'
import Admin from './pages/admin/admin'


function App() {
  return (
    <Router>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/" component={Admin}/>
        </Switch>
    </Router>
  );
}

export default App;
