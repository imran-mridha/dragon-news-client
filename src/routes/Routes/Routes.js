import {createBrowserRouter} from 'react-router-dom';
import Main from '../../layout/Main';
import Category from '../../pages/Category/Category/Category';
import Home from '../../pages/Home/Home/Home';
import News from '../../pages/News/News/News';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/category/:id',
        element: <Category />
      },
      {
        path: '/news/:id',
        element: <News />
      }
    ]
  }
])