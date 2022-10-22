import { GoogleAuthProvider } from 'firebase/auth';
import React, {useContext} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import BrandCarousel from '../Carousel/BrandCarousel/BrandCarousel';
import SocialFlow from '../Social/SocialFlow/SocialFlow';

const RightSideNav = () => {
  const {providerLogin} = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider()

  const handleGoggoleSignIn = () =>{
    providerLogin(googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => console.error(error))
  }
  return (
    <div>
      <div>
        <ButtonGroup vertical className='w-100'>
          <Button onClick={handleGoggoleSignIn} className='mb-2' variant="outline-primary"><FaGoogle /> Login via Google</Button>
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