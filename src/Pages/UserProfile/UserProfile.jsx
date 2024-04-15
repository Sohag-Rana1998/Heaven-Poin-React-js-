import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

import { Helmet } from 'react-helmet-async';

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(setLoading, 500, false);
  }, []);
  return loading ? (
    <div className="w-full min-h-screen flex justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  ) : (
    <div className="max-w-5xl animate__animated animate__zoomIn   mx-auto  my-16 bg-white shadow-xl rounded-lg text-gray-900">
      <Helmet>
        <title>Residence Hub | User Profile</title>
      </Helmet>
      <div className="rounded-t-lg h-32 overflow-hidden">
        <img
          className="object-cover object-top w-full"
          src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="Mountain"
        />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img className="object-cover object-center h-32" src={user?.photoURL} />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">{user?.displayName}</h2>
        <p className="text-gray-500">{user?.email}</p>
      </div>

      <div className="p-4 border-t  mt-2">
        <button className="w-full md:w-72 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
          Add More About You
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
