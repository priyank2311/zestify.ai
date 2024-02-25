import React from 'react'
import img1 from '../assets/pagination-default.svg.png'
import img2 from '../assets/pagination-default.svg (1).png'
import img3 from '../assets/Ellipse 1483.png'

const Testimonials = () => {
  return (
    <div className='flex flex-col items-center w-full bg-[#06030E] justify-center p-[5rem] gap-[2rem]'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <span className='font-[700] text-[50px] leading-[51px] text-[#71717A] w-[299px] h-[52px]'>Testimonials</span>
        <span className='w-[603.7px] h-[56px] font-normal text-[20px] leading-[28px] text-[#FFFFFF99] text-center'>
        Our partnerships have delivered great value to our projects and we’re happy to share some of their feedback below
        </span>
      </div>

      <div className='flex gap-[8rem] items-center text-center'>
        <button>
        <img src={img1} alt='' className='w-[58px] h-[58px]' />
        </button>
        <span className='w-[663px] h-[343px] font-normal text-white text-[26px] leading-[44px]'>
        Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.
        </span>
        <button>
        <img src={img2} alt='' className='w-[58px] h-[58px]' />
        </button>
      </div>

      <div className='w-[252px] h-[56px] flex text-center items-center'>
        <img src={img3} alt='' className='w-[40px] h-[40px]' />
        <div>
          <h1 className='text-white font-[700] text-[18px] leading-[23px] w-[202px] h-[25px]'>Atthakrit Chimplapibul</h1>
          <span className='text-[#FFFFFF99] font-[300] text-[14px] leading-[14.8px]'>Co-founder & CEO of Bitkub</span>
        </div>
      </div>

      <div className='flex gap-4'>
        <div className='w-[8px] h-[8px] rounded-full' style={{background: 'linear-gradient(135deg, #665DCD 0%, #5FA4E6 44.76%, #D2AB67 100%)'}}></div>
        <div className='w-[8px] h-[8px] rounded-full' style={{background: 'rgba(51, 51, 51, 1)'}}></div>
        <div className='w-[8px] h-[8px] rounded-full' style={{background: 'rgba(51, 51, 51, 1)'}}></div>
      </div>
    </div>
  )
}

export default Testimonials