import hasYarn from 'install-peerdeps/lib/has-yarn'
import React from 'react'
import { useState } from 'react'
import { apple,doe,HamBars,close} from '../assets'
import { navLinks } from '../constants' 

const Navbar = () => {
  
  const [mnav , setmnav]= useState(false)
  const [submenu, setsubmenu]= useState(false)
  const [submenuArray, setsubmenuArray]= useState([])

  const handleClick = ()=> setsubmenu(!submenu)

  const handleToggle = ()=> setmnav(!mnav)

  return (
    <div >
      <nav className= "w-full h-[60px] flex items-center  fixed   bg-primary shadow-lg top-0">
         <div className='w-full flex  justify-between items-center max-w-7xl mx-auto '>

          
         {/* mobile menu */}
          <div className='flex justify-between items-center  px-6'>
          <div className='md:hidden ' onClick={handleToggle}> 

          {!mnav ? <img src={HamBars} style={{width :"20px", height:'20px'}} alt=" menu" />
          :<img src={close} style={{width :"20px", height:'20px'}} alt=" menu" />
        }</div>
          <div className='px-2'> <img src={doe}  style={{width:'150px'}}/></div>

          <ul className={!mnav ? 'hidden' :'absolute top-20 px-2 w-full h-screen cursor-pointer  bg-white md:hidden '}>
                 {navLinks.map((link)=>(
                  <li 
                    key={link.id}
                    className='py-2 hover:text-[#EA4544]'
                  >
                    {link.title}
                    {console.log(link.submenu)}
                  </li>
                 ))}
             

          </ul>
          </div>
              {/* main menu */}
           
            <ul className=' hidden md:flex items-center justify-between  cursor-pointer text-[14px] '>
                {navLinks.map((link)=>(
                  <li 
                  onClick={()=>link?.submenu?.length ? setsubmenuArray(link.submenu) : setsubmenuArray([])}
                  key={link.id}
                  className={'hover:bg-white py-4 px-4'}
                  >
                    {link.title}
                  </li>

                ))} 
            </ul>
         

        
         <div className='px-4'>
         <img src={apple} style={{width:"100px"}}/>
         </div>
         
        
         </div>
         
        
      </nav>
      <div  >
    {submenuArray?.length >0  ?
      <ul  className=' flex flex-row w-full h-[70px] items-center justify-center fixed top-[50px] text-xs gap-5 bg-inherit shadow-lg  '>
                 {
                   submenuArray.map((sbmenu,i)=>{
                    console.log({sbmenu,i})
                     return(
                       <li key={i}>{sbmenu.title}</li> 
                    )
                  })
                 }
                 
      </ul>
      :null
      }
       </div>

      </div>
    
  )
}

export default Navbar
