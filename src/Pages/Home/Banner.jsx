import { Button, Carousel } from '@material-tailwind/react';

const Banner = () => {
  return (
    <div className="relative mx-auto">
      <Carousel transition={{ duration: 1 }} className="rounded-xl h-[550px] ">
        <img
          src="https://i.ibb.co/tHLXr9K/image-2.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="https://i.ibb.co/0Ycz8vn/image-1.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://i.ibb.co/0yV33WH/image-3.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <img
          src="https://i.ibb.co/ng0pBKZ/Golf-Oasis-Pool.jpg"
          alt="image 4"
          className="h-full w-full object-cover"
        />
        <img
          src="https://i.ibb.co/yFgKDNH/villa-1900-1900x790.webp"
          alt="image 5"
          className="h-full w-full object-cover"
        />
      </Carousel>
      <div>
        <div className=" absolute  left-0 top-10 mx-16  lg:left-24 md:top-28 text-white">
          <p className="font-bold mb-5 ">Luxury Houses</p>
          <h1 className=" text-3xl md:text-5xl font-bold  border-l-2 border-white pl-5 ">
            Luxury <br /> Residence Here
          </h1>
          <p className="mt-5">
            Whether you&apos;re looking to sell or let your home or want to buy
            or rent a <br /> home, we really are the people for you to come to.
          </p>
          <div className="mt-5 flex flex-col  md:flex-row w-1/2 md:w-full mx-auto md:mr-auto gap-5">
            <Button size="lg" className="px-0 md:px-10 bg-teal-500 ">
              Buy
            </Button>
            <Button size="lg" className="px-0 md:px-10 bg-teal-500">
              Rent
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
