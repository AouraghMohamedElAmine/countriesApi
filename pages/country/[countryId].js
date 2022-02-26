import React from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import {useRouter} from 'next/router'
 
function countryId({ country }) {
if(!country[0]){
  router.push('/')
}
  const router = useRouter()
   const {
    name,
    flags,
    capital,
    currencies,
    population,
    languages,
    region,
    subregion,
    borders,
    altSpellings,
  } = country[0];
  const currency = () => {
    if(currencies){
      for (const [key, value] of Object.entries(currencies)) {
        return `  ${value.name}`;
      }
    }
    return 'no official currency '
  };

  const lang = () => {
    if(languages){
      const allLangs = [];
      for (const [key, value] of Object.entries(languages)) {
        allLangs.push(value);
      }
      return allLangs;
    }
  else return [' no official language']
  };
const getborders = ()=>{
  if(borders){
    const bordersList = borders.map(b =>{
      return   <span className="mx-1.5 dark:bg-darkBg p-1"> {b} </span> 
    })
    return bordersList
  }
 else return <span className="mx-1.5 dark:bg-darkBg p-1"> No borders countries ( island ) </span>
}
  return (
    <div className="h-screen dark:bg-darkElement bg-white">
      <Navbar />

      <div className="dark:bg-darkElement">
        <button
          onClick={() => router.push("/")}
          className="outline-md p-4 px-6 m-6 sm:m-10   bg-lightBg dark:bg-darkBg "
        >
          Back
        </button>

        <div className="flex flex-col sm:flex-row  dark:bg-darkElement  p-6 sm:p-10 ">
          <div className="  sm:w-3/6    my-2">
            <img
              src={flags.png}
              alt={name.common + "'s flag"}
              className="h-44 sm:h-72 w-full sm:w-10/12   "
            />
          </div>

          <div className=" sm:w-3/6 sm:justify-evenly flex flex-col my-7  ">
            <div className="flex flex-col sm:flex-row ">
            <div className=" mb-3 sm:mb-0 sm:pr-4">
            <ul>
              <li className="font-bold text-2xl mb-2 sm:text-3xl ">{name.common}</li>
              <li className="font-semibold ">
                Native Name :
                <span className="font-medium">
                  {altSpellings[1] || name.common}
                </span>
              </li>
              <li className="my-1.5 font-semibold">
              Population :<span className="font-medium">{population}</span>
              </li>
              <li className="my-1.5 font-semibold">
              Region : <span className="font-medium">{region}.</span>
              </li>
              <li className="my-1.5 font-semibold">
              Sub Region : <span className="font-medium">{subregion}.</span>
              </li>
              <li className="my-1.5 font-semibold">
              Capital :<span className="font-medium"> {capital}</span>
              </li>
            </ul>
          </div>
          <div className="pb-3 sm:pb-0">
            <ul>
              <li className="font-bold text-2xl mb-2 sm:text-3xl h-6   hidden sm:inline-block">  </li>
               <li className="my-1.5 font-semibold">
              Languages : <span className="font-medium">{currency()}</span>
              </li>
              <li className="my-1.5 font-semibold">
              Languages : <span className="font-medium">
                  {lang().map((l) => {
                    return l + " ";
                  })}
                </span>
              </li>
            </ul>
          </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center "> 
            <div className="my-1.5 font-semibold"> Border Countries : </div>
            <div className="font-medium"> {getborders()} </div>
             </div>

          </div>
       
        </div>
      </div>
    </div>
  );
}

export default countryId;

export async function getServerSideProps(context) {
  const { params } = context;
  const { data } = await axios.get(
    `https://restcountries.com/v3.1/alpha/${params.countryId}/`
  );

  return {
    props: {
      country: data,
    },
  };
}

 