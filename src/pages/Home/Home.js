import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Home extends Component {
    render() {
        return (
            <div>
            <Link to="/profile" > В профиль</Link>
            <Link to="/login" > Логин</Link>
            <Link to="/news" > Новости</Link>
                Стартовая страница
                <h1>ЭТО ГЛАВНАЯ СТРАНИЦА НИ ОДНА ДРУГАЯ НЕ ГЛАВНАЯ!!!! тут есть изменение  и тут</h1>
            </div>
        )
    }
}
