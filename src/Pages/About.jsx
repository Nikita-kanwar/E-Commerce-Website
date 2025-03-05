import React from 'react'
import Title from '../Components/Title'
import {assets} from '../assets/assets'

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
  </div>
  </div>  
    </div>
  )
}

export default About