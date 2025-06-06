'use client'
import Image from 'next/image'
import VideoBg from './videoBg'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <>
    <section className="h-screen relative flex align-center justify-center flex-col rounded-[10px] lg:rounded-[20px] w-[calc(100%-20px)] lg:w-[calc(100%-40px)] mt-[-70px] lg:mt-[-60px] mx-auto">
        <VideoBg />
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12   z-[11] m-auto " >
            <div className="mx-auto text-center lg:text-left flex flex-col max-w-3xl justify-center lg:justify-start lg:py-8 flex-1 lg:w-1/2 lg:max-w-none relative z-[11]" >
                <h1 className="text-[#714B67]  text-4xl/snug sm:text-5xl/tight lg:text-5xl/tight xl:text-7xl/tight 2xl:text-8xl/tight font-bold text capitalize text-center">
                Build Your Online Platform with best <span className="bg-[#714B67] text-[#fff] inline-block border rounded-full px-[20px] sm:px-9">Digital
                    Agency</span>
                </h1>
                <p className="mt-10 text-[#714B67]  lg:text-2xl  lg:max-w-none text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fugit! Laborum quo maxime
                at sapiente
                quasi
                </p>
                <div className="mt-10 flex gap-4 justify-center lg:justify-center flex-wrap">
                <Link href="#" className="relative px-[30px] md:px-[30px] lg:px-[15] py-[10px] md:py-[15px] lg:py-5 before:absolute before:inset-0 before:rounded-full before:bg-[#714B67] before:transition before:border-2 before:border-[#714B67]  text-[#fff] font-bold text-[18px] lg:text-[20px] lg:text-2xl w-full sm:w-auto hover:before:scale-105">
                    <span className="relative">
                        Our Services
                    </span>
                </Link>
                <Link href="#" className="relative px-[30px] md:px-[30px] lg:px-[15] py-[10px] md:py-[15px] lg:py-5 before:absolute before:inset-0 before:rounded-full before:transition before:border-2 before:border-[#714B67]  text-[#714B67] font-bold  hover:before:scale-105 text-[18px] lg:text-[20px] lg:text-2xl w-full sm:w-auto">
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
