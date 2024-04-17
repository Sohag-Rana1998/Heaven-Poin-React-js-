import { Typography, Avatar, Rating, Card } from '@material-tailwind/react';
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
    <div className="mt-20 container mx-auto">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-center  mb-10"
      >
        <h1 className="text-4xl font-bold">Testimonials</h1>
        {/* data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" */}
        <p>
          Publish the best of your client testimonials and let the world know
          what a great agent or real <br /> estate agency you are. Testimonials
          build trust.
        </p>
      </div>
      <div
        // data-aos="fade-down"
        // data-aos-duration="1000"
        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {testimonials?.map(test => (
          <Card key={test.id} className="container mx-auto ">
            <div className="p-5 hover:scale-[105%] md:hover:scale-[110%] duration-500 rounded-lg flex flex-col justify-center items-center bg-slate-100 shadow-lg">
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
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
