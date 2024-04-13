import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
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
      <div className="text-center  mb-10">
        <p className="font-bold">Meet our </p>
        <h1 className="text-4xl font-bold">Best Agents</h1>
        <p>
          With the “list agents shortcode” you can show your agents in any page,
          along side with their <br /> contact details and link to their agent
          profile.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
        <Card className="mt-6 w-full">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src="https://i.ibb.co/JjJXCY3/person3-500x328.webp"
              alt="card-image"
            />
            {/* <img src="https://i.ibb.co/DVwfwkR/person2-500x328.jpg" />
          <img src="https://i.ibb.co/L8VGtmW/person-sam-davies-500x328.webp" /> */}
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Lily Bicharm
              <p className="text-sm">Realtor</p>
            </Typography>
            <Typography>
              Whether it is working with a first time home buyer, a luxury home
              listing or a seasoned inv
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 flex justify-between">
            <div className="text-lg flex gap-3">
              <FaFacebook className="cursor-pointer"></FaFacebook>
              <FaInstagram className="cursor-pointer"></FaInstagram>
              <FaTwitter className="cursor-pointer"></FaTwitter>
              <FaLinkedin className="cursor-pointer"></FaLinkedin>
              <FaPinterest className="cursor-pointer"></FaPinterest>
              <FaVimeo className="cursor-pointer"></FaVimeo>
            </div>
            <div className="flex text-lg gap-3">
              <FaMessage className="cursor-pointer"></FaMessage>
              <FaPhone className="cursor-pointer"></FaPhone>
            </div>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-full">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src="https://i.ibb.co/DVwfwkR/person2-500x328.jpg" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Jack London
              <p className="text-sm">Commercial Broker </p>
            </Typography>
            <Typography>
              As an award-winning Realtor ® and CEO of The Egypt Sherrod Real
              Estate Group, Egypts dail
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 flex justify-between">
            <div className="text-lg flex gap-3">
              <FaFacebook className="cursor-pointer"></FaFacebook>
              <FaInstagram className="cursor-pointer"></FaInstagram>
              <FaTwitter className="cursor-pointer"></FaTwitter>
              <FaLinkedin className="cursor-pointer"></FaLinkedin>
              <FaPinterest className="cursor-pointer"></FaPinterest>
              <FaVimeo className="cursor-pointer"></FaVimeo>
            </div>
            <div className="flex text-lg gap-3">
              <FaMessage className="cursor-pointer"></FaMessage>
              <FaPhone className="cursor-pointer"></FaPhone>
            </div>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-full">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src="https://i.ibb.co/L8VGtmW/person-sam-davies-500x328.webp" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Dennis Albo
              <p className="text-sm">Sales person</p>
            </Typography>
            <Typography>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suff
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 flex justify-between">
            <div className="text-lg flex gap-3">
              <FaFacebook className="cursor-pointer"></FaFacebook>
              <FaInstagram className="cursor-pointer"></FaInstagram>
              <FaTwitter className="cursor-pointer"></FaTwitter>
              <FaLinkedin className="cursor-pointer"></FaLinkedin>
              <FaPinterest className="cursor-pointer"></FaPinterest>
              <FaVimeo className="cursor-pointer"></FaVimeo>
            </div>
            <div className="flex text-lg gap-3">
              <FaMessage className="cursor-pointer"></FaMessage>
              <FaPhone className="cursor-pointer"></FaPhone>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Agents;
