import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const  {id} = useParams();
    const categoryNews = useLoaderData();
    return (
        <>
            { id && <h2>This category News : {categoryNews.length}</h2>}
            <div>
                {
                    categoryNews.map(news=><NewsCard
                    key={news._id}
                    news={news}
                    ></NewsCard>)
                }
            </div>
        </>
    );
};

export default Category;