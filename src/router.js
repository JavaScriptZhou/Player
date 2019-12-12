import React from 'react';
import {Route,Redirect,HashRouter as Router}  from 'react-router-dom';
import Home from './pages/home';

class Index extends React.Component{
    
    render(){
        return(
            <Router>
                <Redirect to='/home'></Redirect>
                <Route path='/home' component={Home}></Route>
            </Router>
        )
    }
}
export default Index;