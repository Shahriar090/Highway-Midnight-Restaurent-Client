import { BsFacebook, BsInstagram, BsPinterest,  } from "react-icons/bs";
import {  MdRestaurantMenu } from "react-icons/md";
import {  } from "react-icons/ri";
import { Link } from "react-router-dom";
import NavLarge from "./NavLarge";

const Navbar = () => {
  return (
    <nav>
      <div className="bg-white rounded-md shadow-md flex justify-between items-center p-5 md:hidden lg:hidden">
        {/* navbar logo */}
        <div className="navbar-start nav-logo">
          <picture>
            <img
              src="/public/restaurant-logo.com.webp"
              loading="lazy"
              alt=""
              className="w-24"
            />
          </picture>
        </div>
        {/* navbar center items */}
        <div className="navbar-center social-icons w-20">
          <div className="icons-container">
            <ul className="flex justify-around">
              <li className="text-lg">
               <Link> <BsFacebook></BsFacebook></Link>
              </li>
              <li className="text-lg">
                <Link><BsInstagram></BsInstagram></Link>
              </li>
              <li className="text-lg">
                <Link><BsPinterest></BsPinterest></Link>
              </li>
            </ul>
          </div>
        </div>
            {/* navbar end item */}
        <div className="navbar-end drawer">
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className="drawer-button btn btn-outline btn-sm rounded-full" title="Menu"
              >
              <h1 className="text-xl"><MdRestaurantMenu></MdRestaurantMenu></h1>
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 min-h-full bg-[rgb(11,21,23)] text-white uppercase text-xl font-serif">
                {/* Sidebar content here */}
               <li><Link>Home</Link></li>
               <li><Link>About</Link></li>
               <li><Link>Our Menus</Link></li>
               <li><Link>Reservation</Link></li>
               <li><Link>Contact</Link></li>

               <div className="reservation-button text-center mt-8">
                <button className="btn btn-outline text-white">Reservation</button>
              </div>
              </ul>
              
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-for-large-device hidden md:block lg:block">
        {/* TODO : Navbar for large device */}
        <NavLarge></NavLarge>
      </div>
    </nav>
  );
};

export default Navbar;
