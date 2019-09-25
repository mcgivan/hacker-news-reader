import React, { useState, useEffect } from "react";
import { Link } from '@reach/router';
import { getNewStories, getItem } from "../utils/api";

const getMarkup = html => ({
    __html: html
});

const getDateString = date => {
    var dt = new Date(+date*1000);
    return `${dt.toLocaleDateString()} ${dt.toLocaleTimeString()}`;
}

const Item = ({id}) => {

    return (
        <div className="item">
            <h1></h1>
        </div>
    );
}

const ShortItem = ({id}) => {
    const [data, setData] = useState(null);
    useEffect(()=>{
        getItem(id)
            .then(story=>{
                setData(story);
            })
    }, [id]);
    if(!data) {
        return (<div className="item">Story {id} is loading...</div>); 
    }
    return (<div className="short-item">
        <h4><Link to={`/item/${data.id}`}>{data.title}</Link></h4>
        <div>{getDateString(data.time)}</div>
        <p>by {data.by}</p>
    </div>);
};

const ItemsList = ({itemIds}) => {
  return itemIds.map(id => (<ShortItem key={id} id={id} />));
};

const Feed = props => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getNewStories().then(data => {
        setItems(data.slice(0, 10));
    })
  }, []);

    return (
        <div className="news-feed-wrapper">
            <h1>News Feed</h1>
            <ItemsList itemIds={items} />
        </div>
    );
};

export default Feed;
