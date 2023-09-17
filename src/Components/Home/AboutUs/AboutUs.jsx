import React from "react";
import aboutUsImg from "../../../assets/images/about-us-img.jpg"
import dividerImg from "../../../assets/images/divider.png"

const AboutUs = () => {
  return (
    <div>
        <div className="container flex flex-col md:flex-row lg:flex-row items-center justify-center gap-12 mt-3 p-12 bg-yellow-400">
            <div className="img w-1/2">
                <picture>
                    <img src={aboutUsImg} alt="Loading" loading="lazy" className="w-full h-auto rounded-lg" />
                </picture>
            </div>
            <div className="text w-1/2 text-black">
                <h3 className="uppercase text-2xl font-semibold font-serif">YOUR SPECIAL OCCASION DESTINATION</h3>
                <h1 className="text-5xl font-bold font-serif uppercase mt-2">The Wilma is a premium taste that yearns to be savored, ground beef between your teeth</h1>
                <picture>
                    <img src={dividerImg} alt="" loading="lazy" className="w-50% h-auto" />
                </picture>
            </div>
        </div>
    </div>
  );
};

export default AboutUs;
