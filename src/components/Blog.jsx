import React from 'react'
import img1 from '../assets/Div [relative] (Mask Group).png'
import img2 from '../assets/Div [relative] (Mask Group) (1).png'
import img3 from '../assets/Div [mb-4].png'
import img4 from '../assets/grp1.png'
import img5 from '../assets/Div [relative].png'

const Blog = () => {
  return (
    <div className='w-full bg-[#06030E] p-[8rem] flex flex-col gap-[4rem]'>
      <div className='flex justify-around items-center'>
        <span className='h-[52px] text-[#FFFFFF99] font-[700] text-[50px] leading-[51.3px]'>Our Blogs</span>
        <span className='w-[560px] h-[112px] font-normal text-[17.9px] leading-[28px] text-[#FFFFFF99]'>
        With Cobalt, managing your business finances is effortless, 
        empowering, and anything but boring. Our intuitive platform brings
        clarity to your cash flow, simplifies your financial decision-making, and  
        fingertips. <span className='text-white'>Say no to spreadsheets and tools designed in the 80s.</span>
        </span>
      </div>

      <div className='flex flex-col h-[992px]'>
        <div className='flex flex-row flex-wrap justify-evenly items-center'>
          <div className='w-[384px] h-[480px] flex flex-col gap-5'>
            <img src={img1} alt='' className='w-[384px] h-[326px]' />
            <div className='w-[384px] h-[138px] flex gap-4 flex-col'>
            <h2 className='text-white font-medium text-[18px] leading-[18px]'>Lorem Ipsum dolor simple</h2>
            <span className='text-[#FFFFFF99] font-normal text-[13.9px] leading-[24px]'>
             All your data and finances in one place to provide quick answers and make decisions instantly.
            </span>
            </div>
          </div>

          <div className='w-[384px] h-[480px] flex flex-col gap-5'>
            <img src={img2} alt='' className='w-[384px] h-[326px]' />
            <div className='w-[384px] h-[138px] flex gap-4 flex-col'>
            <h2 className='text-white font-medium text-[18px] leading-[18px]'>Lorem Ipsum dolor</h2>
            <span className='text-[#FFFFFF99] font-normal text-[13.9px] leading-[24px]'>
            Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it’s 2023.
            </span>
            </div>
          </div>

          <div className='w-[384px] h-[480px] flex flex-col gap-5'>
            <img src={img3} alt='' className='w-[384px] h-[326px]' />
            <div className='w-[384px] h-[138px] flex gap-4 flex-col'>
            <h2 className='text-white font-medium text-[18px] leading-[18px]'>Lorem Ipsum dolor simple</h2>
            <span className='text-[#FFFFFF99] font-normal text-[13.9px] leading-[24px]'>
            Choose the alerts you need and receive them via email, mobile or Slack. Review and take action in one click.
            </span>
            </div>
          </div>

          <div className='w-[696x] h-[480px] flex flex-col justify-center gap-5'>
            <img src={img4} alt='' className='w-[696px] h-[288px]' />
            <div className='w-[696px] h-[114] flex gap-4 flex-col'>
            <h2 className='text-white font-medium text-[18px] leading-[18px]'>Lorem Ipsum dolor</h2>
            <span className='text-[#FFFFFF99] font-normal text-[13.9px] leading-[24px]'>
            Bring your data with our built-in integrations for accounting, revenue tools and banking.
            </span>
            </div>
          </div>

          <div className='w-[488px] h-[480px] flex flex-col gap-5'>
            <img src={img5} alt='' className='w-[488px] h-[366px]' />
            <div className='w-[488px] h-[114] flex gap-4 flex-col'>
            <h2 className='text-white font-medium text-[18px] leading-[18px]'>Lorem Ipsum dolor simple</h2>
            <span className='text-[#FFFFFF99] font-normal text-[13.9px] leading-[24px]'>
            Lightning fast. Shortcuts for everything. Command+K on Mac, Ctrl+K on Windows. Dark mode.
            </span> 
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
      <button className='bg-white w-[147px] h-[40px] font-medium text-[14px] leading-[16px] rounded-[8px]'>Explore More</button>
      </div>
    </div>
  )
}

export default Blog