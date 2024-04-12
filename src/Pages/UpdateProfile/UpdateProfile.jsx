import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

import { Helmet } from 'react-helmet-async';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../FireBase/firebase.config';
import Swal from 'sweetalert2';
import { ScrollRestoration } from 'react-router-dom';

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const auth = getAuth(app);
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    setName(user?.displayName);
    setPhoto(user?.photoURL);
  }, []);

  const onChangeName = newName => {
    console.log(newName);
    setName(newName);
  };
  const onChangePhoto = newPhoto => {
    console.log(newPhoto);
    setPhoto(newPhoto);
  };

  const handleUpdate = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    }).then(result => {
      console.log(result.user);

      Swal.fire({
        icon: 'success',
        title: 'successful',
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  return (
    <div className="container mx-auto my-10 flex justify-between p-5 bg-slate-200 border-2 border-gray-400 rounded-3xl h-auto">
      <Helmet>
        <title>Residence Hub || Update Your Profile</title>
      </Helmet>
      <div className="w-full md:w-[50%]">
        <div>
          <h1 className="text-4xl font-bold text-center">
            Your Current Profile:
          </h1>
        </div>
        <div className="w-32 h-32 rounded-full bg-no-repeat bg-contain bg-[url(https://i.ibb.co/zmbRY07/images.png)] mx-auto my-5">
          {user && (
            <img
              className="w-full h-full rounded-full"
              src={user?.photoURL}
              alt=""
            />
          )}
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl">
            {' '}
            <span className="font-bold">User Name:</span>
            {user?.displayName || ''}
          </h2>
          <h2 className="text-2xl">
            {' '}
            <span className="font-bold">User Email:</span> {user?.email || ''}
          </h2>
        </div>
      </div>
      <form className="w-full md:w-[50%]   ">
        <div>
          <h1 className="text-4xl font-bold text-center">
            Update Your Profile
          </h1>

          <div className="w-3/4 mx-auto">
            <div>
              <h2> Your Name:</h2>
              <input
                type="text"
                className="input w-full mb-3"
                value={name}
                onChange={e => onChangeName(e.target.value)}
              />
            </div>
            <div>
              <h2> Your Photo URL:</h2>
              <input
                type="text"
                className="input  w-full mb-3"
                value={photo}
                onChange={e => onChangePhoto(e.target.value)}
              />
            </div>
            <div>
              <h2> Your Email:</h2>
              <input
                type="text"
                className="input  w-full mb-3"
                value={user?.email || 'Not Found'}
                onChange={e => onChangePhoto(e.target.value)}
              />
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleUpdate}
                className="btn bg-blue-700 text-white "
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </form>
      <ScrollRestoration />
    </div>
  );
};

export default UpdateProfile;
