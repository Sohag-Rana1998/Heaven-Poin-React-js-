import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Card } from '@material-tailwind/react';
import { Helmet } from 'react-helmet-async';

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    // <div>
    //   <Helmet>
    //     <title>Residence Hub || User Profile</title>
    //   </Helmet>
    //   <div className="w-full min-h-screen md:w-[50%] mx-auto ">
    //     <div></div>
    //     <Card className="p-5  md:p-14 w-full bg-sky-200 mt-5 border-2 border-gray-900 shadow-xl animate__animated animate__zoomIn">
    //       <div className="">
    //         <h1 className="text-4xl underline mb-5 font-bold text-center">
    //           Your Profile:
    //         </h1>
    //       </div>
    //       <div className="w-32 h-32 rounded-full bg-no-repeat bg-contain bg-[url(https://i.ibb.co/zmbRY07/images.png)] mx-auto my-5">
    //         {user && (
    //           <img
    //             className="w-full h-full rounded-full"
    //             src={user?.photoURL}
    //             alt=""
    //           />
    //         )}
    //       </div>

    //       <div className="space-y-3">
    //         <h2 className="text-2xl">
    //           {' '}
    //           <span className="font-bold">User Name:</span>
    //           {user?.displayName || ''}
    //         </h2>
    //         <h2 className="text-2xl">
    //           {' '}
    //           <span className="font-bold">User Email:</span> {user?.email || ''}
    //         </h2>
    //       </div>
    //     </Card>
    //   </div>
    // </div>

    <div className="max-w-5xl animate__animated animate__zoomIn  mx-auto  mt-16 bg-white shadow-xl rounded-lg text-gray-900">
      <Helmet>
        <title>Residence Hub || User Profile</title>
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

      <div className="p-4 border-t mx-8 mt-2">
        <button className="w-full md:w-1/4 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
          Follow
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
