'use client';

import Image from "next/image";

const Whychoose = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <div className="lg:max-w-5xl mx-auto">
            <span className="px-4 py-1 rounded-full bg-[#714B67] text-white text-sm font-medium mb-4 inline-block">
              How We Implement
            </span>
            <h2 className="text-[#714B67] font-semibold text-4xl sm:text-3xl md:text-5xl mb-[30px] text-center">
              How We Implement Odoo for You
            </h2>
            <div className="w-20 h-[2px] bg-[#714B67] mx-auto mb-6"></div>
          </div>
        </div>

        <div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="relative"
        >

          <div className="flex flex-wrap justify-center">
            {[
              {
                icon: (
                  "/discovery.svg"
                ),
                title: "Discovery",
                description: "We analyze your business needs and challenges to propose tailored solutions."
              },
              {
                icon: (
                  "/customization.svg"
                ),
                title: "Customization",
                description: "We adapt Odoo modules and flows to perfectly match your business."
              },
              {
                icon: (
                  "/integration.svg"
                ),
                title: "Integration",
                description: "We connect Odoo with your existing systems for seamless data flow."
              },
              {
                icon: (
                  "/training.svg"
                ),
                title: "Training",
                description: "We empower your team with hands-on training and support materials."
              },
              {
                icon: (
                  "/support.svg"
                ),
                title: "Support",
                description: "We stay with you post-launch to ensure ongoing success."
              }
            ].map((item, index) => (
              <div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="relative w-full md:w-[50%] lg:w-[33.33%] group pl-[10px] pr-[10px] pb-[20px]"
              >
                <div className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'>
                  <div className="p-6 pb-8 text-center">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={60}
                      height={60}
                      className="mx-auto mb-4" ></Image>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >

        </div>
      </div>
    </section>
  );
};

export default Whychoose;