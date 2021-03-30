import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {authorization: localStorage.getItem('authorization')}
    }
    render() {
        if(!this.state.authorization){
            return (
                <div>
                   ТЫ не авторизован Baka
                   <Link to="/login" > Логин</Link>
                </div>
            )
        }
        else{
            return (
                <div>
                    profile
                    {this.state.authorization}
                </div>
            )
        }
        
    }
}
