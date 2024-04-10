import { Avatar, Typography } from '@material-tailwind/react';
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
    <div className="flex flex-col md:flex-row lg:flex-row gap-3">
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
      <li>
        <NavLink
          to="/blogs"
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
    <div className="navbar max-w-7xl container  mx-auto z-20">
      <div className="navbar-start">
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
              {' '}
              {user ? (
                <button onClick={handleLogout} className="btn">
                  Log Out
                </button>
              ) : (
                <Link to="/login">
                  <button className="btn">Log In</button>
                </Link>
              )}
              <div className="flex items-center gap-4">
                <Avatar
                  src="https://docs.material-tailwind.com/img/face-2.jpg"
                  alt="avatar"
                />
              </div>
            </div>
          </ul>
        </div>
        <a className="btn btn-ghost    text-xl text-[#23BE0A]">RESIDENCE HUB</a>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1"> {Links}</ul>
      </div>

      <div className="navbar-end ">
        {' '}
        {user ? (
          <div className="">
            <Avatar
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              src={user.photoURL && user.photoURL}
              alt="avatar"
              className="mr-4 cursor-pointer"
            />
            <button
              onClick={handleLogout}
              className="btn bg-[#23BE0A]   mr-3 text-white"
            >
              Log Out
            </button>
            {type ? (
              <div className="w-auto bg-black bg-opacity-40 z-10 absolute py-4 px-5 rounded-2xl top-16 right-40 ">
                <div>
                  <h2 className="w-full text-white font-bold text-xl">
                    {user.displayName && user.displayName}
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
            </button>{' '}
          </Link>
        )}
        <div className="flex items-center gap-4"></div>
      </div>
    </div>
  );
};

export default NavBar;
