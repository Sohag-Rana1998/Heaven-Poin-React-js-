import { useEffect, useState } from 'react';
import SingleProperty from './SingleProperty';
import { ScrollRestoration } from 'react-router-dom';

const Estates = () => {
  const [estates, setEstates] = useState([]);
  useEffect(() => {
    fetch('./estates.json')
      .then(res => res.json())
      .then(data => setEstates(data));
  }, []);

  return (
    <div className="my-20 container mx-auto">
      <div className="text-center mb-10">
        <p>Our Featured Properties For Sale and Rent</p>
        <h1 className="text-4xl font-bold">Properties For Sale & Rent</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {estates?.map(estate => (
          <SingleProperty key={estate.id} estate={estate}></SingleProperty>
        ))}
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default Estates;
