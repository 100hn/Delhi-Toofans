import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          
          {/* Contact Information */}
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Delhi Toofans</h2>
            <span className="text-lg font-semibold">Resolute Sports Private Limited</span>
            <p className="text-sm mt-2">
              1002, 10th Floor, Kataria Arcade, Nr. Adani Vidhya Mandir, Makarba, Jivraj Park, Ahmedabad City, Ahmedabad-380051, Gujarat, India
            </p>
            <p className="text-sm mt-4 leading-relaxed">
              The newest addition to the Rupay Prime Volleyball League<br />
              <span className="font-semibold">#DilSeToofan | #DelhiToofans</span>
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-[#3b0067] hover:text-purple-900" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-[#3b0067] hover:text-purple-900" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-[#3b0067] hover:text-purple-900" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-[#3b0067] hover:text-purple-900" aria-label="Youtube">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-2/3 bg-white p-8 ">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <form className="space-y-4">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full p-2 border bg-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-[#3b0067] focus:border-[#3b0067] sm:text-sm"
                  placeholder="Your Name"
                />
              </div>

              {/* Mobile and Email in Flex */}
              <div className="flex flex-col md:flex-row gap-4">
                {/* Mobile Number Input */}
                <div className="flex-1">
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    className="mt-1 block w-full p-2 border bg-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-[#3b0067] focus:border-[#3b0067] sm:text-sm"
                    placeholder="Your Mobile Number"
                  />
                </div>

                {/* Email Address Input */}
                <div className="flex-1">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full p-2 border bg-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-[#3b0067] focus:border-[#3b0067] sm:text-sm"
                    placeholder="Your Email Address"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full p-2 border bg-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring-[#3b0067] focus:border-[#3b0067] sm:text-sm"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex">
                <button
                  type="submit"
                  className="py-2 px-10 bg-[#ffbd00] text-white font-semibold rounded-md shadow hover:bg-[#3b0067] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3b0067]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
