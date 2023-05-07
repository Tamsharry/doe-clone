import hasYarn from "install-peerdeps/lib/has-yarn";
import React from "react";
import { useState } from "react";
import { apple, doe, HamBars, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [mnav, setmnav] = useState(false);
  const [submenu, setsubmenu] = useState(false);
  const [submenuArray, setsubmenuArray] = useState([]);
  const [sbmenuArray, setsbmenuArray] = useState([]);

  // const handleClick = () => setsubmenu(!submenu);

  const handleToggle = () => setmnav(!mnav);

  return (
    <div>
      <nav className="w-full h-[60px] flex items-center  fixed   bg-primary shadow-lg top-0 z-20">
        <div className="w-full flex  justify-between items-center max-w-7xl mx-auto ">
          {/* mobile menu */}
          <div className="flex justify-between items-center top-[0]">
            <div className="md:hidden px-3" onClick={handleToggle} >
              {!mnav ? (
                <img
                  src={HamBars}
                  style={{ width: "20px", height: "25px" }}
                  alt=" menu"
                />
              ) : (
                <img
                  src={close}
                  style={{ width: "20px", height: "25px" }}
                  alt=" menu"
                />
              )}
            </div>
            <div>
              {" "}
              <img src={doe} style={{ width: "150px" }} />
            </div>

            <ul
              className={
                !mnav
                  ? "hidden"
                  : "absolute  top-[60px] w-full h-screen cursor-pointer  bg-white md:hidden "
              }
            >
              {navLinks.map((link) => (
                <li key={link.id} className="py-3 px-4 hover:text-[#EA4544] text-sm font-semibold">
                  {link.title}
                 
                </li>
              ))}
            </ul>
          </div>

          {/* main menu */}

          <ul className=" hidden md:flex items-center justify-between  cursor-pointer text-[14px] ">
            {navLinks.map((link) => (
              <li
                onMouseOver={() =>
                  link?.submenu?.length
                    ? setsubmenuArray(link.submenu)
                    : setsubmenuArray([])
                }
                  onMouseOut={()=>(
                    setsubmenuArray([])
                  )}
                key={link.id}
                className={"hover:bg-white py-4 px-4"}
              >
                {link.title}
              </li>
            ))}
          </ul>

          <div className="px-4">
            <img src={apple} style={{ width: "100px" }} />
          </div>
        </div>
      </nav>
       {/* dropdown menu */}
      <div className="">
        {submenuArray?.length > 0 ? (
          <ul className=" hidden  md:flex flex-row w-full h-[50px] items-center justify-center fixed top-[60px] text-sm gap-5 bg-white shadow-lg z-20 ">
            {submenuArray.map((sbmenu, i) => {
              return<li key={i} className='hover:cursor-pointer'
              onMouseOver={()=>
                sbmenu?setsbmenuArray(sbmenu)
                :setsbmenuArray([])
              }
               onMouseOut={()=>
                setsbmenuArray('')
              }
              >

                {sbmenu.title}</li>;
            })}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
