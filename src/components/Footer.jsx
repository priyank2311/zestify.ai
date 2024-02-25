import React from 'react'
import facebook from '../assets/logo-facebook.png'
import linkedin from '../assets/logo-linkedin.png'
import twitter from '../assets/logo-twitter.png'
import instagram from '../assets/logo-instagram.png'
import logo from '../assets/Logo.png'

const ProductList = ['About Us', "FAQ's", 'Privacy Policy', 'Terms of Service', 'Disclaimer', 'Submit Grievance', 'Features'];

const CommunityList = ['Subscription', 'Courses', 'Webinar']

const Footer = () => {
  return (
    <div className='w-full bg-[#06030E] flex flex-row justify-around p-[4rem] border-t border-solid border-white border-opacity-10'>
      <div className='flex flex-col gap-[2rem]'>
        <img src={logo} alt='' className='w-[118px] h-[16px]' />
        <span className='w-[296px] h-[84px] font-normal text-[16px] leading-[28px] text-[#71717A]'>
        Our partnerships have delivered great value to our projects and we’re happy to share some of their feedback below
        </span>

        <div className='flex gap-7 rounded-full'>
          <img src={facebook} alt='Facebook' className='bg-white w-[40px] h-[40px] rounded-full p-1' />
          <img src={linkedin} alt='LinkeDin' className='bg-white w-[40px] h-[40px] rounded-full p-1' />
          <img src={twitter} alt='Twitter' className='bg-white w-[40px] h-[40px] rounded-full p-1' />
          <img src={instagram} alt='Instagram' className='bg-white w-[40px] h-[40px] rounded-full p-1' />
        </div>
      </div>

      <div className='flex flex-col justify-around'>
        <span className='w-[48px] h-[15px] font-medium text-[12.6px] leading-[14.7px] text-white'>Product</span>
        {
          ProductList.map((product) => <span className='font-normal text-[12.9px] leading-[14.7px] text-[#71717A]'>{product}</span>)
        }
      </div>

      <div className='flex flex-col justify-between w-[117px] h-[105px]'>
        <span className='w-[48px] h-[15px] font-medium text-[12.6px] leading-[14.7px] text-white'>Community</span>
        {
          CommunityList.map((community) => <span className='font-normal text-[12.9px] leading-[14.7px] text-[#71717A]'>{community}</span>)
        }
      </div>
    </div>
  )
}

export default Footer