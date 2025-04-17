import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

     const { products } = useContext(ShopContext);
     const [latestProducts,setLatestProducts]  = useState([]);

     useEffect (()=>{
            setLatestProducts(products.slice(0,10));
     },[])       

  return (
    <div className='my-10'>
       <div className='text-center py-8 text-3xl'>
          <Title text1={'Latest'} text2={'Collection'} />
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Our latest collection is all about bold moves and timeless vibes. From fresh fits to must-have pieces, every item is designed to elevate your everyday wardrobe. Whether you're chasing trends or setting them, this drop is made for you.
          </p>
       </div>
       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
           {
            latestProducts.map((item,index)=>(
               <ProductItem key={index} id={item._id} image={item.image} name={item.name}  price={item.price} />
            ))
           }
       </div>
    </div>
  )
}

export default LatestCollection