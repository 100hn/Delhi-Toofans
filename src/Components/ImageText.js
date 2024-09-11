import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import about1 from '../Assests/Image/About.jpg';
import img2 from '../Assests/Image/About.jpg';
import img3 from '../Assests/Banner/Delhi-Toofan.jpg';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ImageText = () => {
  const images = [
    { src: about1, alt: 'Image 1' },
    { src: img2, alt: 'Image 2' },
    { src: img3, alt: 'Image 3' },
  ];

  return (
    <section className="flex flex-col md:flex-row justify-center items-center mx-auto m-2 mt-10 md:px-[11.25rem] gap-4">
      <div className="md:w-1/2 w-full h-full overflow-hidden relative bg-[#3b0067] p-7 pb-10 rounded-xl mt-3">
        <Swiper 
          modules={[Navigation]}
          navigation={true} 
          pagination={{ clickable: true }} 
          loop={true}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full mb-5"> {/* Added relative positioning to contain absolute elements */}
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className=" p-1 text-black bg-[#ffbd00] rounded-md w-12">
                  {index + 1} / {images.length}
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="md:w-1/2 w-full p-6 pt-10 md:mt-6">
        <h2 className='text-[#3b0067] md:text-5xl font-bold pb-5 md:text-left text-center text-3xl'>About Us</h2>
        <p className="md:text-m text-sm pb-3">Delhi Toofans, proudly owned by Resolute Sports Pvt Ltd., embodies the essence and spirit of Northern India within the Rupay Prime Volleyball League. Bursting onto the scene in 2024 during the third season of PVL, with a Toofani debut that propelled them straight to the Finals, the team has swiftly become a beacon of passion, prowess, and unwavering determination.</p>
        <p className="md:text-m text-sm pb-3">Delhi Toofans, proudly owned by Resolute Sports Pvt Ltd., embodies the essence and spirit of Northern India within the Rupay Prime Volleyball League. Bursting onto the scene in 2024 during the third season of PVL, with a Toofani debut that propelled them straight to the Finals, the team has swiftly become a beacon of passion, prowess, and unwavering determination.</p>
        <p className="md:text-m text-sm pb-3">Delhi Toofans, proudly owned by Resolute Sports Pvt Ltd., embodies the essence and spirit of Northern India within the Rupay Prime Volleyball League. Bursting onto the scene in 2024 during the third season of PVL, with a Toofani debut that propelled them straight to the Finals, the team has swiftly become a beacon of passion, prowess, and unwavering determination.</p>
        <button className='bg-[#ffbd00] p-3 mt-4 font-bold rounded-md px-5 text-[#3b0067]'>Learn More</button>
      </div>
    </section>
  );
};

export default ImageText;
