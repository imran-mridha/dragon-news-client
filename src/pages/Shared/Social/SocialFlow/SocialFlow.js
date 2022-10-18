import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import {FaFacebook, FaWhatsapp, FaTwitter, FaTwitch, FaDiscord, FaYoutube } from 'react-icons/fa';

const SocialFlow = () => {
  return (
    <div>
      <ListGroup>
        <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
        <ListGroup.Item><FaYoutube /> Youtube</ListGroup.Item>
        <ListGroup.Item><FaWhatsapp /> Whatsapp</ListGroup.Item>
        <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
        <ListGroup.Item><FaDiscord /> Discord</ListGroup.Item>
        <ListGroup.Item><FaTwitch /> Twich</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default SocialFlow;