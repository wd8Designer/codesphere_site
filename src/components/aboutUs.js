"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Marquee from "./marquee";

const Aboutus = () => {

    return (
        <section className="about-sec pb-24 relative  mt-[-120px]">
            <div className="max-w-5xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col md:flex-row gap-16">

                <div className="lg:w-full space-y-12 text-gray-700 p-14  rounded-xl bg-[#ffffff]/50 backdrop-filter backdrop-blur-sm shadow-lg">
                    <h1 className=" text-[#714B67] font-semibold text-4xl sm:text-3xl md:text-5xl mb-[30px] text-center capitalize">
                        We help drive your <br></br>business forward faster
                    </h1>
                    <p className="mb-[30px] text-[18px] text-gray-700 text-center">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, saepe aliquid autem alias vero distinctio dignissimos consequatur? Excepturi quibusdam, quam ipsum hic, laudantium ducimus suscipit, culpa facere consequuntur repellat delectus.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-6 p-4 rounded-xl bg-[#017e84] border border-[#017e84]">
                            <span className="rounded-full bg-white text-[#714B67] w-max p-3 flex mb-[20px]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#017e84" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                </svg>
                            </span>
                            <h2 className="font-semibold text-xl text-white mb-[15px]">Our mission</h2>
                            <p className="text-white mb-[20px]">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, saepe aliquid autem alias vero distinctio dignissimos consequatur?
                            </p>

                            <p className="text-white mb-0">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, saepe aliquid autem alias vero distinctio dignissimos consequatur?
                            </p>
                        </div>
                        <div className="space-y-6 p-4 rounded-xl bg-[#714B67] border border-[#714B67]">
                            <span className="rounded-full bg-white text-[#714B67] w-max p-3 flex mb-[20px]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#714B67" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </span>
                            <h2 className="font-semibold text-xl text-white mb-[15px]">Our vision</h2>
                            <p className="text-white mb-[20px]">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, saepe aliquid autem alias vero distinctio dignissimos consequatur?
                            </p>

                            <p className="text-white mb-0">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, saepe aliquid autem alias vero distinctio dignissimos consequatur?
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Marquee></Marquee>

        </section>
    );
};

export default Aboutus;
