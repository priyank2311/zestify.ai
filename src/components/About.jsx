import React from 'react'
import aboutImg from '../assets/Image (3).png'
import strong from '../assets/Strong.png'
import arrowIcon from '../assets/Icon.png'
import features from '../assets/Features.png'
import playBtn from '../assets/Subtract.png'
import user from '../assets/user.png'
import magnifier from '../assets/Minimalistic Magnifer.png'
import block from '../assets/Quit Full Screen Square.png'
import response from '../assets/Group 512884.png'

const cards = [
  {
    id: 1, 
    image: user,
    title: 'Users',
    detail: 'Stay on top of your growing company by making it easy to search, and get to know, your teammates.'
  },
  {
    id: 2, 
    image: magnifier,
    title: 'Research Analysis',
    detail: 'Keep your visuals consistently on-brand with easily accessible colors, icons, screenshots and more, for the whole team.'
  },
  {
    id: 3, 
    image: block,
    title: 'A.P',
    detail: 'Set up template bug report forms to give timely and actionable feedback on features and projects in development.'
  },
]

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-[#06030E] w-full p-[5rem]'>
      <div className='flex flex-col text-center p-[2rem]'>
        <span className='text-[#71717A] font-[700] text-[50px] leading-[51px] h-[103px]'>
          About Our Product <br /> & Features.
        </span>
        <span className='text-[#FFFFFF99] font-normal text-[18px] leading-[28px] w-[505px] h-[56px]'>
          Empower your teams to build better processes, for a better workplace.
        </span>
      </div>

      <div className='flex flex-row justify-center w-full p-[2rem]'>
        <div className='w-[596px] h-[320px]'>
          <img src={aboutImg} alt='IMAGE' />
        </div>

        <div className='flex flex-col gap-5'>
          <img src={strong} alt='IMAGE' className='w-[506px] h-[24px]' />
          <span className='w-[580px] h-[72px] font-medium text-[30px] leading-[36px] text-white'>
          Lorem ipsum dolor sit amet <br /> consectetur. 
          </span>
          <span className='text-[#FFFFFF99] w-[504px] h-[72px] text-[17px] font-medium leading-[24px]'>
          With great teams come great processes. Using our developer API, 
          create and publish extensions to your organization’s Private
          Extension Store for your team to install. 
          </span>
          <span className='text-[#FFFFFF99] w-[473px] h-[48px] text-[17px] font-medium leading-[24px]'>
          Build extensions to quickly access company brand assets, log 
          feedback, book time off, or search your employee index.
          </span>

          <div className='flex w-[506px] h-[16px] gap-2'>
            <button className='text-white font-medium text-[13.9px] leading-[16px]'>
            Explore More
            </button>
            <button>
            <img src={arrowIcon} alt='ArrowIcon' />
            </button>
          </div>
        </div>
      </div>

      <div className='w-[1198px] h-[640px] bg-[#FFFFFF0D] flex items-center justify-center relative'>
        <img src={features} alt='FEATURE' />
        <button className='flex items-center justify-center absolute'>
        <img src={playBtn} alt='PLAY' className='w-[100px] h-[100px]' />
        </button>
      </div>

      <div className='w-[1140px] h-[205px] flex gap-[3rem] p-[2rem]'>
        {cards.map((card) => (
          <div
            key={card.id}
            className={`flex p-6 rounded-xl flex-col w-[364px] h-[200px] gap-4 ${
              card.id === 1 ? 'bg-[#FFFFFF0D]' : 'bg-[#fffff]' 
            }`}
          >
            <img src={card.image} alt='' className='w-[20px] h-[20px]' />
            <span className='text-white font-medium text-[16px] leading-[24px]'>{card.title}</span>
            <span className='text-[#FFFFFF99] font-medium text-[13.9px] leading-[20px] w-[300px] h-[60px]'>{card.detail}</span>
          </div>
        ))}
      </div>

      <div className='w-[1192px] h-[500px] p-[8rem]'>
        <img src={response} alt='' />
      </div>
    </div>
  )
}

export default About