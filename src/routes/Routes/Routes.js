import {createBrowserRouter} from 'react-router-dom';
import Main from '../../layout/Main';
import Category from '../../pages/Category/Category/Category';
import Home from '../../pages/Home/Home/Home';
import Login from '../../pages/Login/Login/Login';
import Register from '../../pages/Login/Register/Register';
import News from '../../pages/News/News/News';
import Profile from '../../pages/Others/Profile/Profile';
import TermsAndConditions from '../../pages/Others/TermsAndConditions/TermsAndConditions';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('http://localhost:5000/news')
      },
      {
        path: '/category/:id',
        element: <Category />,
        loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
      },
      {
        path: '/news/:id',
        element:  <PrivateRoute><News /></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/terms',
        element: <TermsAndConditions />
      },
      {
        path: '/profile',
        element: <PrivateRoute> <Profile /> </PrivateRoute>,
      }
    ]
  }
])