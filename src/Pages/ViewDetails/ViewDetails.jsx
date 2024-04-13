import {
  Button,
  Card,
  CardBody,
  Carousel,
  IconButton,
  Typography,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaLocationDot } from 'react-icons/fa6';
import { ScrollRestoration, useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ViewDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [estate, setEstate] = useState({});

  useEffect(() => {
    const singleData = data.find(property => property.id == id);

    setEstate(singleData);
  }, [id, data]);

  const savedHomes = JSON.parse(localStorage.getItem('homes') || '[]');

  const [Homes, setHomes] = useState(savedHomes);

  const handleSavedHomes = home => {
    const isExist = Homes.find(house => house.id === home.id);

    if (!isExist) {
      setHomes([...Homes, home]);

      toast.success('Successfully Saved On Your Saved');
    } else {
      toast.warn('ALready Saved On Your Saved List.');
    }
  };
  console.log(Homes);

  useEffect(() => {
    localStorage.setItem('homes', JSON.stringify(Homes));
  }, [Homes]);

  const {
    estate_title,
    segment_name,
    price,
    status,
    area,
    location,
    facilities,
    image_url,
    image_url2,
    image_url3,
    description,
  } = estate;
  return (
    <div className="my-8 md:my-16">
      <Helmet>
        <title>RESIDENCE HUB || Details </title>
      </Helmet>
      <div className="h-[150px] w-full rounded-xl bg-[url(https://i.ibb.co/PtcPs7P/6.jpg)] text-center mb-10  bg-no-repeat bg-center bg-opacity-10">
        <div className="h-[150px] w-full rounded-xl flex items-center justify-center bg-black bg-opacity-30">
          <h1 className="text-4xl font-bold text-white">Property Details</h1>
        </div>
      </div>
      <Card>
        <Typography variant="h2" color="black">
          {estate_title}
        </Typography>
        <Typography
          variant="lead"
          color="black"
          className=" font-lg text-lg flex items-center gap-2 mb-3"
        >
          <FaLocationDot />
          {location}
        </Typography>
        <div className="h-[450px] relative rounded-xl">
          <Carousel
            className="rounded-xl"
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handlePrev}
                className="!absolute bottom-10 md:bottom-4 !left-[25%] md:!left-[45%] bg-black bg-opacity-60 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6 md:h-10 md:w-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handleNext}
                className="!absolute bottom-10 md:bottom-4 !right-[25%] md:!right-[45%] bg-black bg-opacity-60 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className=" h-6 w-6 md:h-10 md:w-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </IconButton>
            )}
          >
            <img
              src={image_url}
              alt="image 1"
              className="h-full w-full object-fit"
            />
            <img
              src={image_url2}
              alt="image 2"
              className="h-full w-full object-fit"
            />
            <img
              src={image_url3}
              alt="image 3"
              className="h-full w-full object-fit"
            />
          </Carousel>
          <button className="px-10 py-4 rounded-br-xl bg-blue-500 absolute z-10 right-0 bottom-0 text-white text-xl font-bold bg-opacity-80">
            {status}
          </button>
        </div>
        <CardBody className="flex flex-col  justify-between h-auto  ">
          <div>
            <div>
              <div className="flex flex-col md:flex-row justify-between ">
                <Typography
                  variant="lead"
                  color="gray"
                  className=" font-bold text-2xl"
                >
                  #{segment_name}
                </Typography>
                <div>
                  <div>
                    <h3 className=" text-2xl text-blue-600  font-bold ">
                      Price: {price}
                    </h3>
                    <div className="text-2xl text-blue-600  font-bold">
                      <span className="font-bold ">Area: </span>
                      {area}
                    </div>
                  </div>
                </div>
              </div>

              <Typography variant="lead" color="gray" className="text-lg mt-2">
                <span className="font-bold">Details About This Property: </span>
                {description}
              </Typography>
            </div>
            <div className="flex flex-col  md:flex-row  justify-between gap-2 mt-2">
              <div className="w-full">
                <Typography
                  variant="lead"
                  color="black"
                  className="font-normal md:font-semibold flex  gap-2 "
                >
                  <span className="font-bold">Facilities: </span>
                  <div className="flex flex-col md:flex-row gap-2">
                    {facilities?.map((facility, indx) => (
                      <div key={indx}>
                        <span>{facility}, </span>
                      </div>
                    ))}
                    <span> etc....</span>
                  </div>
                </Typography>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-end  r mt-3">
            <Button
              onClick={() => handleSavedHomes(estate)}
              size="lg"
              className="bg-blue-600 w-full md:w-40 hover:bg-blue-gray-900"
            >
              Add To Cart
            </Button>
          </div>
        </CardBody>
      </Card>
      <ScrollRestoration />
    </div>
  );
};

export default ViewDetails;
