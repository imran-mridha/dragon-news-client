import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import BrandCarousel from '../Carousel/BrandCarousel/BrandCarousel';
import SocialFlow from '../Social/SocialFlow/SocialFlow';

const RightSideNav = () => {
  return (
    <div>
      <div>
        <ButtonGroup vertical className='w-100'>
          <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login via Google</Button>
          <Button variant="outline-dark"> <FaGithub /> Login via Github</Button>
        </ButtonGroup>
      </div>
      <div className='my-3'>
        <h5>Find Us On</h5>
        <SocialFlow />
      </div>
      <div>
        <BrandCarousel />
      </div>
    </div>
  );
};

export default RightSideNav;