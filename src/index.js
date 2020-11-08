import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json'

//components
import Header from './components/header'
import NewsList from './components/news_list'

class App extends Component{

  state = {
    news:JSON,
    filtered:[]
  }
  getKeyword = (event) => {
    //console.log(event.target.value)
    let keyword = event.target.value;
    let filtered = this.state.news.filter((item)=>{
      return item.title.indexOf(keyword) > -1
    });
    this.setState({
      filtered
    })
    //  console.log(filtered)

  }

  render(){
    let newsFiltere = this.state.filtered;
    let newsWhole = this.state.news;
    return (
      <div>
        <Header keywords={this.getKeyword}/>
        <NewsList news={this.state.filtered.length === 0 ? newsWhole : newsFiltere}>
          <h3>The News are :</h3>
        </NewsList>
      </div>
    )
  }
  
}


ReactDOM.render(<App/>,document.querySelector('#root'));

