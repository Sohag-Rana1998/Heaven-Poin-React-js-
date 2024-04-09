import { Link } from 'react-router-dom';

import { Button } from '@material-tailwind/react';
import { Helmet } from 'react-helmet-async';

const Register = () => {
  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <Helmet>
        <title>Heavens Hub || Login</title>
      </Helmet>
      <div className="flex flex-col max-w-lg w-full p-16 rounded-md  bg-gray-50 text-gray-800">
        <div className="mb-4 text-center">
          <h1 className="my-3 text-4xl font-bold">Register Now</h1>
          <p className="text-sm text-gray-600">
            Register to access all of our features...
          </p>
        </div>
        <form noValidate="" action="" className="space-y-5">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Your Photo URL
              </label>
              <input
                type="text"
                name="photo"
                id="photo"
                placeholder="Your Photo URL"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline text-gray-600"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="button"
                className="w-full px-8 py-3 font-semibold rounded-md bg-blue-600 text-gray-50"
              >
                Register
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-600">
              Already have an account yet?
              <Link to={'/login'}>
                {' '}
                <button className="hover:underline text-blue-600">
                  Log In
                </button>
              </Link>
            </p>
          </div>
        </form>
        <div className="flex justify-around items-center ">
          <div className="divider divider-primary   w-full"></div>
          <h2>OR</h2>
          <div className="divider divider-primary  w-full"></div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Button
            size="lg"
            variant="outlined"
            color="blue-gray"
            className="flex items-center gap-3 w-full"
          >
            <img
              src="https://docs.material-tailwind.com/icons/google.svg"
              alt="metamask"
              className="h-6 w-6"
            />
            Continue with Google
          </Button>
          <Button
            size="lg"
            variant="gradient"
            color="light-blue"
            className="group relative flex w-full py-4 items-center gap-3 overflow-hidden pr-[72px]"
          >
            Sign Up with Twitter
            <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
              <img
                src="https://docs.material-tailwind.com/icons/twitter.svg"
                alt="metamask"
                className="h-6 w-6"
              />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
