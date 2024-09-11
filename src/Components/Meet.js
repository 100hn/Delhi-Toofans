import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import dc from '../Assests/Team/Dilip.jpg';
import amrita from '../Assests/Team/Amrita.jpg';
import vivek from '../Assests/Team/Vivek.jpg';
import manish from '../Assests/Team/Manish.jpg';
import sunny from '../Assests/Team/Sunny.jpg';
import shyam from '../Assests/Team/Shyam.jpg';
import saiprakash from '../Assests/Team/SaiPrakash.jpg';

const Meet = () => {
  const data = [
    {
      name: 'Dilip Chakraborty',
      desig: 'Group Accounts and Taxation',
      img: dc
    },
    {
      name: 'Manish Kumar',
      desig: 'Group General Counsel',
      img: manish
    },
    {
      name: 'Amrita Desai',
      desig: 'Group CHRO',
      img: amrita
    },
    {
      name: 'Vivek Pawar',
      desig: 'CEO HairDramaCo.',
      img: vivek
    },
    {
      name: 'Sunny Savani',
      desig: 'Co-Founder ShareSquare',
      img: sunny
    },
    {
      name: 'Shyam Savani',
      desig: 'Co-Founder ShareSquare',
      img: shyam
    },
    {
      name: 'Sai Prakash',
      desig: 'CEO Resolute Sports',
      img: saiprakash
    }
  ];

  return (
    <section className="w-full">
      <div className="max-w-[1300px] m-auto py-16 px-4">
        <h1 className="text-4xl uppercase font-bold text-center">MEET THE TEAM</h1>
        <div className="mt-20 relative">
        <style>
            {`
              .swiper-button-prev,
              .swiper-button-next {
                padding-left: 1px;
                padding-right: 1px;
              }
            `}
          </style>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              480: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            style={{
                paddingBottom: '40px', // Adjust the bottom padding as needed
                paddingTop: '40px', // Adjust the top padding as needed
              }}
          >
            {data.map((d, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#F4F5F6] text-black rounded-lg hover:bg-[#0a235c] hover:p-3 hover:text-white">
                  <div className="rounded-t-xl flex justify-center items-center">
                    <img src={d.img} alt={d.name} className="md:h-45 md:w-50 w-full h-full rounded"/>
                  </div>
                  <div className="flex flex-col gap-4 p-5 justify-center items-center">
                    <h5 className="text-2xl font-semibold">{d.name}</h5>
                    <span className="font-bold">{d.desig}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Meet;