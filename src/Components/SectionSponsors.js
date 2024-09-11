import React from 'react'

import prism from '../Assests/Sponsors/Prism Cement logo.png'
import johnson from '../Assests/Sponsors/Johnson Logo.png'

import gaana from '../Assests/Sponsors/Gaana logo.png'
import mirchi from '../Assests/Sponsors/Mirchi logo.png'
import exicom from '../Assests/Sponsors/exicom logo.png'

import dafa from '../Assests/Sponsors/Dafa News logo.png'
import gordSpot from '../Assests/Sponsors/Gold Spot logo.png'
import alcis from '../Assests/Sponsors/Alcis logo.png'

const SectionSponsors = () => {
  return (
   <section className='mx-10 mt-10 '>
    <div className='bg-[#3b0067] justify-center items-center rounded-t-2xl'>
        <h2 className='text-center text-white text-4xl p-3 my-2 font-semibold'>Principal Sponsors</h2>
        <div className='flex justify-center gap-4 py-4'>
            <img src={prism} alt="" />
            <img src={johnson} alt="" />
        </div>
        <h2 className='text-center text-white text-4xl p-3 font-semibold'>Associate Sponsors</h2>
        <div className='flex justify-center gap-4 py-4'>
            <img src={gaana} alt="" />
            <img src={mirchi} alt="" />
            <img src={exicom} alt="" />
        </div>
        <div className='flex justify-center gap-5 py-6'>
            <img src={dafa} alt="" />
            <img src={gordSpot} alt="" />
            <img src={alcis} alt="" />
        </div>
    </div>
   </section>
  )
}

export default SectionSponsors