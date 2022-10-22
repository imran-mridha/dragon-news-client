import './App.css';
import { routes } from './routes/Routes/Routes';
import {RouterProvider} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="">
      <RouterProvider router = {routes}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
