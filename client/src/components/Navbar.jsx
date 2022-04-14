import React, { useState } from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import logo from '../images/logo.png'

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial items-center">
        <img src={logo} alt="logo" className="w-40 cursor-pointer" />
      </div>
      <ul className="sm:flex hidden items-center flex-row justify-between flex-initial text-white">
        {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, idx) => (
          <NavbarItem
            key={idx}
            title={item}
            classProps={'text-2xl hover:text-teal-300'}
          />
        ))}
        <li className="bg-sky-500 mx-4 rounded-full cursor-pointer py-2 px-7 hover:bg-teal-400 hover:scale-105">
          Login
        </li>
      </ul>
      <div className="sm:hidden flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            className="font-bold text-3xl cursor-pointer text-white"
            onClick={() => setToggleMenu((p) => !p)}
          />
        ) : (
          <HiMenuAlt4
            className="font-bold text-3xl cursor-pointer text-white"
            onClick={() => setToggleMenu((p) => !p)}
          />
        )}
        {toggleMenu && (
          <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl sm:hidden flex-col flex justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in space-y-6">
            <li className="text-xl my-2 self-start rounded-full cursor-pointer">
              <AiOutlineClose
                className="hover:scale-105 hover:bg-black rounded-full hover:bg-opacity-30 p-1 text-3xl"
                onClick={() => setToggleMenu((p) => !p)}
              />
            </li>
            {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, idx) => (
              <NavbarItem
                key={idx}
                title={item}
                classProps={'mr-2 text-2xl hover:text-teal-300'}
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar
