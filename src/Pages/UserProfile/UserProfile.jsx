import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Card } from '@material-tailwind/react';
import { Helmet } from 'react-helmet-async';

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Helmet>
        <title>Residence Hub || User Profile</title>
      </Helmet>
      <div className="w-full min-h-screen md:w-[50%] mx-auto">
        <div></div>
        <Card className="p-5  md:p-14 w-full bg-sky-200 mt-5">
          <div>
            <h1 className="text-4xl underline mb-5 font-bold text-center">
              Your Profile:
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
        </Card>
      </div>
    </div>
  );
};

export default UserProfile;
