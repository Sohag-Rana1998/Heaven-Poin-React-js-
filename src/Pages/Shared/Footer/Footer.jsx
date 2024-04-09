import { Typography } from '@material-tailwind/react';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa6';

const SITEMAP = [
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Our Team', 'Projects'],
  },
  {
    title: 'Help Center',
    links: ['Discord', 'Twitter', 'GitHub', 'Contact Us'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Newsletter', 'Free Products', 'Affiliate Program'],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="p-10 mx-auto bg-black bg-opacity-70 text-white w-full max-w-7xl ">
      <footer className="relative w-full">
        <div className="">
          <div className="flex flex-col md:flex-row justify-between items-center text-center ">
            <div className="text-3xl font-bold text-light-blue-600">
              Heavens Hub
            </div>
            <div className="mx-auto grid w-full grid-cols-2 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {SITEMAP.map(({ title, links }, key) => (
                <div key={key} className="w-full">
                  <Typography
                    variant="small"
                    color="text-white"
                    className="mb-4 text-lg font-bold uppercase !text-white "
                  >
                    {title}
                  </Typography>
                  <ul className="space-y-1">
                    {links.map((link, key) => (
                      <Typography
                        key={key}
                        as="li"
                        color="text-white"
                        className="font-normal"
                      >
                        <a
                          href="#"
                          className="inline-block text-white py-1 pr-2 transition-transform hover:scale-105"
                        >
                          {link}
                        </a>
                      </Typography>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
            <Typography
              variant="small"
              className="mb-4 text-center font-normal text-white md:mb-0"
            >
              &copy; {currentYear}{' '}
              <a href="https://material-tailwind.com/">Heavens Hub</a>. All
              Rights Reserved.
            </Typography>
            <div className="flex gap-4 text-white sm:justify-center">
              <Typography
                as="a"
                href="#"
                className="opacity-80 text-2xl font-bold transition-opacity hover:opacity-100"
              >
                <FaFacebook></FaFacebook>
              </Typography>
              <Typography
                as="a"
                href="#"
                className="opacity-80 text-2xl font-bold transition-opacity hover:opacity-100"
              >
                <FaInstagram></FaInstagram>
              </Typography>
              <Typography
                as="a"
                href="#"
                className="opacity-80 text-2xl font-bold transition-opacity hover:opacity-100"
              >
                {' '}
                <FaGithub></FaGithub>
              </Typography>
              <Typography
                as="a"
                href="#"
                className="opacity-80 text-2xl font-bold transition-opacity hover:opacity-100"
              >
                <FaTwitter></FaTwitter>
              </Typography>
              <Typography
                as="a"
                href="#"
                className="opacity-80 text-2xl font-bold transition-opacity hover:opacity-100"
              >
                <FaLinkedin></FaLinkedin>
              </Typography>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
