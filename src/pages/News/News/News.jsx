import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsides from '../EditoresInside/EditorsInsides';

const News = () => {
    const news = useLoaderData();
    console.log(news)
    const {_id, title, details, image_url, category_id
    } = news;
    return (
        <>
           <div>
           <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <Link to={`/category/${category_id}`}><Button variant="danger">
            <FaArrowLeft className='me-2'/> 
            All News In This Category</Button></Link>
      </Card.Body>
    </Card>

    <EditorsInsides/>
           </div>
        </>
    );
};

export default News;