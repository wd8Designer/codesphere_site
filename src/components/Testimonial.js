'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, Manufacturing Co.",
      content: "Codeshere's Odoo implementation transformed our operations. Their team delivered exactly what we needed on time and under budget. The customization options were perfect for our unique workflow requirements.",
      rating: 5,
      image: "/t1.jpeg"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Operations Director, Retail Chain",
      content: "The inventory management solution they built saved us 30% in operational costs within the first quarter. Their ongoing support has been exceptional - always responsive and knowledgeable.",
      rating: 5,
      image: "/t1.jpeg"
    },
    {
      id: 3,
      name: "David Rodriguez",
      role: "CFO, Healthcare Provider",
      content: "We struggled with multiple disconnected systems before working with Codeshere. Their integrated Odoo solution gave us the visibility we needed across all departments.",
      rating: 4,
      image: "/t1.jpeg"
    }
  ];

  return (
    <section className="bg-[#714b6717] text-center py-20 px-6 rounded-[20px] w-[calc(100%-40px)] mx-auto relative">
      <div className="max-w-6xl mx-auto">
        <div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1 rounded-full bg-[#714B67] text-white text-sm font-medium mb-4 inline-block">
            Client Voices
          </span>
          <h2 className="text-[#714B67] font-semibold text-4xl sm:text-3xl md:text-5xl mb-[30px] text-center">
            What Our Clients Say
          </h2>
          <div className="w-20 h-[2px] bg-[#714B67] mx-auto mb-6"></div>
          <p className="mb-[30px] text-[18px] text-[#714B67] text-center">
            Hear from businesses that transformed their operations with our Odoo solutions
          </p>
        </div>

        {/* Static Testimonials */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white backdrop-filter relative backdrop-blur-sm rounded-xl shadow-2xl p-8 flex flex-col items-center text-center z-10 overflow-hidden after:absolute after:w-[180px] after:h-[180px] after:bg-[rgba(1,126,132,100%)] after:top-[-120px] after:right-[-120px] after:-z-10 after:blur-[60px] after:rounded-[50%]"
            >

              {/* <div className='absolute top-[-60px] right-[-60px] blur-[40px] opacity-[0.7] rotate-[180deg]'>
                <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="90" cy="90" r="90" fill="url(#paint0_linear_5040_239)" />
                  <defs>
                    <linearGradient id="paint0_linear_5040_239" x1="94" y1="105.5" x2="153" y2="19" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#714B67" />
                      <stop offset="1" stop-color="#017E84" />
                    </linearGradient>
                  </defs>
                </svg>

              </div> */}

              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#714B67] shadow-md relative mb-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Quote */}
              <Quote className="text-[#714B67] w-10 h-10 mb-4 opacity-20" />

              {/* Content */}
              <p className="text-gray-700 text-lg mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Rating */}
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Name and Role */}
              <h4 className="font-bold text-xl text-[#714B67]">{testimonial.name}</h4>
              <p className="text-gray-600">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
