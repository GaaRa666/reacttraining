import React, { Component } from "react";
import { Link } from "react-router-dom";
import Newscard from "./Newscard"
import './News.scss'

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
        news: [],
        url:["https://newsapi.org/v2/everything?q=tesla&from=2021-02-28&sortBy=publishedAt&apiKey=69b783a07e58446faa8e27bcee5d46dd",
        "https://newsapi.org/v2/everything?q=apple&from=2021-03-29&to=2021-03-29&sortBy=popularity&apiKey=69b783a07e58446faa8e27bcee5d46dd",
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=69b783a07e58446faa8e27bcee5d46dd"
    ]
    }
    this.buttonHandler= this.buttonHandler.bind(this);
  }
  async fetchfunction(url){
    let response = await fetch(url);

    if (response.ok) { 
     let json = await response.json();
      console.log(json);
      this.setState({news:json.articles})
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  }
  buttonHandler(event){
    
      this.fetchfunction(this.state.url[+event.target.id])
  }

  async componentDidMount() {
    this.fetchfunction(this.state.url[0])
}
 render() {
    return (
        <div>
        <Link to="/" > Домашняя</Link>
        <button id="1" onClick={this.buttonHandler} > Apple</button>
        <button id="2" onClick={this.buttonHandler} > business</button>
        <hr/>
        <ul>
         {this.state.news.map((news,index)=>
                <Newscard key={index} 
                    value={news}
                />
             )
         }
        </ul>
        </div>
    )
  }
}
