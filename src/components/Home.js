import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Home extends Component {
    render() {
        return (
            <div>
            <Link to="/profile" > В профиль</Link>
            <Link to="/login" > Логин</Link>
                Стартовая страница111
                <h1>ЭТО ГЛАВНАЯ СТРАНИЦА НИ ОДНА ДРУГАЯ НЕ ГЛАВНАЯ</h1>
            </div>
        )
    }
}
