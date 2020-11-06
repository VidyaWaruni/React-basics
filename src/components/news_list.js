import React from 'react';
import NewsItem from './news_list_item';


const NewsList = (props) => {
    //obeject data get
    //this map function is just like for loop for the oject news
    const items = props.news.map((item)=>{
        return(
            <NewsItem key={item.id} item={item}/>
        )
    });

    return (
    <div>
        {props.children}
        {items}</div>
    )
} 

export default NewsList;