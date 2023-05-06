import React from 'react'
import { applelogo2 ,doe_in} from "../assets";
import { MdKeyboardArrowRight } from 'react-icons/md'


const About = () => {
  const newLocal = "box-content h-full lg:w-1/2 top-[5] md:ml-2 bg-[#0F5EAB] flex flex-col items-center justify-center";
  return (
    <div className='flex flex-col md:flex-row w-full h-[560px] mx-auto px-4 py-4 bg-white gap-4 md:gap-4 md:justify-center'>
       
     <div className="box-content h-full lg:w-1/2 top-[5]  bg-about bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center">
     
      <h1 className='text-center text-xl font-extrabold text-black'> About Doe Resources</h1>
     <p className='text-center text-base font-semibold px-4 text-black '> Doe Resources is an Apple Authorized Reseller which is a.
    <br/> dedicated hub for Apple products and accessories</p>

    <div className='py-3 flex'> 

<div className='flex items-center cursor-pointer text-xl'> 
<h1 className='flex text-primary lg:text-xl text-[#0F5EAB]'>Learn More</h1>
<div className='top-5 ml-2'><MdKeyboardArrowRight size={32} color={'#0F5EAB'}/></div>  
</div>
  
</div>
     
    </div>

    <div className={newLocal}>
     <div className='flex'> <img src={applelogo2}/> 
         <div className='py-4 font-bold md:text-xl lg:text-2xl text-white'> <h1> Support</h1></div>
     </div>
    <p className='text-center text-base  px-4 text-primary '> Explore everything you can do on Mac, iPad or iPhone.
    <br/> Get helpful tips and informations here.</p>

    <div className='py-3 flex'> 

    <div className='flex items-center cursor-pointer '> 
    <p className='flex text-primary lg:text-xl'>Learn More</p>
    <div className='top-5 ml-2'><MdKeyboardArrowRight size={32} color={'white'}/></div>  
  </div>
      
    </div>

    </div>
    
    </div>
  )
}

export default About
