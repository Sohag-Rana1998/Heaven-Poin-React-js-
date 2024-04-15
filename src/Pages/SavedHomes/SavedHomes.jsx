import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';

import { Helmet } from 'react-helmet-async';
import { FaLocationDot } from 'react-icons/fa6';
import { Link, ScrollRestoration } from 'react-router-dom';

const SavedHomes = () => {
  const Homes = JSON.parse(localStorage.getItem('homes') || '[]');

  return (
    <div className="my-10  min-h-screen h-full">
      <Helmet>
        <title>Residence Hub || Saved Homes</title>
      </Helmet>
      <div>
        {/* animate__animated animate__fadeInLeft */}
        <div className="h-[150px] w-full animate__animated animate__fadeInDown rounded-xl bg-[url(https://i.ibb.co/PtcPs7P/6.jpg)] text-center mb-10  bg-no-repeat bg-center bg-opacity-10">
          <div className="h-[150px] w-full rounded-xl flex items-center justify-center bg-black bg-opacity-30">
            <h1 className="text-4xl font-bold animate__animated animate__zoomIn animate__delay__1s text-white">
              Your Property
            </h1>
          </div>
        </div>
      </div>
      {Homes && Homes.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Homes.map(house => (
              <div key={house.id}>
                <Card className="w-full h-full animate__animated animate__zoomIn  overflow-hidden">
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                  >
                    <div className="relative h-72 ">
                      <img
                        src={house.image_url}
                        className="w-full hover:scale-[110%] duration-500 h-full"
                        alt="ui/ux review check"
                      />
                      <button className="px-8 py-3 rounded-bl-3xl bg-blue-500 absolute z-10 right-0 top-0 text-white font-bold bg-opacity-80">
                        {house.status}
                      </button>

                      <p className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-2 rounded-t-lg ">
                        {' '}
                        <Typography
                          variant="lead"
                          color="white"
                          className=" font-sm text-sm flex items-center gap-2"
                        >
                          <FaLocationDot />
                          {house.location}
                        </Typography>
                      </p>
                    </div>
                  </CardHeader>
                  <CardBody className="flex flex-col h-auto md:h-[250px]  justify-between">
                    <div>
                      <div>
                        <Typography variant="h4" color="blue-gray">
                          {house.estate_title}
                        </Typography>

                        <div className="flex flex-col md:flex-row justify-between items-center ">
                          <Typography
                            variant="lead"
                            color="gray"
                            className=" font-lg text-lg"
                          >
                            {house.segment_name}
                          </Typography>
                          <Typography
                            variant="lead"
                            color="gray"
                            className=" font-lg text-xl"
                          >
                            <span className="font-bold">Area:</span>
                            {house.area}
                          </Typography>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row  justify-between gap-2 mt-2">
                        <div className="w-full">
                          <Typography
                            variant="lead"
                            color="black"
                            className=" font-sm text-sm flex gap-2 "
                          >
                            <span className="font-bold">Facilities: </span>
                            <div className="">
                              {house?.facilities?.map((facility, indx) => (
                                <span key={indx}>{facility}, </span>
                              ))}
                            </div>
                          </Typography>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-3">
                      <h3 className="mb-2 text-xl text-blue-600  font-bold ">
                        {house.price}
                      </h3>
                      <Link to={`/view-property/${house.id}`}>
                        <Button
                          size="md"
                          className="bg-blue-600 hover:scale-[110%] duration-500 mb-2 w-full md:w-auto text-white font-bold"
                        >
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
                <ScrollRestoration></ScrollRestoration>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="w-full flex  flex-col gap-5 mt-10 md:mt-20 justify-center items-center animate__animated animate__zoomIn">
            <h1 className="text-2xl ">
              You do not saved any property. To add property <br /> please click
              on the button below.
            </h1>

            <Link to={'/property-estate'}>
              <button className="btn bg-blue-600">Add Property</button>
            </Link>
          </div>
          <ScrollRestoration></ScrollRestoration>
        </>
      )}
    </div>
  );
};

export default SavedHomes;
