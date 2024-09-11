import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="bg-black text-white py-8 mx-auto md:px-[9rem]">
      <div className="container md:px-20 px-3">
        {/* Flex container for the footer */}
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
          {/* Column 1 */}
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-y-2"> {/* Change to a grid layout */}
              <ul className="space-y-2 grid">
                <Link to={'/About'}>About Us</Link>
                <Link to={'/News-Updates'}>News & Updates</Link>
                <Link to={'/Squad'}>Toofani Squad</Link>
                <Link to={'/Fixture-Results'}>Fixtures & Updates</Link>
              </ul>
              <ul className="grid">
                <Link to={'/Gallery'}>Gallery</Link>
                <Link to={'/Newsletter'}>Newsletter</Link>
                <Link to={'/Sponsors'}>Sponsors</Link>
              </ul>
            </div>
          </div>

          {/* Column 2 (About Us) */}
          <div className="flex-1 ">
            <h3 className="text-lg font-bold">Address</h3>
            <p className="text-sm leading-relaxed">
              <span className='uppercase font-semibold'>Resolute Sports Private Limited</span><br />
              1002, 10th Floor, Kataria Arcade, Nr. Adani Vidhya Mandir,<br />
              Makarba, Jivraj Park, Ahmedabad City, Ahmedabad-380051, Gujarat, India
            </p>
          </div>

          {/* Column 3 (Contact Us and Social Media) */}
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-4">Connect with Us</h3>
            <p className="text-sm leading-relaxed mb-1">
              The newest addition to the Rupay Prime Volleyball League
            </p>
            <span className='font-semibold'> #DilSeToofan | #DelhiToofans</span>
            <div className="flex space-x-4 mt-3">
              <a href="#" className="hover:text-[#3b0067]" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-[#3b0067]" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-[#3b0067]" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className='hover:text-[#3b0067]' aria-label='YouTube'>
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
