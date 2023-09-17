import React from "react";
import bannerImg from "../../../assets/images/new-banner.avif";

const Banner = () => {
  return (
    <div className="hero min-h-screen md:h-[500px] lg:h-[600px] xl:h-[700px] relative md:pt-28">
        <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent opacity-25"></div>
     <div className="hero min-h-screen bg-cover bg-center" style={{backgroundImage: `url(${bannerImg})`}}>
  {/* <div className="hero-overlay bg-opacity-40"></div> */}
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;
