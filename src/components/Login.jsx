import React, { Component } from 'react'
import {Redirect} from "react-router-dom"

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state ={
            login:'',
            password:'',
            authorization: false,
        }

        this.loginHandler = this.loginHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
        this.loginButtom = this.loginButtom.bind(this);
    }
     loginHandler(event) {
        this.setState({login: event.target.value})
    }
    passwordHandler(event) {
        this.setState({password: event.target.value})
    }
    loginButtom(event){
        if(this.state.login == 'admin' && this.state.password == '123'){
            this.setState({authorization: true})
            console.log("true")
            localStorage.setItem('authorization', true);
        }
        else{
            console.log("false")
        }
        console.log(this.state.login)
        console.log(this.state.password)
    }

    render() {

        if(localStorage.getItem('authorization')){
            return (
                <Redirect to="/profile/"/>
            )

        }
        else{
            return (
                <div>
                    Login
                    <input type='text'  value={this.state.login} onChange={this.loginHandler} placeholder='login'/>
                    <input type='text' value = {this.state.password} onChange = {this.passwordHandler} placeholder='password'/>
                    <button onClick = {this.loginButtom}>Login</button>
                </div>
            )
        }      
    }          
}
