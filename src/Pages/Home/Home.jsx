import { Helmet } from 'react-helmet-async';
import Agents from './Agents';

import Estates from './Estates/Estates';
import Testimonial from './Testimonial';
import { ScrollRestoration } from 'react-router-dom';
import Banner from './Banner/Banner';
import { useEffect, useState } from 'react';

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(setLoading, 500, false);
  }, []);
  return loading ? (
    <div className="w-full min-h-screen flex justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  ) : (
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
