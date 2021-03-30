import React, { Component } from 'react'

export default class NewsModal extends Component {
    constructor(props){
        super(props)
        
    }
    componentDidMount(){
        console.log("lalalalaala", this.props)
    }
    render() {
        let newsContent= this.props.location.state.value
        return(
            <div>
             <h1>{ ( newsContent.title)} </h1>
             <img src={newsContent.urlToImage} alt="img"/>
            
               <article> { ( newsContent.content)} А ТУТ ЕЩЕ ОЧЕНЬ МНОГА ТЕКСТА ДЛЯ АФОНИ ЧТОБЫ ОН СИДЕЛ И РАДОВАЛСЯ </article>
              { newsContent.author!=null?<p>Author: {newsContent.author}: <data>{newsContent.publishedAt}</data>  </p>:<p> Author: unknown  <data>{newsContent.publishedAt}</data></p> } 

              
            </div>
        )

    }         
}
