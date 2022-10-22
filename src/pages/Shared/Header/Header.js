import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate()
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate('/login')
      })
      .catch(error => console.error(error))
  }
  return (
    <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand><Link to='/'>Dragon News</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All Categories</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">

              {
                user?.uid ?
                  <>
                    <span className='mx-3'>{user?.displayName}</span>
                    <Link to='/profile'>
                      {user && user.photoURL ?

                        <Image style={{ height: '30px' }} roundedCircle src={user.photoURL} />
                        :
                        <FaUserAlt />
                      }
                    </Link>

                    <Button onClick={handleLogOut} variant="outline-dark" className='mx-3'>LogOut</Button>
                  </>
                  :
                  <>
                    <Link to='/register'>
                      <Button variant="outline-primary">Register</Button>
                    </Link>
                    <Link to='/login'>
                      <Button variant="outline-dark" className='mx-3'>Login</Button>
                    </Link>
                  </>
              }

            </Nav.Link>
            {/* <Nav.Link eventKey={2} href="#memes">

            </Nav.Link> */}
          </Nav>
          <div className='d-lg-none'>
            <LeftSideNav />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;