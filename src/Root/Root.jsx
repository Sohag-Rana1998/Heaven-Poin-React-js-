import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/Shared/Navbar/NavBar';

const Root = () => {
  return (
    <div className="max-w-7xl container mx-auto">
      <div className="   z-20">
        <NavBar></NavBar>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default Root;
