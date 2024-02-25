import React from 'react'
import home from '../assets/newImg.png'
import image from '../assets/Item.png'
import image1 from '../assets/Item (1).png'
import image2 from '../assets/Item (2).png'
import image3 from '../assets/Item (3).png'
import image4 from '../assets/Item (4).png'
import image5 from '../assets/Item (5).png'

const Home = () => {
  return (
    <div className='flex w-full flex-col gap-6 items-center bg-[#06030E] justify-center' style={{
      background: 'radial-gradient(circle, rgba(17,19,100,1) 10%, rgba(5,2,13,1) 30%)'
    }}>
      <img src={home} alt='HOMEICON' className='w-[822px] h-[805px]' />
      <div className='flex w-[1140px] h-[105.4px] flex-col items-center justify-center'>
        <span className='font-medium text-[16px] leading-[24px] text-[#FFFFFF99]'>Trusted by teams at</span>
        <div className='flex w-[1392px] h-[33.4px] justify-between pt-4'>
          <img src={image} alt='' className='w-[111px] h-[31.4px] opacity-[60%]' />
          <img src={image1} alt='' className='w-[163px] h-[25.4px] opacity-[60%]' />
          <img src={image2} alt='' className='w-[100px] h-[33.4px] opacity-[60%]' />
          <img src={image3} alt='' className='w-[93px] h-[27.4px] opacity-[60%]' />
          <img src={image4} alt='' className='w-[161px] h-[27.4px] opacity-[60%]' />
          <img src={image5} alt='' className='w-[131px] h-[27.4px] opacity-[60%]' />
        </div>
      </div>
    </div>
  )
}

export default Home;