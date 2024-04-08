// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './../../styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Button } from '@material-tailwind/react';

const Banner = () => {
  return (
    <div className="w-full h-[500px] relative">
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/tHLXr9K/image-2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/0Ycz8vn/image-1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/0yV33WH/image-3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/ng0pBKZ/Golf-Oasis-Pool.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/yFgKDNH/villa-1900-1900x790.webp" alt="" />
        </SwiperSlide>
      </Swiper>
      <div className=" absolute z-10 left-0 top-0 m-10 lg:left-24 md:top-28 text-white">
        <p className="font-bold mb-5 ">Luxury Houses</p>
        <h1 className=" text-5xl font-bold  border-l-2 border-white pl-5 ">
          Luxury <br /> Residence Here
        </h1>
        <p className="mt-5">
          Whether you&apos;re looking to sell or let your home or want to buy or
          rent a <br /> home, we really are the people for you to come to.
        </p>
        <div className="mt-5 flex flex-col md:flex-row w-1/2 md:w-full mx-auto md:mr-auto gap-5">
          <Button size="lg" className="px-0 md:px-10 bg-teal-500 ">
            Buy
          </Button>
          <Button size="lg" className="px-0 md:px-10 bg-teal-500">
            Rent
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
