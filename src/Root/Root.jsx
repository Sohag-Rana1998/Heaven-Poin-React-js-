import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/Shared/Navbar/NavBar';
import Footer from '../Pages/Shared/Footer/Footer';
import { Helmet } from 'react-helmet-async';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Root = () => {
  return (
    <div className="max-w-[1500px]  container mx-auto flex flex-col justify-between min-h-screen">
      <Helmet>
        <title>RESIDENCE HUB</title>
      </Helmet>
      <div className="max-w-7xl px-4  container mx-auto">
        <div className="">
          <NavBar></NavBar>
        </div>
        <div className="mt-24">
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
