import React from 'react'

const cards = [
  {
    id: 1,
    title: 'Step 1',
    desc: 'We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.',
  }, 
  {
    id: 2,
    title: 'Step 2',
    desc: "Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth code reviews we're here to set the stage for success.",
  }, 
  {
    id: 3,
    title: 'Step 3',
    desc: "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or asset will be designed, reviewed, and given your stamp of approval.",
  }, 
  {
    id: 4,
    title: 'Step 4',
    desc: "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
  }, 
]

const Products = () => {
  return (
    <div className='flex flex-col bg-[#06030E] w-full gap-16'>
      <div className='flex justify-around'>
        <div className='text-[#FFFFFF99] flex flex-col font-[700] text-[50px] leading-[51px]'>
          <span>How Our Product</span>
          <span>Works</span>
        </div>

        <div className='w-[560px] h-[112px] font-normal text-[18px] leading-[28px]'>
          <span className='text-[#FFFFFF99]'>
          With Cobalt, managing your business finances is effortless, 
          empowering, and anything but boring. Our intuitive platform brings
          clarity to your cash flow, simplifies your financial decision-making, and  
          fingertips. <span className='text-white'>Say no to spreadsheets and tools designed in the 80s.</span>
          </span>
        </div>
      </div>

      <div className='w-[1152px] h-[405.4px] flex gap-[10rem] ml-[35rem]'>
        {
          cards.map((card) => {
            return (
              <div key={card.id} className='w-[287px] flex flex-col gap-6'>
                <h1 className='text-white w-[163px] h-[43px] font-[600] text-[31px] leading-[37.5px]'>{card.title}</h1>
                <span className='text-[#FFFFFF99] w-[193px] h-[227px] font-[300] text-[16px] leading-[25.6px]'>{card.desc}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Products