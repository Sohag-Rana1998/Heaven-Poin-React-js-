import { FaHome, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Button } from '@material-tailwind/react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const ContactUs = () => {
  return (
    <div>
      <div>
        <div className="animate__animated animate__fadeInDown w-full rounded-xl bg-[url(https://i.ibb.co/n0c4YZq/customercare.jpg)] bg-cover text-center mb-10  bg-no-repeat bg-center bg-opacity-10  ">
          <div className=" h-full w-full rounded-xl flex flex-col md:flex-row items-center justify-between bg-black  bg-opacity-45 p-10">
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="1000"
              className="text-white text-center md:text-left lg:text-left pl-4 lg:pl-14"
            >
              <h1 className="text-5xl font-play  font-bold ">Get In Touch</h1>
              <p className="font-work">
                Want to get in touch? We would love <br /> to hear from you.
                Here is away how you can reach us.
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="1000"
              className="bg-white w-full md:w-[360px] border-2 border-gray-400  rounded-xl p-5 md:p-10"
            >
              <h2 className="text-xl md:text-3xl font-bold mb-4">
                How To Find Us
              </h2>
              <div className="flex gap-2 items-center mb-2">
                <FaPhoneAlt />
                <h3> +971 55 509 7657</h3>
              </div>
              <div className="flex items-center mb-2 gap-2">
                <MdEmail />
                <h3> realestate@inc.com</h3>
              </div>
              <div className="flex  items-center gap-2 mb-4 ">
                <FaHome />
                <h3> Dubai Production City</h3>
              </div>
              <div>
                <h2 className="text-xl md:text-3xl font-bold mb-2">
                  Opening Hour
                </h2>
                <div className="flex justify-between items-center mb-2">
                  <h3>Monday-Friday</h3>
                  <h3>10:00 - 18:00</h3>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <h3>Saturday</h3>
                  <h3>10:00 - 14:00</h3>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <h3>Sunday</h3>
                  <h3>Closed</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-slate-100  rounded-md p-5 ">
        <div className=" w-full  mx-auto rounded-xl mt-5">
          <h2 className="text-xl md:text-3xl font-bold mb-3">
            Give Us Your Message:
          </h2>
          <div>
            <div className=" flex flex-col lg:flex-row gap-5 my-5">
              <input
                type="text"
                className="input w-full   border-2 border-gray-500"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="input  w-full   border-2 border-gray-500"
                placeholder="Your Email"
              />
              <input
                type="text"
                className="input  w-full   border-2 border-gray-500"
                placeholder="Your Phone"
              />
            </div>
            <div className="">
              <textarea
                cols="30"
                rows="10"
                className="w-full  border-2 border-gray-500 p-5 rounded-2xl mb-4"
                placeholder="Message"
              ></textarea>
              <div className="w-full flex justify-end">
                <Button
                  size="lg"
                  className="text-white font-bold w-full hover:scale-[110%] hover:bg-gray-900 md:w-60 bg-orange-600"
                >
                  Send Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20">
        <div>
          <h1 className="text-5xl font-bold font-play text-center my-5">
            Connect with one of our global offices
          </h1>
        </div>
        <div className="w-full h-[500px]">
          <MapContainer
            className="h-full w-full"
            center={[25.0318, 55.19]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[25.0318, 55.19]}>
              <Popup>
                Dubai Production City, Dubai, 0448, <br /> United Arab Emirates
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
