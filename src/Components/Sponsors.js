import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import sponsor1 from '../Assests/Sponsors/Prism Cement logo.png';
import sponsor2 from '../Assests/Sponsors/Johnson Logo.png';
import sponsor3 from '../Assests/Sponsors/Alcis logo.png';
import sponsor4 from '../Assests/Sponsors/Gold Spot logo.png';
import sponsor5 from '../Assests/Sponsors/Dafa News logo.png';
import sponsor6 from '../Assests/Sponsors/Mirchi logo.png';
import sponsor7 from '../Assests/Sponsors/Gaana logo.png';
import sponsor8 from '../Assests/Sponsors/exicom logo.png';

const Sponsors = () => {
  return (
    <section className="justify-center items-center mx-auto mt-10 md:px-[11.25rem] bg-white">
      <div className="container">
        <h2 className="text-center text-3xl font-bold p-4 text-[#3b0067]">Principal Sponsors</h2>

        <div className="rounded-lg p-6 flex justify-center items-center">
          <div className="w-full">
            <Swiper
              navigation={true} // Enables navigation arrows
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              className="sponsors-slider"
              breakpoints={{
                640: {
                  slidesPerView: 1, // 1 slide for screens >= 640px
                },
                768: {
                  slidesPerView: 2, // 2 slides for screens >= 768px
                },
                1024: {
                  slidesPerView: 2, // 2 slides for screens >= 1024px
                },
              }}
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <div className="text-center">
                  <img src={sponsor1} alt="Sponsor 1" className="inline-block" />
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <div className="text-center">
                  <img src={sponsor2} alt="Sponsor 2" className="inline-block" />
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <div className="text-center">
                  <img src={sponsor3} alt="Sponsor 3" className="inline-block" />
                </div>
              </SwiperSlide>

              {/* Slide 4 */}
              <SwiperSlide>
                <div className="text-center">
                  <img src={sponsor4} alt="Sponsor 4" className="inline-block" />
                </div>
              </SwiperSlide>
              {/* Slide 5 */}
              <SwiperSlide>
                <div className="text-center">
                  <img src={sponsor5} alt="Sponsor 1" className="inline-block" />
                </div>
              </SwiperSlide>

              {/* Slide 6 */}
              <SwiperSlide>
                <div className="text-center">
                  <img src={sponsor6} alt="Sponsor 2" className="inline-block" />
                </div>
              </SwiperSlide>

              {/* Slide 7 */}
              <SwiperSlide>
                <div className="text-center">
                  <img src={sponsor7} alt="Sponsor 3" className="inline-block" />
                </div>
              </SwiperSlide>

              {/* Slide 8 */}
              <SwiperSlide>
                <div className="text-center">
                  <img src={sponsor8} alt="Sponsor 4" className="inline-block" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* Custom styles for navigation arrows */}
        <style jsx>{`
          /* Ensures arrows are visible on all screens */
          .swiper-button-next,
          .swiper-button-prev {
            color: purple;
            width: 20px;
            height: 20px;
          }

          /* Adjust arrow positioning for smaller screens */
          @media (max-width: 768px) {
            .swiper-button-next,
            .swiper-button-prev {
              top: 50%;
              transform: translateY(-50%);
              width: 20px;
              height: 20px;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Sponsors;
