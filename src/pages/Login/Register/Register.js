import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {

  const [error, setError] = useState('');
  const [accepted, setAccepted] = useState(false);

  const navigate = useNavigate()


  const { createUser, updateUserProfile,verifyEmail } = useContext(AuthContext)

  const handleRegister = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        updateProfile(name, photoURL);
        hadleEmailVerify();
        toast.success('Registration Success!! Verify Email sent.')
      })
      .catch(error => setError(error.message))
  }

  const handleAccepted = event => {
    setAccepted(event.target.checked)
  }

  const updateProfile = (name, photoURL) => {
    const profile = {
      displayName : name,
      photoURL : photoURL
    }
    updateUserProfile(profile)
    .then(()=>{})
    .catch(e => console.error(e))
  }

  const hadleEmailVerify = () => {
    verifyEmail()
    .then(()=> {})
    .catch(e => console.error(e))
  }

  return (
    <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhoto">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" required />
        <Form.Text className="text-danger">
          {error}
        </Form.Text>
        <Form.Group className="my-3" controlId="formBasicCheckbox">
          <Form.Check onClick={handleAccepted} type="checkbox" label={<>Accept <Link to='/terms'>Terms and Conditions</Link> </>} />
        </Form.Group>
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accepted}>
        Register
      </Button>
    </Form>
  );
};

export default Register;