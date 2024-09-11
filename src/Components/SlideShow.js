import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../Assests/Banner/banner.jpg' ;
import banner1  from '../Assests/Banner/Banner-1.jpg'
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Insights from './Insights';

const SlideShow = () => {
  return (
    <>
    
    <Swiper
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className} custom swiper-pagination-bullet" style="--swiper-pagination-color: #ffbd00;"></span>`;
        },
      }}
    >
      <SwiperSlide>
        <div className="relative h-full w-full">
          <img
            src={banner1}
            alt="Slide 1"
            className="w-full md:h-auto h-[450px] object-cover"
          />
          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center p-6">
            <h2 className="md:text-5xl text-2xl uppercase font-extrabold text-[#ffbd00]">
              Runner's up
            </h2>
            <h3 className='md:text-4xl text-xl uppercase text-white font-semibold whitespace-nowrap'>
                Rupay Prime Volley League Season 3
            </h3>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative h-full w-full">
          <img
            src={image1}
            alt="Slide 2"
            className="w-full md:h-auto h-[450px] object-cover"
          />
          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center p-6">
            <h2 className="md:text-5xl text-2xl uppercase font-extrabold text-[#ffbd00]">
              Runner's up
            </h2>
            <h3 className='md:text-4xl text-xl uppercase text-white font-semibold whitespace-nowrap'>
                Rupay Prime Volley League Season 3
            </h3>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <div className='mb-32'>
      <Insights/>
    </div>
    </>
  );
};

export default SlideShow;