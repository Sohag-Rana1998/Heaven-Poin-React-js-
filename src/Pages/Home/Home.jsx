import { Helmet } from 'react-helmet-async';
import Agents from './Agents';
import Banner from './Banner';
import Estates from './Estates/Estates';
import Testimonial from './Testimonial';
import { ScrollRestoration } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>RESIDENCE HUB || Home</title>
      </Helmet>
      <Banner></Banner>
      <Estates></Estates>
      <Agents></Agents>
      <Testimonial></Testimonial>
      <ScrollRestoration />
    </div>
  );
};

export default Home;
