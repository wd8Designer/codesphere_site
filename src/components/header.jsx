'use client'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [navIsOpened, setNavIsOpened] = useState(false)
  const closeNavbar = () => setNavIsOpened(false)
  const toggleNavbar = () => setNavIsOpened(prev => !prev)

  return (
    <>
      <div aria-hidden={true} onClick={closeNavbar} className={`fixed bg-gray-800/40 inset-0 z-30 ${navIsOpened ? "lg:hidden" : "hidden lg:hidden"}`}
      ></div>
      <header className="sticky top-0 w-full flex items-center h-20 border-b border-b-[#714B67]  z-40 bg-white/50  backdrop-filter backdrop-blur-lg">
        <nav className="relative mx-auto  w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
          <div className="flex items-center min-w-max">
            <Link href="/" className="relative flex items-center gap-2.5">
              <span className="flex">
                <span className="w-3 h-6  bg-[#017E84]" />
                <span className="w-3 h-6  bg-[#714B67] mt-2" />
              </span>
              <span className="text-lg font-bold text-[#714B67]"  > Codesphere</span>
            </Link>
          </div>

          <div className={`
            absolute top-full left-0  py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative lg:w-max lg:flex lg:transition-none duration-300 ease-linear gap-x-6
            ${navIsOpened ? "visible opacity-100 translate-y-0" : "translate-y-10 opacity-0 invisible lg:visible lg:translate-y-0 lg:opacity-100"}
          `}>
            <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-[#714B67]  lg:w-full lg:justify-center font-bold">
              {["Home", "Portfolio", "Services", "Company", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="relative py-2.5 duration-300 ease-linear  after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-[#714B67] after:transition-transform">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:min-w-max mt-10 lg:mt-0">
              <Link href="#" className="relative flex justify-center px-6 py-3 before:absolute before:inset-0 before:rounded-full before:transition before:bg-[#714B67]  text-white hover:before:scale-105">
                <span className="relative">Book a call</span>
              </Link>
            </div>
          </div>

          <div className="flex items-center lg:hidden">
            <button onClick={toggleNavbar} aria-label='toggle navbar' className="outline-none border-l border-l-indigo-100 dark:border-l-gray-800 pl-3 py-3">
              <span aria-hidden={true} className={`flex h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300 ${navIsOpened ? "rotate-45 translate-y-[.324rem]" : ""}`} />
              <span aria-hidden={true} className={`mt-2 flex h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300 ${navIsOpened ? "-rotate-45 -translate-y-[.324rem]" : ""}`} />
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
