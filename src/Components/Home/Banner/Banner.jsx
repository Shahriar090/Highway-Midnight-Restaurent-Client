import React from "react";
import bannerImg from "../../../assets/images/hero-banner.png";


const Banner = () => {
  return (
    <>
      <div className="hero min-h-screen relative md:pt-28">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-25"></div>
        <div
          className="hero min-h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          {/* <div className="hero-overlay bg-opacity-40"></div> */}
          {/* <div className="hero-content text-center text-white font-serif">
    <div className="max-w-md">
      <h4 className="mb-5 text-2xl uppercase font-bold">More Flavour For Less</h4>
      <h1 className="mb-5 text-6xl uppercase font-bold">Taste The Difference</h1>
     <p>When the going gets tough, the tough get grilling. Bringing heat to your meat. No one can compete with our meat</p>
      <Link><button className="btn btn-outline text-white border-0 border-x-2 mt-5 hover:bg-black">Our Menus</button></Link>
    </div>
  </div> */}
        </div>
      </div>
    </>
  );
};

export default Banner;
