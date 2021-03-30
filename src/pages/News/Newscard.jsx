import React, { Component } from 'react'
import './Newscard.scss'

export default class Newscard extends Component {
    constructor(props) {
        super(props);
        }
    componentDidMount(){
        console.log(this.props.value.urlToImage);
    }
    render() {
        return (
            <li>
            <div>
            <h2>{(this.props.value.title) }</h2>
             <img src={this.props.value.urlToImage} alt="img"/>
            </div>
             <p>{(this.props.value.description) }</p>
            </li>
        )
    }
}
