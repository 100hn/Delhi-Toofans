import React from 'react';
import news from '../Assests/Image/NewsUpdate.jpg';
import image1 from '../Assests/Image/News1.jpg';
import image2 from '../Assests/Image/News1.jpg';
import image3 from '../Assests/Image/News1.jpg';
import image4 from '../Assests/Image/News1.jpg';

const newsItems = [
  {
    image: image1,
    title: "Calicut Heroes clinch the title in a spectacular final to face Calicut Heroes in title clash",
    content: "Calicut Heroes defeated Delhi Toofans in an exciting finale to become the PVL 2024 champions."
  },
  {
    image: image2,
    title: "Ahmedabad Defenders' Journey Comes to an End to face Calicut Heroes in title clash",
    content: "Ahmedabad Defenders were knocked out after a tough match against Delhi Toofans in the eliminator."
  },
  {
    image: image3,
    title: "Exciting Upsets in PVL 2024 to face Calicut Heroes in title clash",
    content: "The PVL 2024 saw some unexpected victories, with underdogs rising to the occasion."
  },
  {
    image: image4,
    title: "Delhi Toofans edges past Ahmedabad Defenders to face Calicut Heroes in title clash",
    content: "Delhi Toofans edged out the reigning champion Ahmedabad Defenders 3-2 in a thrilling five-set encounter."
  }
];

const NewsUpdates = () => {
  return (
    <section className='justify-center items-center mx-auto m-2 md:my-10 md:px-[11.25rem] '>
      <h1 className='text-[#3b0067] md:text-5xl font-bold p-4 text-center md:pb-10 mb-4 text-2xl'>News and Updates</h1>
      <div className='flex flex-col md:flex-row justify-between gap-4'>
        {/* Left Main Div */}
        <div className='bg-[#3b0067] p-5 rounded-xl md:w-1/2 mr-7 w-full'>
          <img src={news} alt="News" className='w-auto rounded-t-2xl' />
          <div className='bg-white p-4 rounded-b-2xl'>
            <h4 className='text-xl font-bold pb-3 pt-5'>PVL 2024: Delhi Toofans edges past Ahmedabad Defenders to face Calicut Heroes in title clash</h4>
            <p className='text-sm font-semibold pb-3'>Delhi Toofans edged out the reigning champion Ahmedabad Defenders 3-2 in a thrilling five-set encounter in the eliminator of Prime Volleyball League season three on Tuesday</p>
            <button className='text-[#3b0067] bg-[#ffbd00] font-bold py-2 px-6 rounded-lg'>Learn More</button>
          </div>
        </div>

        {/* Right Main Div */}
        <div className='md:w-1/2 w-auto grid gap-4 pt-3'>
          {newsItems.map((item, index) => (
            <div key={index} className='flex shadow-lg'>
              <div className='w-auto mr-5'>
                <img src={item.image} alt="News" className='' />
              </div>
              <div className='w-4/5 p-2'>
                <h4 className='text-sm font-bold pb-4 pt-3'>{item.title}</h4>
                <p className='text-xs font-semibold'>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsUpdates;
