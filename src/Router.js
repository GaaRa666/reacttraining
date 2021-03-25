import React , { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from "./components/Home"
import Login from "./components/Login"
import Profile from "./components/Profile"

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/profile" component={Profile} />
                    {/* <Route path="/news" component={News} /> */}
                </Switch>
            </BrowserRouter>
                
            
        )
    }
}
