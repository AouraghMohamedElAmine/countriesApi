import React from "react";
import Image from "next/image";
function CountryPannel({ name, population, region, capital, flag }) {
  return (
    <div className="flex flex-col my-7 sm:my-0 object-fill bg-white border overflow-hidden shadow-md   dark:border-darkBg  rounded-lg ">
      <div className="dark:bg-darkBg">
        <img src={flag} alt={name} height="" className="h-48 w-full  " />
      </div>
      <div className="p-5 dark:bg-darkElement">
        <ul>
          <li className="font-bold text-2xl py-3">{name}</li>
          <li> <span className="font-semibold">Population :</span>  {population}</li>
          <li><span className="font-semibold">Region :</span> {region}.</li>
          <li><span className="font-semibold">Capital :</span> {capital}.</li>
        </ul>
      </div>
    </div>
  );
}

export default CountryPannel;
