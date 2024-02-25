import React from 'react'
import logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <div className="bg-[#06030E] w-full h-[72px] flex items-center justify-evenly">
      <div className='contents'>
        <img src={logo} alt='LOGO' style={{width: '118px', height: '16px'}} />
        <ul className='text-[#FFFFFF99] text-[13px] font-medium leading-[16px] font-sans flex flex-wrap'>
          <div className='flex gap-[5rem]'>
          <li>Home</li>
          <li>Features</li>
          <li>Experties</li>
          <li>Blogs</li>
          <li>Contact Us</li>
          </div>
        </ul>
        <div className='flex text-[#FFFFFF99] gap-[2rem]'>
        <button className='border border-[#FFFFFF99] border-solid w-[117px] h-[32px] font-medium text-[13px] leading-[16px] rounded-[36px]'>
          Refer & Earn
        </button>
        <button className='border border-[#FFFFFF0D] bg-[#FFFFFF0D] w-[96px] h-[32px] border-solid'>Log In</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar