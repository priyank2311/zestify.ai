import React from 'react'
import image from '../assets/image 3.png'

const Refer = () => {
  return (
    <div className='w-full bg-[#06030E] flex pb-[6rem] px-[18rem] justify-around'>
      <div className='w-[510px] h-[187px] flex gap-4 flex-col'>
        <div className='flex flex-row gap-4'>
          <h1 className='text-[#FFFFFF99] font-[700] text-[50px] leading-[51px]'>Refer & Earn</h1>
          <img src={image} alt='' className='w-[35.5px] h-[40.3px]' />
        </div>
        <div className='w-[508px] h-[56px]'>
          <span className='font-normal text-[18px] leading-[28px] text-[#FFFFFF99]'>
          Empower your teams to build better processes, for a better workplace.
          </span>
        </div>
        <button className='bg-white w-[223px] h-[40px] rounded-[6px] text-[14px] font-[600] leading-[16px]'>
        Become a Affiliate Partner
        </button>
      </div>

      <div className='w-[600px] h-[112px] text-[18px] font-normal leading-[28px]'>
        <span className='text-[#FFFFFF99]'>
        With Cobalt, managing your business finances is effortless, 
        empowering, and anything but boring. Our intuitive platform brings
        clarity to your cash flow, simplifies your financial decision-making, and  
        fingertips. <span className='text-white'>Say no to spreadsheets and tools designed in the 80s.</span>
        </span>
      </div>
    </div>
  )
}

export default Refer