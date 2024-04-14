import { Typography, Avatar, Rating } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('/testimonials.json')
      .then(res => res.json())
      .then(data => setTestimonials(data));
  }, []);

  return (
    <div className="mt-20">
      <div className="text-center  mb-10">
        <h1
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-4xl font-bold"
        >
          Testimonials
        </h1>
        <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
          Publish the best of your client testimonials and let the world know
          what a great agent or real <br /> estate agency you are. Testimonials
          build trust.
        </p>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10"
      >
        {testimonials?.map(test => (
          <div
            key={test.id}
            className="p-5 flex flex-col justify-center items-center bg-slate-100 shadow-lg"
          >
            <Avatar src={test.img} alt="image" size="xl" />
            <Typography variant="h6" className="mt-2">
              {test.author}
            </Typography>
            <Typography color="gray" className="mb-4 font-sm text-sm">
              {test.author_designation}
            </Typography>
            <Typography color="gray" className="mb-4 font-normal">
              {test.review}
            </Typography>
            <Rating value={5} readonly />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
