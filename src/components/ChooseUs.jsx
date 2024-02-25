import React from 'react'
import img1 from '../assets/Image (4).png'
import img2 from '../assets/Image (5).png'
import img3 from '../assets/Image (6).png'
import img4 from '../assets/Rectangle 7584.png'

const cards = [
  {
    id: 1, 
    image: img1,
    title: 'Lorem Ipsum Dolor',
    detail: 'Ask anything, anytime, anywhere. Stuck while programming? Need some copy? Or just have a question - Ask AI.'
  },
  {
    id: 2, 
    image: img2,
    title: 'Lorem Ipsum Dolor',
    detail: 'Keep everything safe and updated across your Macs. Perfect to switch between personal and work setup.'
  },
  {
    id: 3, 
    image: img3,
    title: 'Lorem Ipsum Dolor',
    detail: 'Make Raycast your own with gorgeous pre-made themes or design your own and share it with the community.'
  },
]

const ChooseUs = () => {
  return (
    <div className='flex flex-col items-center w-full bg-[#06030E] justify-center p-[5rem] gap-[4rem]'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <span className='font-[700] text-[50px] leading-[51px] text-[#71717A]'>Why Choose Us</span>
        <span className='w-[794px] h-[56px] font-normal text-[19.8px] leading-[28px] text-[#FFFFFF99] text-center'>
        Turn Pro to harness the power of AI, make Raycast your own with custom themes, 
        keep your Macs in sync and more.
        </span>
      </div>

      <div className='w-[1076px] h-[380px] flex justify-between'>
      {cards.map((card) => (
          <div
            key={card.id}
            className='flex p-6 flex-col w-[337px] h-[380px] gap-4'
          >
            <img src={card.image} alt='' className='w-[289px] h-[151px]' />
            <span className='text-white font-[600] text-[19.8px] leading-[27px]'>{card.title}</span>
            <span className='text-[#71717A] font-normal text-[16px] leading-[24px] w-[238px] h-[96px]'>{card.detail}</span>
          </div>
        ))}
      </div>

      <div className='w-[1207px] h-[400px]'>
        <img src={img4} alt='' />
      </div>
    </div>
  )
}

export default ChooseUs