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
    <div className="">
      <Card className="w-full  overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <div className="relative">
            <img
              src={image_url}
              className="w-full  h-72 hover:scale-[110%] duration-700"
              alt="ui/ux review check"
            />
            <button className="px-8 py-3 rounded-bl-3xl bg-blue-500 absolute z-10 right-0 top-0 text-white font-bold bg-opacity-80">
              {status}
            </button>

            <p className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-2 rounded-t-lg ">
              {' '}
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
        <CardBody className="flex flex-col  justify-between h-auto md:h-[340px] ">
          <div>
            <div>
              <Typography variant="h4" color="blue-gray">
                {estate_title}
              </Typography>
              <div className="flex flex-col md:flex-row justify-between items-center ">
                <Typography
                  variant="lead"
                  color="gray"
                  className=" font-lg text-lg"
                >
                  {segment_name}
                </Typography>
                <Typography
                  variant="lead"
                  color="gray"
                  className=" font-lg text-xl"
                >
                  <span className="font-bold">Area:</span>
                  {area}
                </Typography>
              </div>

              <Typography variant="lead" color="gray" className="text-lg mt-2">
                {description?.slice(0, 100)}......
              </Typography>
            </div>
            <div className="flex flex-col md:flex-row  justify-between gap-2 mt-2">
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
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-3">
            <h3 className="mb-2 text-xl text-blue-600  font-bold ">{price}</h3>
            <Link to={`/view-property/${id}`}>
              <Button
                size="md"
                className="bg-blue-600 mb-2 hover:scale-[110%] duration-500 w-full md:w-auto text-white font-bold hover:bg-blue-gray-900"
              >
                View Property
              </Button>
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

SingleProperty.propTypes = {
  estate: PropTypes.object,
};

export default SingleProperty;
