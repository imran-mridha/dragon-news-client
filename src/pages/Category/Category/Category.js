import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../../Shared/NewsSummeryCard/NewsSummeryCard';


const Category = () => {
  const categoryNews = useLoaderData()
  return (
    <div>
      <h3>This category has {categoryNews.length} </h3>
      {
        categoryNews.map(news => <NewsSummeryCard key = {news._id} news = {news} />)
      }
    </div>
  );
};

export default Category;