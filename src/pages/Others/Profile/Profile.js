import React,{useContext,useState,useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
  
  const {user,updateUserProfile,setLoading} = useContext(AuthContext);
  const [name, setName] = useState(user.displayName);
  const photoURLRef = useRef(user.photoURL)

  const handleProfileUpdate = (e) =>{
    e.preventDefault();
    const photoUrl = photoURLRef.current.value;
    const profile = {
      displayName: name,
      photoURL : photoUrl
    }
    updateUserProfile(profile)
    .then(()=>{
      setLoading(false)
    })
    .catch(e => console.error(e))
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  return (
    <Form onSubmit={handleProfileUpdate}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control onChange={handleNameChange} defaultValue={name} type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhoto">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control ref={photoURLRef} defaultValue={user.photoURL} type="text" placeholder="Photo Url" />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control defaultValue={user?.password} type="password" placeholder="Password" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
  );
};

export default Profile;