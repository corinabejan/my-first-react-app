import React, { useState, useEffect } from "react";
import ArticleCard from './ArticleCard';
import Timeout from "await-timeout";
import axios from 'axios';

export default function ArticleList() {
  const [articles, set_articles] = useState();

  function handleClick() {
    set_articles(articles);
  }

  // async function doSomeDataFetching() {
  //   try {
  //     const url ='https://jsonplaceholder.typicode.com/posts?_limit=5';
  //     const res = await axios.get(url);
  //     console.log(res);
  //     console.log(res.data);
  //     const title = res.map(article => {
  //       return article.title
  //     })
  //     await Timeout.set(2000);

  //     set_articles(res.data);
  //   } catch(error) {
  //     console.log(error.message)
  //   }
  // }
   
  // useEffect(
  //   doSomeDataFetching(),
  //   []
  // )
  useEffect(() => {
    async function doSomeDataFetching () {
      console.log("I'm gonna fetch some data!");
      const articles = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
      console.log(articles);
    
      await Timeout.set(2000); // time in milliseconds!
      console.log("Got back: ");
    }
    set_articles(doSomeDataFetching);
  }, []);

  return <>
  <h1>Notifications</h1>
  <div>
      <button onClick={() => handleClick()}>Clear notifications</button>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      {articles ? (
        articles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            content={article.body}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  </>
}
