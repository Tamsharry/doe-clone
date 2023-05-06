import React from 'react'
import { applelogo2 ,doe_in} from "../assets";
import { MdKeyboardArrowRight } from 'react-icons/md'


const About = () => {
  return (
    <div className=' flex w-full  h-[560px] mx-auto flex-wrap   px-4 py-4 bg-white'>
     
     <div className="box-content h-full lg:w-1/2 top-[5]  bg-about bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center relative">
     
      <h1 className=' text-center  text-xl px- text-primary font-poppins'> About Doe Resources</h1>
     <p className=' text-center font-semibold text-lg px-4 text-primary font-poppins'> DOe Resources is an Apple Authorized Reseller which is a .
    <br/> dedicated hub for Apple products and accessories</p>

    <div className='py-3 flex'> 

<div className='flex items-center cursor-pointer text-xl'> 
<p className='flex font-bold text-blue-700'>Learn More</p>
<div className='top-5 ml-2'><MdKeyboardArrowRight size={32} color={'blue'}/></div>  
</div>
  
</div>
     
    </div>

    <div className="box-content h-full lg:w-1/2 top-[5]  bg-blue-600 flex flex-col items-center justify-center relative">
     <div className='flex'> <img src={applelogo2}/> 
         <div className='py-4 text-primary font-bold text- text-xl '> <p> Support</p></div>
     </div>
    <p className=' text-center font-semibold text-lg px-4 text-primary font-poppins'> Explore everything you can do on Mac, iPad or iPhone.
    <br/> Get helpful tips and informations here.</p>

    <div className='py-3 flex'> 

    <div className='flex items-center cursor-pointer text-xl'> 
    <p className='flex text-primary'>Learn More</p>
    <div className='top-5 ml-2'><MdKeyboardArrowRight size={32} color={'white'}/></div>  
  </div>
      
    </div>

    </div>
    
    </div>
  )
}

export default About
