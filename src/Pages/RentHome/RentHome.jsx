import { CardBody, CardHeader, Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaLocationDot } from 'react-icons/fa6';
import { Link, ScrollRestoration, useLoaderData } from 'react-router-dom';

const RentHome = () => {
  const data = useLoaderData();
  console.log(data);
  const [Rent, setRent] = useState([]);
  useEffect(() => {
    const RentHouse = data.filter(house => house.status == 'Rent');
    setRent(RentHouse);
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
            <h1 className="text-4xl font-bold text-white">Property For Rent</h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {Rent.map(house => (
          <div key={house.id}>
            <div className="w-full  h-full  rounded-2xl shadow-2xl  overflow-hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 p-0 rounded-none"
              >
                <div className="relative">
                  <img
                    src={house.image_url}
                    className="w-full rounded-2xl  h-80 hover:scale-[110%] duration-700"
                    alt="ui/ux review check"
                  />
                  <button className="px-8 py-3 rounded-bl-3xl bg-blue-500 absolute z-10 right-0 top-0 text-white font-bold bg-opacity-80">
                    {house.status}
                  </button>

                  <p className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-2 rounded-t-lg ">
                    <Typography className="text-white font-sm text-sm flex items-center gap-2">
                      <FaLocationDot />
                      {house.location}
                    </Typography>
                  </p>
                </div>
              </CardHeader>
              <CardBody className="px-3 h-auto md:h-[380px] m-0 ">
                <div className="flex h-full flex-col justify-between">
                  <Typography variant="h4">
                    {house.estate_title?.slice(0, 28)}
                  </Typography>
                  <div>
                    <Typography className="font-semibold">
                      {house.segment_name}
                    </Typography>
                    <Typography className="font-semibold text-lg">
                      <span className="font-bold">Area:</span>
                      {house.area}
                    </Typography>
                  </div>

                  <Typography className="mt-1">
                    {house.description?.slice(0, 100)}......
                  </Typography>

                  <div className="flex flex-col md:flex-row  justify-between gap-2 mt-1">
                    <div className="w-full ">
                      <Typography className=" font-sm text-sm flex gap-2 ">
                        <span className="font-bold">Facilities: </span>
                        <div className="">
                          {house.facilities?.map((facility, indx) => (
                            <span key={indx}>{facility}, </span>
                          ))}
                        </div>
                      </Typography>
                    </div>
                  </div>
                  <div className="flex justify-between items-start md:items-center mt-3">
                    <h3 className="mb-2 text-lg p-2 text-white rounded-md bg-teal-900 font-bold ">
                      {house.price}
                    </h3>
                    <Link to={`/view-property/${house.id}`}>
                      <button className="bg-blue-600 btn mb-2  hover:scale-[110%] duration-500  md:w-auto text-white font-bold hover:bg-blue-gray-900">
                        View Property
                      </button>
                    </Link>
                  </div>
                </div>
              </CardBody>
            </div>
          </div>
        ))}
      </div>
      <ScrollRestoration />
    </div>
  );
};
export default RentHome;
