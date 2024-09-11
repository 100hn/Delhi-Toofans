import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Assests/Logo/logo192.png';

const Header = () => {
  const Menu = [
    { name: "About Us", link: "/About" },
    { name: "News & Updates", link: "/News-Updates" },
    { name: "Toofani Squad", link: "/Squad" },
    { name: "Fixture & Results", link: "/Fixture-Result" },
    { name: "Gallery", link: "/Gallery" },
    { name: 'Newsletter', link: '/Newsletter'},
    { name: 'Sponsors', link: '/Sponsors'}
  ];

  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="relative shadow-md w-full top-0 left-0 bg-[#3b0067] py-5">
      <div className="md:flex max-w-[1300px] mx-auto items-center justify-between md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <Link to={'/'}><img src={logo} alt="Delhi Toofans" className='w-auto h-full'/></Link>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* link items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[50] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-15" : "top-[-490px]"
          }`}
        >
          {Menu.map((link) => (
            <li key={link.name} className="md:ml-8 sm:ml-4 md:my-0 my-7 font-semibold">
              <Link
                to={link.link}
                className={`text-white duration-500 ${
                  location.pathname === link.link ? 'border-b-2 border-blue-400' : ''
                }`}
                onClick={() => setOpen(false)}  // Close menu on link click
              >
                {link.name}
              </Link>
            </li>
          ))}
          <button className="btn bg-[#ffbd00] hover:bg-white text-white hover:text-[#ffbd00] border border-bg-yellow-50 rounded-lg md:ml-8 font-semibold px-3 py-1 duration-500 md:static">
            <Link to={'/Contact'} onClick={() => setOpen(false)}> Contact</Link>
          </button>
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Header;