import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles 
import 'swiper/css';
import 'swiper/css/navigation';

const Insights = () => { 
  return (
    <div className="flex justify-center items-center mb-10 "> 
      <div className="max-w-[900px] w-full px-4 bg-[#3b0067] rounded-2xl absolute mt-12 z-10"> 
        <Swiper 
          modules={[Navigation]} 
          spaceBetween={0} 
          slidesPerView={1} 
          loop={true} 
          navigation={true} 
          > 
            <SwiperSlide> 
              <div className="md:mx-12 text-white md:p-6 text-center rounded-lg relative p-2 mx-1"> 
                <p className="text-xl"> Welcome to the Metaverse, where the boundaries between reality and virtual worlds blur. Immerse yourself in a world where endless opportunities await. </p> 
                <div className="my-4 border-t border-[#ffbd00]"></div> 
                <h3 className="font-bold text-xl">Sai Prakash</h3> </div> 
            </SwiperSlide> 
            <SwiperSlide>               
              <div className="md:mx-12 text-white md:p-6 text-center rounded-lg relative p-2 mx-1"> 
                <p className="text-xl"> Explore the innovative landscapes of the digital realm, where creativity knows no bounds. </p> 
                <div className="my-4 border-t border-[#ffbd00]"></div> 
                <h3 className="font-bold text-xl">Hair Drama</h3> </div> 
            </SwiperSlide> 
            <SwiperSlide> 
              <div className="md:mx-12 text-white md:p-6 text-center rounded-lg relative p-2 mx-1"> 
                <p className="text-xl"> Join us as we venture into uncharted territories of technology and artistry. </p> 
                <div className="my-4 border-t border-[#ffbd00]"></div> 
                <h3 className="font-bold text-xl">Tech Explorer</h3> 
              </div> 
            </SwiperSlide>
          </Swiper> 
        </div> 
      </div>
    ); 
  };

export default Insights; 