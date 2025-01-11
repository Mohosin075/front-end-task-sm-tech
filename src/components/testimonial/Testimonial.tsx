"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../shared/SectionTitle";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      title: "CEO, Company",
      image:
        "https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jpg",
      message: "This is an amazing service! Highly recommended.",
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "Marketing Manager",
      image:
        "https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jpg",
      message: "I love the experience I had. Great support and quality.",
    },
    {
      id: 3,
      name: "Mike Johnson",
      title: "Freelancer",
      image:
        "https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jpg",
      message: "Exceptional work and delivery on time. Totally worth it!",
    },
  ];

  return (
    <div className="my-20 md:my-48 container-space relative ">
      <SectionTitle
        title="What Our Customers Say"
        description="Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:"
        subtitle="Testimonial"
      />

      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        className="w-full max-w-3xl mx-auto"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="flex flex-col  md:flex-row gap-10 justify-between items-center text-center  p-6 rounded-lg shadow-md">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={300}
                height={100}
                className="md:w-1/2 h-full rounded-full"
              />
              <div className="md:w-1/2 bg-gray-100 p-5 rounded-md">
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-sm ">{testimonial.title}</p>
                <p className="mt-4">{testimonial.message}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonial;
