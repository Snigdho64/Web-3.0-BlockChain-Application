import React from 'react'
import logo from '../images/logo.png'
const Footer = () => {
  return (
    <div className="w-full flex md:justify-around lg:justify-center items-center flex-col p-2 px-0 sm:px-2 md:px-4 gradient-bg-footer">
      <div className="flex md:mt-10 w-full sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <img src={logo} alt="logo" className="w-32" />
        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap mt-8 sm:mt-5 w-full">
          {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, idx) => (
            <p
              key={idx}
              className="text-white text-base text-center mx-2 cursor-pointer hover:scale-105 hover:text-sky-500 font-bold sm:text-lg lg:text-xl tracking-wide border rounded-md p-2 hover:border-cyan-500"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-5 pb-2">
        <p className="text-purple-200 text-base text-center">
          Come join us and hear for the unexpected miracle
        </p>
        <a
          href="mailto: aexseusidparker64@gmail.com"
          className="text-red-500 hover:text-emerald-400 sm:font-bold sm:text-lg text-sm text-center font-medium hover:scale-105 mt-2"
        >
          Send A Email
        </a>
      </div>
      <div className="w-[90%] sm:w-full">
        <div className="flex justify-between items-center">
          {['All Rights Reserved 2022', 'Crypty-Web-3.0'].map((item, idx) => (
            <p
              key={idx}
              className="text-white text-right text-xs sm:text-base md:text-lg"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
