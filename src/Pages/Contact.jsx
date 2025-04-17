import React from 'react'
import Title from '../Components/Title'
import {assets} from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'Contact'} text2={'Us'} />
          </div>
               <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
                    < img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
                    <div className='flex flex-col justify-center items-start gap-6'>
                      <p className='font-semibold text-xl text-gray-600'>Our Store</p>
                      <p className='text-gray-500'>078- Sector24,Jaipur <br /> Rajasthan, India</p>
                      <p className='text-gray-500'>Tel: +91 -9456-353-53 <br /> Email: fashionx@gmail.com</p>
                      <p className='font-semibold text-xl text-gray-600'> Careers at Store</p>
                      <p className='text-gray-500'>Learn more about us </p>

                      <button className='border border-black px-8 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>Explore Jobs</button>

                    </div>
               </div>
               <NewsLetterBox />
        </div>
    
  )
}

export default Contact