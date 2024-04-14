import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

import { Helmet } from 'react-helmet-async';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../FireBase/firebase.config';

import { ScrollRestoration } from 'react-router-dom';

import { toast } from 'react-toastify';

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const auth = getAuth(app);
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setName(user?.displayName);
    setPhoto(user?.photoURL);
  }, [user?.displayName, user?.photoURL]);

  const onChangeName = e => {
    e.preventDefault();
    const newName = e.target.value;
    console.log(newName);
    setName(newName);
  };
  const onChangePhoto = e => {
    e.preventDefault();
    const newPhoto = e.target.value;
    console.log(newPhoto);
    setPhoto(newPhoto);
  };

  const handleUpdate = () => {
    setLoading(true);
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
    setTimeout(setLoading, 1500, false);

    setTimeout(toast.success('Profile updated successfully'), 1500);
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  } else {
    return (
      <div className="container mx-auto my-10 flex justify-between p-5 bg-slate-200 border-2 border-gray-400 rounded-3xl h-auto">
        <Helmet>
          <title>Residence Hub || Update Your Profile</title>
        </Helmet>
        <div className="w-full md:w-[50%]">
          <div className="animate__animated animate__fadeInLeft">
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
        <div className="w-full md:w-[50%]   ">
          <div>
            <h1 className="text-4xl font-bold text-center animate__animated animate__fadeInRight">
              Update Your Profile
            </h1>

            <div className="w-3/4 mx-auto">
              <div>
                <h2> Your Name:</h2>
                <input
                  type="text"
                  className="input w-full mb-3"
                  value={name}
                  onChange={e => onChangeName(e)}
                />
              </div>
              <div>
                <h2> Your Photo URL:</h2>
                <input
                  type="text"
                  className="input  w-full mb-3"
                  value={photo}
                  onChange={e => onChangePhoto(e)}
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
                  className="btn bg-blue-700 hover:bg-blue-gray-900 text-white "
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <ScrollRestoration />
      </div>
    );
  }
};

export default UpdateProfile;
