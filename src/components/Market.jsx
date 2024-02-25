import React from 'react'
import group from '../assets/Group 1000001993.png'

const Market = () => {
  return (
    <div className='w-full bg-[#06030E] p-[5rem] flex flex-row justify-evenly items-center'>
      <div className='w-[510px] h-[259px] text-[#FFFFFF99] flex flex-col justify-between'>
        <span className='w-[420px] h-[103px] font-[700] text-[50px] leading-[51px]'>Our Stock Market Experties</span>
        <span className='w-[508px] h-[56px] font-normal text-[18px] leading-[28px]'>
        Empower your teams to build better processes, for a better workplace.
        </span>
        <button className='w-[147px] h-[40px] rounded-[6px] font-medium text-[13.9px] leadinh-[16px] text-black' style={{background: 'rgba(255, 255, 255, 0.9)'}}>
          Join Expert Team
        </button>
      </div>
      <div className='w-[519px] h-[804px]'>
        <img src={group} alt='' />
      </div>
    </div>
  )
}

export default Market