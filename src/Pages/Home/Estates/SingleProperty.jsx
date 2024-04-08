import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';
import { FaLocationDot } from 'react-icons/fa6';
const SingleProperty = ({ estate }) => {
  const {
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
    <div>
      <Card className="w-full overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <div className="relative">
            <img
              src={image_url}
              className="w-full h-64"
              alt="ui/ux review check"
            />
            <button className="px-8 py-3 rounded-br-3xl bg-blue-500 absolute z-10 top-0 text-white font-bold bg-opacity-80">
              {status}
            </button>
            <button className="px-3 bottom-0 right-0  py-3 rounded-tl-3xl bg-black absolute text-white font-bold bg-opacity-80">
              {price}
            </button>
          </div>
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray">
            {estate_title}
          </Typography>
          <Typography
            variant="lead"
            color="gray"
            className=" font-sm text-sm flex items-center gap-2"
          >
            <FaLocationDot />
            {location}
          </Typography>
          <Typography variant="lead" color="gray" className=" font-lg text-lg">
            {segment_name}
          </Typography>

          <Typography variant="lead" color="gray" className="text-lg mt-3">
            {description?.slice(0, 80)}......
          </Typography>

          <Typography
            variant="lead"
            color="gray"
            className=" font-sm text-sm flex mt-2"
          >
            <span>Facilities:</span>
            <div className="grid grid-cols-2">
              {facilities?.map((facility, indx) => (
                <p key={indx}>
                  {indx + 1}.{facility}
                </p>
              ))}
            </div>
          </Typography>
          <div className="flex justify-between items-center mt-3">
            <div>
              <span className="font-bold">Area: </span>
              {area}
            </div>
            <Button size="md" className="bg-blue-600 text-white font-bold">
              View Property
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default SingleProperty;
