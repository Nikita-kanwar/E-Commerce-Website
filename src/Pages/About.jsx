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
            <p>We’re more than just a clothing brand—we’re a movement built around self-expression, confidence, and everyday style. Our mission is to create pieces that not only look good but feel right, blending comfort, quality, and design in every stitch. Whether you're dressing up or keeping it casual, our collections are made to move with you, inspire you, and reflect who you are. From fresh drops to timeless staples, we’re here to help you wear your vibe—boldly and authentically.</p>
            <b className='text-gray-800' >Our Mission</b>
            <p>Our mission is to empower individuality through style. We believe clothing is more than just fabric—it’s a way to express who you are, every single day. That’s why we create versatile, high-quality pieces that blend comfort, confidence, and creativity. We’re here to inspire bold choices, celebrate self-expression, and redefine what it means to dress with purpose.</p>
  </div>
  </div>  
  <div className='text-2xl py-4'>
    <Title text1={'Why'} text2={'Choose Us'} />

  </div>
  <div className='flex flex-col md:flex-row text-sm mb-20'>
    <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assurance:</b>
              <p className='text-gray-600'>At FashionX, quality is at the heart of everything we do. Each piece is carefully crafted using premium materials and undergoes strict testing to ensure durability, comfort, and the perfect fit. We are committed to delivering products that not only elevate your style but stand the test of time, so you can wear FashionX with confidence, season after season.</p>
    </div>
    <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p className='text-gray-600'>At FashionX, we believe fashion should be easy, accessible, and hassle-free. From browsing our user-friendly website to fast, reliable shipping, we’ve designed every step of your shopping experience to be convenient and enjoyable. Whether you’re shopping from home or on the go, we make it simple to find your perfect look, all while providing exceptional customer service along the way.</p>
    </div>
    <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service:</b>
              <p className='text-gray-600'>At FashionX, exceptional customer service is at the core of our brand. We’re dedicated to ensuring your experience is as smooth and enjoyable as possible, from your first click to your final purchase. Our friendly, knowledgeable team is always here to help with any questions, concerns, or styling advice—making sure you feel valued and supported every step of the way. Your satisfaction is our priority, and we strive to go above and beyond to exceed your expectations.
</p>
    </div>

  </div>

  <NewsLetterBox />
    </div>
  )
}

export default About