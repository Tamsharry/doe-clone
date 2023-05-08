import React from 'react'

import { featuredProducts } from '../constants'

const Footer = () => {
  return (
 <>
 <div className='w-full flex justify-center items-center mt-6 bg-[#FFFFFF]'>
   <h1 className='text-3xl font-black'> FEATURED PRODUCT</h1>
 </div>

 <div className='flex justify-between px-6 mt-4 flex-wrap w-full'>
  {featuredProducts.map((product,i)=>{
    return(
      <div key={i} className='flex-col'><img src={product.icon} className='w-[200px] h-[200px]  transition duration-300 ease-in-out hover:scale-110'/> 
       <h2 className='text-center font-black mt-3'>{product.products}</h2>
      </div>
    )
  })}


 </div>
 
 
 </>


   
  )
}

export default Footer
