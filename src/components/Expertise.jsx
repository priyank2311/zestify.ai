import React from 'react'
import expert from '../assets/image 11.png'
import stars from '../assets/Stars Minimalistic.png'

const cards = [
  {
    id: 1, 
    image: expert,
    name: 'Arun Kumar',
    role: 'Stock Market', 
    rating: '4.4',
    imageStars: stars,
    des: 'Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it’s 2023.',
    price: '₹1,999', 
    month: '/mo',
    subscribe: 'Subcription'
  }, 
  {
    id: 1, 
    image: expert,
    name: 'Arun Kumar',
    role: 'Stock Market', 
    rating: '4.4',
    imageStars: stars,
    des: 'Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it’s 2023.',
    price: '₹1,999', 
    month: '/mo',
    subscribe: 'Subcription'
  }, 
  {
    id: 1, 
    image: expert,
    name: 'Arun Kumar',
    role: 'Stock Market', 
    rating: '4.4',
    imageStars: stars,
    des: 'Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it’s 2023.',
    price: '₹1,999', 
    month: '/mo',
    subscribe: 'Subcription'
  }, 
  {
    id: 1, 
    image: expert,
    name: 'Arun Kumar',
    role: 'Stock Market', 
    rating: '4.4',
    imageStars: stars,
    des: 'Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it’s 2023.',
    price: '₹1,999', 
    month: '/mo',
    subscribe: 'Subcription'
  },
  {
    id: 1, 
    image: expert,
    name: 'Arun Kumar',
    role: 'Stock Market', 
    rating: '4.4',
    imageStars: stars,
    des: 'Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it’s 2023.',
    price: '₹1,999', 
    month: '/mo',
    subscribe: 'Subcription'
  },
  {
    id: 1, 
    image: expert,
    name: 'Arun Kumar',
    role: 'Stock Market', 
    rating: '4.4',
    imageStars: stars, 
    des: 'Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it’s 2023.',
    price: '₹1,999', 
    month: '/mo',
    subscribe: 'Subcription'
  },
]

const Expertise = () => {
  return (
    <div className='flex flex-col bg-[#06030E] w-full p-[5rem]'>
      <div className='text-[#FFFFFF99] flex flex-col justify-center items-start pl-[15rem]'>
        <span className='font-[700] text-[50px] leading-[51px]'>Our Expertise</span>
        <span className='font-normal text-[18px] leading-[28px]'>
        Guiding Your Investments to Greatness: Our Expertise, Your Financial Advantage!
        </span>
      </div>

      <div className='w-full grid grid-cols-3 px-[10rem] p-[3rem]'>
        {
          cards.map((card) => {
            return (
              <div className='w-[384px] h-[600px] flex items-center flex-col'>
                <img src={card.image} alt='EXPERTS' />

                <div className='flex flex-col gap-8 w-[384px] h-[565px] p-5 items-center rounded-[16px]'>
                  <div className='flex flex-row w-[320px] h-[40px] justify-around'>
                  <div className='flex flex-col'>
                    <h1 className='text-white'>{card.name}</h1>
                    <span className='text-[#FFFFFF99]'>{card.role}</span>
                  </div>

                  <div className='flex flex-row w-[47px] h-[22px]'>
                    <img src={card.imageStars} alt='RATING' />
                    <span className='text-[#FFFFFF99]'>{card.rating}</span>
                  </div>
                  </div>

                  <div className='w-[319px] h-[49.6px] flex justify-evenly items-center'>
                    <div className='flex flex-col'>
                      <span className='text-[#FFFFFF99]'>Experience</span>
                      <span className='text-white text-center'>7+</span>
                    </div>
                    <div className='bg-white w-0.5 h-8'></div>
                    <div className='flex flex-col'>
                      <span className='text-[#FFFFFF99] text-[12.9px] font-normal leading-[15.6px]'>Followers</span>
                      <span className='text-white text-center text-[15.1px] font-[600] leading-[18.2px]'>3.1k</span>
                    </div>
                  </div>

                  <div className='w-[235px] h-[72px] flex justify-center'>
                    <span className='text-[#FFFFFF99] text-[13.9px] font-normal leading-[24px] w-[218px] h-[24px]'>{card.des}</span>
                  </div>

                  <div className='flex flex-row w-[232px] h-[47px] p-2 gap-8'>
                    <div className='w-[118px] h-[47px]'>
                      <span className='w-[97px] h-[47px] font-[700] text-[31px] leading-[46.5px] text-white font-serif'>{card.price}</span>
                      <span className='text-white'>{card.month}</span>
                    </div>
                    <button className='w-[107px] h-[40px] rounded-[5px] bg-white font-medium text-[16px] leading-[28px] p-2 flex items-center'>
                      {card.subscribe}
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Expertise