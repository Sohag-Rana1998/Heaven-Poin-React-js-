import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMessage,
  FaPhone,
  FaPinterest,
  FaTwitter,
  FaVimeo,
} from 'react-icons/fa6';

const Agents = () => {
  return (
    <div className="mt-20 container mx-auto">
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="text-center  mb-10"
      >
        <p className="font-bold">Meet our </p>
        <h1 className="text-4xl font-bold">Best Agents</h1>
        <p>
          With the “list agents short code” you can show your agents in any
          page, along side with their <br /> contact details and link to their
          agent profile.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
        <Card
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="mt-6  w-full rounded-2xl  "
        >
          <div className="w-full rounded-2xl h-56 ">
            <img
              src="https://i.ibb.co/JjJXCY3/person3-500x328.webp"
              alt="card-image"
              className="w-full h-full rounded-t-2xl"
            />
          </div>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Lily Bicharm
              <p className="text-sm">Realtor</p>
            </Typography>
            <Typography>
              Janets knowledge, honesty, integrity, and fairness have been
              evident throughout her career. In addition, she possesses a keen
              sense of the local luxury real estate climate, allowing her to
              guide her clients in acquisitions of primary residences, second
              homes, and investment properties. She understands the importance
              of providing a truly personalized service to her clients, always
              putting their needs ahead of her own and paying close attention to
              every aspect of the transaction.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 flex justify-between">
            <div className="text-lg flex gap-3">
              <FaFacebook className="cursor-pointer hover:scale-[120%] duration-500"></FaFacebook>
              <FaInstagram className="cursor-pointer hover:scale-[120%] duration-500"></FaInstagram>
              <FaTwitter className="cursor-pointer hover:scale-[120%] duration-500"></FaTwitter>
              <FaLinkedin className="cursor-pointer hover:scale-[120%] duration-500"></FaLinkedin>
              <FaPinterest className="cursor-pointer hover:scale-[120%] duration-500"></FaPinterest>
              <FaVimeo className="cursor-pointer hover:scale-[120%] duration-500"></FaVimeo>
            </div>
            <div className="flex text-lg gap-3">
              <FaMessage className="cursor-pointer hover:scale-[120%] duration-500"></FaMessage>
              <FaPhone className="cursor-pointer hover:scale-[120%] duration-500"></FaPhone>
            </div>
          </CardFooter>
        </Card>
        <Card
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="mt-6 w-full"
        >
          <div className=" w-full rounded-2xl h-56">
            <img
              src="https://i.ibb.co/DVwfwkR/person2-500x328.jpg"
              alt="card-image"
              className="w-full h-full rounded-t-2xl"
            />
          </div>

          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Jack London
              <p className="text-sm">Commercial Broker </p>
            </Typography>
            <Typography>
              As a fourth generation realtor, I was raised in a family where
              real estate was the primary occupation. She has a passion for the
              business and a steadfast dedication to her clients. As a licensed
              agent in both California and Arizona, I bring over five years of
              experience to the table and is adept at handling any transaction,
              regardless of property type or price point. I am highly motivated,
              determined and hands on with each sale from start to finish.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 flex justify-between">
            <div className="text-lg flex gap-3">
              <FaFacebook className="cursor-pointer hover:scale-[120%] duration-500"></FaFacebook>
              <FaInstagram className="cursor-pointer hover:scale-[120%] duration-500"></FaInstagram>
              <FaTwitter className="cursor-pointer hover:scale-[120%] duration-500"></FaTwitter>
              <FaLinkedin className="cursor-pointer hover:scale-[120%] duration-500"></FaLinkedin>
              <FaPinterest className="cursor-pointer hover:scale-[120%] duration-500"></FaPinterest>
              <FaVimeo className="cursor-pointer hover:scale-[120%] duration-500"></FaVimeo>
            </div>
            <div className="flex text-lg gap-3">
              <FaMessage className="cursor-pointer hover:scale-[120%] duration-500"></FaMessage>
              <FaPhone className="cursor-pointer hover:scale-[120%] duration-500"></FaPhone>
            </div>
          </CardFooter>
        </Card>
        <Card
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="mt-6 w-full px-3"
        >
          <div className=" w-full rounded-2xl h-56">
            <img
              src="https://i.ibb.co/L8VGtmW/person-sam-davies-500x328.webp"
              alt="card-image"
              className="w-full h-full rounded-t-2xl"
            />
          </div>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Dennis Albo
              <p className="text-sm">Sales person</p>
            </Typography>
            <Typography>
              Whether it is working with a first time home buyer, a luxury home
              listing or a seasoned investor, Michael prides himself on his
              unparalleled service with an aptitude for problem solving
              something essential for navigating clients through the challenges
              of todays real estate market. My focus is always on serving my
              clients with honesty, integrity and discretion as a dependable and
              knowledgeable broker committed to exceptional results.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 flex justify-between">
            <div className="text-lg flex gap-3">
              <FaFacebook className="cursor-pointer hover:scale-[120%] duration-500"></FaFacebook>
              <FaInstagram className="cursor-pointer  hover:scale-[120%] duration-500"></FaInstagram>
              <FaTwitter className="cursor-pointer hover:scale-[120%] duration-500"></FaTwitter>
              <FaLinkedin className="cursor-pointer hover:scale-[120%] duration-500"></FaLinkedin>
              <FaPinterest className="cursor-pointer hover:scale-[120%] duration-500"></FaPinterest>
              <FaVimeo className="cursor-pointer hover:scale-[120%] duration-500"></FaVimeo>
            </div>
            <div className="flex text-lg gap-3">
              <FaMessage className="cursor-pointer hover:scale-[120%] duration-500"></FaMessage>
              <FaPhone className="cursor-pointer hover:scale-[120%] duration-500"></FaPhone>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Agents;
