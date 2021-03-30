import React , { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Profile from "./pages/Profile/Profile"
import News from "./pages/News/News"

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/news" component={News} />
                </Switch>
            </BrowserRouter>
                
            
        )
    }
}
