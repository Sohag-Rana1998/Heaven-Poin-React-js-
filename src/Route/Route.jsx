import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import ViewDetails from '../Pages/ViewDetails/ViewDetails';
import UpdateProfile from '../Pages/UpdateProfile/UpdateProfile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/view-property/:id',
        element: <ViewDetails></ViewDetails>,
        loader: () => fetch(`/details.json`),
      },
      {
        path: '/update-profile',
        element: <UpdateProfile></UpdateProfile>,
      },
    ],
  },
]);

export default router;
