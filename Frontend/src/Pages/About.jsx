import React from 'react'
import Title from '../Components/Title'
import {assets} from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
  <Title  text1={'About'} text2={'Us'}/>
      </div>
<div className='my-10 flex flex-col md:flex-row gap-16'>
  <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
  <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, corporis explicabo quae exercitationem rem atque ad eum praesentium harum natus?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit reiciendis, et dolorem quia nulla veritatis.</p>
            <b className='text-gray-800' >Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio error veritatis maiores, quaerat saepe perspiciatis aliquam maxime fugiat qui veniam!</p>
  </div>
  </div>  
  <div className='text-2xl py-4'>
    <Title text1={'Why'} text2={'Choose Us'} />

  </div>
  <div className='flex flex-col md:flex-row text-sm mb-20'>
    <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assurance:</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sunt autem ipsam amet accusamus labore distinctio tenetur dolorem quos architecto.</p>
    </div>
    <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sunt autem ipsam amet accusamus labore distinctio tenetur dolorem quos architecto.</p>
    </div>
    <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service:</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sunt autem ipsam amet accusamus labore distinctio tenetur dolorem quos architecto.</p>
    </div>

  </div>

  <NewsLetterBox />
    </div>
  )
}

export default About