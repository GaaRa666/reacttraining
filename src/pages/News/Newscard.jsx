import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Newscard.scss'
import NewsModal from './NewsModal/NewsModal'

export default class Newscard extends Component {
    constructor(props) {
        super(props);
        }
    render() {
        return (
            <li>
            <div>
            <h2>{(this.props.value.title) }</h2>
             <img src={this.props.value.urlToImage} alt="img"/>
            </div>
             <p>{(this.props.value.description) }</p>
             <Link to ={{ pathname: "/newsmodal", state : {value: this.props.value}}} > Читать далее</Link>
            </li>
        )
    }
}
