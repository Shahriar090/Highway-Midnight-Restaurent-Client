import { BsFacebook, BsInstagram, BsPinterest,  } from "react-icons/bs";
import {  MdRestaurantMenu } from "react-icons/md";
import {  } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="bg-white rounded-md shadow-md flex justify-between items-center p-5 md:hidden lg:hidden">
        <div className="navbar-start nav-logo">
          <picture>
            <img
              src="/public/restaurant-logo.com.webp"
              loading="lazy"
              alt=""
              className="w-20"
            />
          </picture>
        </div>
        <div className="navbar-center social-icons w-20">
          <div className="icons-containe">
            <ul className="flex justify-around">
              <li>
                <BsFacebook></BsFacebook>
              </li>
              <li>
                <BsInstagram></BsInstagram>
              </li>
              <li>
                <BsPinterest></BsPinterest>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-end drawer">
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className="drawer-button btn btn-outline" title="Menu"
              >
                <MdRestaurantMenu></MdRestaurantMenu>
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
                {/* Sidebar content here */}
               <li><Link>Home</Link></li>
               <li><Link>About</Link></li>
               <li><Link>Our Menus</Link></li>
               <li><Link>Reservation</Link></li>
               <li><Link>Contact</Link></li>

               <div className="reservation-button text-center mt-8">
                <button className="btn btn-outline">Reservation</button>
              </div>
              </ul>
              
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-for-large-device">
        {/* TODO : Navbar for large device */}
      </div>
    </nav>
  );
};

export default Navbar;
