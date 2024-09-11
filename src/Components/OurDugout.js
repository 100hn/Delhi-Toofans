import React from 'react';

const OurDugout = () => {
  return (
    <section className="py-5 mx-auto m-2 justify-center items-center mt-10 md:px-[11.25rem] gap-4">
      <h2 className="text-center md:text-5xl font-bold mb-6 text-[#3b0067] md:pb-4">Our Dugout</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Image 1 */}
        <div className=" rounded-lg overflow-hidden shadow-lg">
          <img src="image1.jpg" alt="Dugout 1" className="w-full h-48 object-cover bg-gray-200" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Andreas Mount</h3>
            <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut totam perferendis alias aperiam ab nisi.</p>
          </div>
        </div>

        {/* Image 2 */}
        <div className=" rounded-lg overflow-hidden shadow-lg">
          <img src="image2.jpg" alt="Dugout 2" className="w-full h-48 object-cover bg-gray-200" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Andreas Mount</h3>
            <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam architecto ea dolore molestiae sint dolores.</p>
          </div>
        </div>

        {/* Image 3 */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src="image3.jpg" alt="Dugout 3" className="w-full h-48 object-cover bg-gray-200" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Andreas Mount</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, explicabo fugiat excepturi similique reprehenderit vel.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDugout;
