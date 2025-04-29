'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 px-4 bg-[#714B67]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1 rounded-full bg-purple-100 text-[#714B67] text-sm font-medium mb-4 inline-block">
            Client Voices
          </span>
          <h2 className="text-white font-semibold text-4xl sm:text-3xl md:text-5xl mb-[30px] text-center">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="mb-[30px] text-[18px] text-white text-center">
            Hear from businesses that transformed their operations with our Odoo solutions
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Testimonial Cards */}
          <div className="relative h-[500px] sm:h-[400px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: index > currentIndex ? 100 : -100 }}
                animate={{ 
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : (index > currentIndex ? 100 : -100),
                  zIndex: index === currentIndex ? 10 : 1
                }}
                transition={{ duration: 0.6 }}
                className={`absolute inset-0 bg-white rounded-xl shadow-lg p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 ${index === currentIndex ? 'pointer-events-auto' : 'pointer-events-none'}`}
              >
                {/* Client Image */}
                <motion.div 
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#714B67] shadow-md relative flex-shrink-0"
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Testimonial Content */}
                <div className="flex-1 flex flex-col">
                  <Quote className="text-[#714B67] w-10 h-10 mb-4 opacity-20" />
                  <p className="text-gray-700 text-lg md:text-xl mb-6 flex-1">
                    "{testimonial.content}"
                  </p>
                  <div className='text-center md:text-left'>
                    <div className="flex justify-center md:justify-start mb-2">
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
                    <h4 className="font-bold text-xl text-[#714B67]">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
 
          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'scale-125 bg-white' : 'bg-white scale-100'}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;