import React from "react";
import bghead from "../assets/bg-headphones.jpg";
import bgshoe from "../assets/bg-shoes.jpg";
import bgpromo from "../assets/bgpromo.jpg";

const Promo = () => {
  return (
    <div
      className="w-full"
      style={{ backgroundImage: `url(${bgpromo})`}}
    >
      <div className="w-[1200px] p-5 m-auto flex gap-2 ">
        <div className="shadow-lg rounded-md overflow-hidden">
          <img src={bghead} alt="headphone" />
        </div>
        <div className="shadow-lg rounded-md overflow-hidden">
          <img src={bgshoe} alt="shoes" />
        </div>
      </div>
    </div>
  );
};

export default Promo;
