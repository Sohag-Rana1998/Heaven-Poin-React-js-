import { Avatar } from '@material-tailwind/react';
import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [type, setType] = useState(false);
  const handleHover = () => {
    setType(true);
  };
  const handleLeave = () => {
    setType(false);
  };
  const handleLogout = () => {
    logOut();
    console.log(user);
  };

  const Links = (
    <div className="flex flex-col   lg:flex-row gap-3">
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? 'border-2 font-bold text-blue-600 border-blue-600'
              : isPending
              ? 'pending'
              : ''
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/saved-homes"
          className={({ isActive, isPending }) =>
            isActive
              ? 'border-2 font-bold text-blue-600 border-blue-600'
              : isPending
              ? 'pending'
              : ''
          }
        >
          Saved Homes
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/update-profile"
          className={({ isActive, isPending }) =>
            isActive
              ? 'border-2  font-bold text-blue-600 border-blue-600'
              : isPending
              ? 'pending'
              : ''
          }
        >
          Update Your Profile
        </NavLink>
      </li>
      {user ? (
        <li>
          <NavLink
            to="/user-profile"
            className={({ isActive, isPending }) =>
              isActive
                ? 'border-2 font-bold text-blue-600 border-blue-600'
                : isPending
                ? 'pending'
                : ''
            }
          >
            User Profile
          </NavLink>
        </li>
      ) : (
        ''
      )}
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isActive
              ? 'border-2  font-bold text-blue-600 border-blue-600'
              : isPending
              ? 'pending'
              : ''
          }
        >
          Contact Us
        </NavLink>
      </li>
    </div>
  );

  return (
    <div className=" flex justify-between fixed z-30 bg-white py-3 max-w-7xl container  mx-auto">
      <div className="flex justify-between w-full">
        <div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Links}
              <div className="navbar-end">
                {user ? (
                  <div className="">
                    <Avatar
                      onMouseEnter={handleHover}
                      onMouseLeave={handleLeave}
                      src={user && user?.photoURL}
                      className="mr-4 cursor-pointer bg-no-repeat bg-contain bg-[url(https://i.ibb.co/zmbRY07/images.png)]"
                    />
                    <button
                      onClick={handleLogout}
                      className="btn bg-[#23BE0A]   mr-3 text-white"
                    >
                      Log Out
                    </button>
                    {type ? (
                      <div className="w-auto bg-black bg-opacity-40 z-10 absolute py-4 px-5 rounded-2xl top-16 right-20 ">
                        <div>
                          <h2 className="w-full text-white font-bold text-xl">
                            {user?.displayName || ''}
                          </h2>
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                ) : (
                  <Link to={'/login'}>
                    {' '}
                    <button className="btn bg-[#23BE0A] mr-3 text-white">
                      Log In
                    </button>
                  </Link>
                )}
              </div>
            </ul>
          </div>
          <Link to={'/'}>
            {' '}
            <button className="btn btn-ghost    text-xl text-[#23BE0A]">
              RESIDENCE HUB
            </button>
          </Link>
        </div>
        <div className=" hidden  lg:flex">
          <ul className="menu menu-horizontal px-1 mr-3"> {Links}</ul>
          <div className="hidden md:flex">
            {user ? (
              <div className="">
                <Avatar
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                  src={user && user?.photoURL}
                  className="mr-4 cursor-pointer bg-no-repeat bg-contain bg-[url(https://i.ibb.co/zmbRY07/images.png)]"
                />
                <button
                  onClick={handleLogout}
                  className="btn bg-[#23BE0A] hover:bg-blue-gray-900   mr-3 text-white"
                >
                  Log Out
                </button>
                {type ? (
                  <div className="w-auto bg-black bg-opacity-40 z-10 absolute py-4 px-5 rounded-2xl top-16 right-20 ">
                    <div>
                      <h2 className="w-full text-white font-bold text-xl">
                        {user?.displayName || ''}
                      </h2>
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>
            ) : (
              <Link to={'/login'}>
                {' '}
                <button className="btn bg-[#23BE0A] mr-3 text-white">
                  Log In
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
