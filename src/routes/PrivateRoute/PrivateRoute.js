import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {

  const location = useLocation();

  const { user, loading } = useContext(AuthContext);

  if(loading){
    return (
      <div className='d-flex justify-content-center align-items-center vh-100'><Spinner animation="grow" variant="primary" /></div>
    )
  }

  if (user) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRoute;