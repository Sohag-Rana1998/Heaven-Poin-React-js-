import { Helmet } from 'react-helmet-async';
import Agents from './Agents';

import Estates from './Estates/Estates';
import Testimonial from './Testimonial';
import { ScrollRestoration } from 'react-router-dom';
import Banner from './Banner/Banner';

const Home = () => {
  return (
    <div className="my-10">
      <Helmet>
        <title>Residence Hub || Home</title>
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
