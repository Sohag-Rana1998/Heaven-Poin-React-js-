import { Avatar, Typography } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const Links = (
    <div className="flex flex-col md:flex-row lg:flex-row gap-3">
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? 'border-2 font-semibold text-[#23BE0A] border-[#23BE0A]'
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
          to="/listed-books"
          className={({ isActive, isPending }) =>
            isActive
              ? 'border-2   font-semibold text-[#23BE0A] border-[#23BE0A]'
              : isPending
              ? 'pending'
              : ''
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pages-to-read"
          className={({ isActive, isPending }) =>
            isActive
              ? 'border-2  font-semibold text-[#23BE0A] border-[#23BE0A]'
              : isPending
              ? 'pending'
              : ''
          }
        >
          Pages to Read
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive, isPending }) =>
            isActive
              ? 'border-2   font-semibold text-[#23BE0A] border-[#23BE0A]'
              : isPending
              ? 'pending'
              : ''
          }
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isActive
              ? 'border-2  font-semibold text-[#23BE0A] border-[#23BE0A]'
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
    <div className="navbar max-w-7xl container  mx-auto  bg-base-100 font-work">
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
              <a className="btn bg-[#23BE0A]  text-white">Log In</a>
              <div className="flex items-center gap-4">
                <Avatar
                  src="https://docs.material-tailwind.com/img/face-2.jpg"
                  alt="avatar"
                />
                <div>
                  <Typography variant="h6">Sohag Islam</Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    Web Developer
                  </Typography>
                </div>
              </div>
            </div>
          </ul>
        </div>
        <a className="btn btn-ghost    text-xl text-[#23BE0A]">
          Heaven&apos;s Hub
        </a>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1"> {Links}</ul>
      </div>

      <div className="navbar-end -top-52 relative md:static lg:static">
        <a className="btn bg-[#23BE0A] mr-3 text-white">Log In</a>
        <div className="flex items-center gap-4">
          <Avatar
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
          />
          <div>
            <Typography variant="h6">Sohag Islam</Typography>
            <Typography variant="small" color="gray" className="font-normal">
              Web Developer
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
