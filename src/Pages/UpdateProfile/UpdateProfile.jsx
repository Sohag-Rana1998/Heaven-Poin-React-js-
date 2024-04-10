import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
const UpdateProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="container mx-auto my-10 flex justify-between p-5 bg-slate-200 border-2 border-gray-400 rounded-3xl h-auto">
      <div className="w-full md:w-[50%]">
        <div>
          <h1 className="text-4xl font-bold text-center">
            Your Current Profile:
          </h1>
        </div>
        <div className="w-32 mx-auto my-5">
          <img
            className="w-full h-full rounded-full"
            src={user?.photoURL || 'https://i.ibb.co/zmbRY07/images.png'}
            alt=""
          />
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
          <h1 className="text-4xl font-bold text-center">
            Update Your Profile
          </h1>

          <div className="w-3/4 mx-auto">
            <div>
              <h2> Your Name:</h2>
              <input
                type="text"
                className="input w-full mb-3"
                value={user?.displayName || ''}
              />
            </div>
            <div>
              <h2> Your Photo URL:</h2>
              <input
                type="text"
                className="input  w-full mb-3"
                value={user?.photoURL || ''}
              />
            </div>
            <div>
              <h2> Your Email:</h2>
              <input
                type="text"
                className="input  w-full mb-3"
                value={user?.email || ''}
              />
            </div>
            <div className="flex justify-end">
              <button className="btn bg-blue-700 text-white ">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
