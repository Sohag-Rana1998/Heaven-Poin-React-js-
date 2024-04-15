import PropTypes from 'prop-types';

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import 'animate.css';

const SingleProperty = ({ estate }) => {
  const {
    id,
    estate_title,
    segment_name,
    price,
    status,
    area,
    location,
    facilities,
    image_url,
    description,
  } = estate;
  return (
    <div className="w-full">
      <div className="w-full  h-full  rounded-2xl shadow-2xl  overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 p-0 rounded-none"
        >
          <div className="relative">
            <img
              src={image_url}
              className="w-full rounded-2xl  h-80 hover:scale-[110%] duration-700"
              alt="ui/ux review check"
            />
            <button className="px-8 py-3 rounded-bl-3xl bg-blue-500 absolute z-10 right-0 top-0 text-white font-bold bg-opacity-80">
              {status}
            </button>

            <p className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-2 rounded-t-lg ">
              <Typography
                variant="lead"
                color="white"
                className=" font-sm text-sm flex items-center gap-2"
              >
                <FaLocationDot />
                {location}
              </Typography>
            </p>
          </div>
        </CardHeader>
        <CardBody className="px-3 h-auto md:h-[380px] m-0 ">
          <div className="flex h-full flex-col justify-between">
            <Typography variant="h4" color="blue-gray">
              {estate_title?.slice(0, 28)}
            </Typography>
            <div>
              <Typography className=" font-semibold">{segment_name}</Typography>
              <Typography className=" font-semibold text-lg">
                <span className="font-bold">Area:</span>
                {area}
              </Typography>
            </div>

            <Typography color="gray" className="mt-1">
              {description?.slice(0, 100)}......
            </Typography>

            <div className="flex flex-col md:flex-row  justify-between gap-2 mt-1">
              <div className="w-full ">
                <Typography
                  variant="lead"
                  color="black"
                  className=" font-sm text-sm flex gap-2 "
                >
                  <span className="font-bold">Facilities: </span>
                  <div className="">
                    {facilities?.map((facility, indx) => (
                      <span key={indx}>{facility}, </span>
                    ))}
                  </div>
                </Typography>
              </div>
            </div>
            <div className="flex justify-between items-start md:items-center mt-3">
              <h3 className="mb-2 text-lg p-2 text-white rounded-md bg-teal-900 font-bold ">
                {price}
              </h3>
              <Link to={`/view-property/${id}`}>
                <button className="bg-blue-600 btn mb-2  hover:scale-[110%] duration-500  md:w-auto text-white font-bold hover:bg-blue-gray-900">
                  View Property
                </button>
              </Link>
            </div>
          </div>
        </CardBody>
      </div>
    </div>
  );
};

SingleProperty.propTypes = {
  estate: PropTypes.object,
};

export default SingleProperty;
