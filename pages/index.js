import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import CountryPannel from "../components/CountryPannel";
import axios from "axios";
import Link from "next/link";
import Dropdown from "../components/Dropdown";
import { getAllCountries, GetFiltredCountries } from "../redux/actionsCreators";
import {useDispatch ,useSelector} from "react-redux"
export default function Home() {
  const countries =  useSelector(state=>state.filtredCountries)
  const allCountries =  useSelector(state=>state.countries)
  const filter =  useSelector(state=>state.filter)
  
const dispatch = useDispatch()
  useEffect(() => { 
    if(filter == 'all'){
      dispatch(getAllCountries())
    }
    else{
      dispatch(GetFiltredCountries(filter))
    }
  }, [filter]);
let data ;
  return (
    <div className="dark:text-dark dark:bg-darkBg bg-lightElement ">
      <Navbar />
      <div className="flex flex-col sm:flex-row sm:justify-between mx-8 my-8 ">
        <div className="sm:w-4/6 "><input type='text'  className=" sm:w-3/6 w-full mb-8 sm:mb-0 shadow-md outline-none h-14 px-4  dark:bg-darkElement dark:border-darkElement  dark:text-white text-gray-800 border rounded-md " placeholder="search for a country " onChange={(e)=>e.target.value} /></div>
        <div className="sm:w-2/6    "><Dropdown/></div>
      </div>
      <div className="mx-8 sm:grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4    gap-10 ">
         {   filter == 'all' ? 
          allCountries.map((c) => {
              return (
                <div className="   ">
                  <Link href={`/country/${c.alpha2Code}`}>
                    <a>
                      <CountryPannel
                        key={c.alpha2Code}
                        name={c.name}
                        population={c.population}
                        region={c.region}
                        capital={c.capital}
                        flag={c.flag}
                      />
                    </a>
                  </Link>
                </div>
              );
            })
         :
       countries.map((c) => {
              return (
                <div className="   ">
                  <Link href={`/country/${c.alpha2Code}`}>
                    <a>
                      <CountryPannel
                        key={c.alpha2Code}
                        name={c.name}
                        population={c.population}
                        region={c.region}
                        capital={c.capital}
                        flag={c.flag}
                      />
                    </a>
                  </Link>
                </div>
              );
            })
        }
      </div>
    </div>
  );
}
