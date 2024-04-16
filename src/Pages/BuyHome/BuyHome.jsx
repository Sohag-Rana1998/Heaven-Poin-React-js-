import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaLocationDot } from 'react-icons/fa6';
import { Link, ScrollRestoration, useLoaderData } from 'react-router-dom';

const BuyHome = () => {
  const data = useLoaderData();

  const [sales, setSales] = useState([]);
  useEffect(() => {
    const salesHouse = data.filter(house => house.status == 'Sale');
    setSales(salesHouse);
  }, [data]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(setLoading, 500, false);
  }, []);
  return loading ? (
    <div className="w-full min-h-screen flex justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  ) : (
    <div className="my-5">
      <Helmet>
        <title>RESIDENCE HUB || Buy House</title>
      </Helmet>
      <div>
        <div className="h-[150px] w-full rounded-xl bg-[url(https://i.ibb.co/PtcPs7P/6.jpg)] text-center mb-10  bg-no-repeat bg-center bg-opacity-10">
          <div className="h-[150px] w-full rounded-xl flex items-center justify-center bg-black bg-opacity-30">
            <h1 className="text-4xl font-bold text-white">Property For Sale</h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {sales.map(house => (
          <div key={house.id}>
            <Card className="w-full  h-full overflow-hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <div className="relative">
                  <img
                    src={house?.image_url}
                    className="w-full h-72"
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
              <CardBody className="flex flex-col  justify-between  ">
                <div>
                  <div>
                    <Typography variant="h4" color="blue-gray">
                      {house.estate_title}
                    </Typography>

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
                      className="text-lg mt-2"
                    >
                      {house.description?.slice(0, 180)}......
                    </Typography>
                  </div>
                  <div className="flex flex-col md:flex-row  justify-between gap-2 mt-2">
                    <div className="w-full md:w-[60%]">
                      <Typography
                        variant="lead"
                        color="black"
                        className=" font-sm text-sm flex gap-2 "
                      >
                        <span className="font-bold">Facilities: </span>
                        <div className="">
                          {house.facilities?.map((facility, indx) => (
                            <span key={indx}>{facility}, </span>
                          ))}
                        </div>
                      </Typography>
                    </div>
                    <div className="w-full md:w-[35%]">
                      <div>
                        <span className="font-bold">Area: </span>
                        {house.area}
                      </div>
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
                      className="bg-blue-600 mb-2 w-full md:w-auto text-white font-bold"
                    >
                      View Property
                    </Button>
                  </Link>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default BuyHome;
