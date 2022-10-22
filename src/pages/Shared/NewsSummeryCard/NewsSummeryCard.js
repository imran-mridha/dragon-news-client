import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummeryCard = ({ news }) => {
  const { _id, title, total_view, details, image_url, author,rating } = news;
  const { img, name, published_date } = author;
  console.log(news);
  return (
    <Card className="mb-4">
      <Card.Header className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <Image
            src={img}
            roundedCircle
            style={{ height: '60px' }}
          ></Image>
          <div className='ms-3'>
            <span>{name}</span><br />
            <span>{published_date}</span>
          </div>
        </div>
        <div>
          <FaRegBookmark className='me-2' />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img className='my-4' variant="top" src={image_url} />
        <Card.Text>
          {
            details.length > 250 ?
              <p>{details.slice(0, 250) + '...'}
              <Link to={`/news/${_id}`}>Read More</Link></p>
              :
              <p>{details}</p>
          }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex align-items-center justify-content-between">
        <div className='d-flex align-items-center'>
          <FaStar className='text-warning me-2' />
          <span>{rating.number}</span>
        </div>
        <div className='d-flex align-items-center'>
          <FaEye className='me-2' />
          <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummeryCard;