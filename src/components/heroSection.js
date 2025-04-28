'use client'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <>
    <section className="relative  h-screen after:absolute after:bg-[#fff] after:top-0 after:opacity-[0.5] after:w-full after:h-full relative flex align-center justify-center mt-[-80px]">
            <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover absolute top-0"
        >
            <source src="/bg-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12  relative z-[11] m-auto " >
            <div className="mx-auto text-center lg:text-left flex flex-col max-w-3xl justify-center lg:justify-start lg:py-8 flex-1 lg:w-1/2 lg:max-w-none relative z-[11]" >
                <h1 className="text-[#714B67]  text-8xl/snug sm:text-6xl/tight lg:text-5xl/tight xl:text-8xl/tight font-bold text">
                Build Your Online Platform with best <span className="bg-[#714B67] text-[#fff] inline-block border rounded-full px-9">Digital
                    Agency</span>
                </h1>
                <p className="mt-10 text-[#714B67]  lg:text-2xl  lg:max-w-none text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fugit! Laborum quo maxime
                at sapiente
                quasi
                </p>
                <div className="mt-10 flex gap-4 justify-center lg:justify-center flex-wrap">
                <Link href="#" className="relative px-15 py-7 before:absolute before:inset-0 before:rounded-full before:bg-[#714B67] before:transition before:border-2 before:border-[#714B67]  text-[#fff] font-bold text-3xl  hover:before:scale-105">
                    <span className="relative">
                        Our Services
                    </span>
                </Link>
                <Link href="#" className="relative px-15 py-7 before:absolute before:inset-0 before:rounded-full before:transition before:border-2 before:border-[#714B67]  text-[#714B67] font-bold  hover:before:scale-105 text-3xl">
                    <span className="relative">
                        Contact
                    </span>
                </Link>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default HeroSection
