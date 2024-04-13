import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import ViewDetails from '../Pages/ViewDetails/ViewDetails';
import UpdateProfile from '../Pages/UpdateProfile/UpdateProfile';
import PrivateRoute from './PrivetRoute/PrivateRoute';
import UserProfile from '../Pages/UserProfile/UserProfile';
import BuyHome from '../Pages/BuyHome/BuyHome';
import RentHome from '../Pages/RentHome/RentHome';
import SavedHomes from '../Pages/SavedHomes/SavedHomes';
import Estates from '../Pages/Home/Estates/Estates';

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
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: () => fetch(`/details.json`),
      },
      {
        path: '/update-profile',
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: '/user-profile',
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
      {
        path: '/buy-house',
        element: <BuyHome></BuyHome>,
        loader: () => fetch(`/estates.json`),
      },
      {
        path: '/rent-house',
        element: <RentHome></RentHome>,
        loader: () => fetch(`/estates.json`),
      },
      {
        path: '/saved-homes',
        element: <SavedHomes></SavedHomes>,
      },
      {
        path: '/property-estate',
        element: (
          <PrivateRoute>
            <Estates></Estates>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
