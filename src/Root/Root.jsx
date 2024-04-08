import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/Shared/Navbar/NavBar';
import Footer from '../Pages/Shared/Footer/Footer';

const Root = () => {
  return (
    <div className="max-w-8xl container mx-auto flex flex-col justify-between min-h-screen">
      <div className="max-w-7xl container mx-auto">
        <div className="">
          <NavBar></NavBar>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>

      <div className="w-full mx-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
