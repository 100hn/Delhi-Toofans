import React, { useState } from 'react';
import image241 from '../Assests/Image/Gallery1.jpg';
import image242 from '../Assests/Image/Gallery2.jpg';
import image243 from '../Assests/Image/Gallery3.jpg';
import image244 from '../Assests/Image/Gallery4.jpg';
import image245 from '../Assests/Image/Gallery5.jpg';
import image246 from '../Assests/Image/Gallery6.jpg';
import image231 from '../Assests/Image/Gallery6.jpg';
import image232 from '../Assests/Image/Gallery5.jpg';
import image233 from '../Assests/Image/Gallery4.jpg';
import image234 from '../Assests/Image/Gallery3.jpg';
import image235 from '../Assests/Image/Gallery2.jpg';
import image236 from '../Assests/Image/Gallery1.jpg';
import image221 from '../Assests/Image/Gallery3.jpg';
import image222 from '../Assests/Image/Gallery5.jpg';
import image223 from '../Assests/Image/Gallery2.jpg';
import image224 from '../Assests/Image/Gallery6.jpg';
import image225 from '../Assests/Image/Gallery1.jpg';
import image226 from '../Assests/Image/Gallery4.jpg';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('2024');

  const images = {
    '2024': [image241, image242, image243, image244, image245, image246],
    '2023': [image231, image232, image233, image234, image235, image236],
    '2022': [image221, image222, image223, image224, image225, image226],
  };

  return (
    <section className='text-center justify-center items-center mx-auto m-2 md:my-10 md:px-[11.25rem]'>
      <div className="md:my-10 my-2">
        <h2 className='text-center text-3xl font-bold text-[#3b0067] pb-4'>Gallery</h2>
        <div className="flex justify-center mb-5">
            {Object.keys(images).map((year) => (
            <button
                key={year}
                className={`px-7 py-1 m-2 rounded-3xl text-sm ${
                activeTab === year
                    ? 'bg-[#ffbd00] text-white font-semibold'
                    : 'bg-[#3b0067] text-white font-semibold'
                } rounded`}
                onClick={() => setActiveTab(year)}
            >
                {year}
            </button>
            ))}
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-6 md:mx-24 my-1  ">
            {images[activeTab].map((src, index) => (
            <div className=' rounded-lg bg-[#3b0067] p-2'>
            <img
                key={index}
                src={src}
                alt={`Gallery ${activeTab} - ${index + 1}`}
                className="w-full h-auto rounded-lg"
            />
            </div>
            ))}
        </div>
      </div>
      <button className='bg-[#ffbd00] px-8 py-1.5 text-sm rounded-3xl text-black font-medium'>View All</button>
    </section>
  );
};

export default Gallery;
