import React from "react";
import { BsFacebook, BsInstagram, BsPinterest } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavLarge = () => {
  return (
    <nav>
      <div className="navbar fixed z-10 opacity-80 text-white bg-black shadow-md rounded-md px-32">
        <div className="navbar-start">
         
         <div className="nav-logo">
            <img src="/public/website-logo.png" alt="" loading="lazy" className="w-28" />
         </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-lg uppercase">
            <li>
             <Link>Home</Link>
            </li>
            <li>
             <Link>About</Link>
            </li>
            <li>
             <Link>Our Menus</Link>
            </li>
            <li>
             <Link>Reservation</Link>
            </li>
            <li>
             <Link>Contact</Link>
            </li>
            
            
          </ul>
        </div>
        <div className="navbar-end">
          <div className="social">
            <div className="icons flex gap-5">
                <Link><h1 className="text-xl"><BsFacebook></BsFacebook></h1></Link>
                <Link><h1 className="text-xl"><BsInstagram></BsInstagram></h1></Link>
                <Link><h1 className="text-xl"><BsPinterest></BsPinterest></h1></Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavLarge;
