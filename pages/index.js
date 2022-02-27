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
import SearchBox from "../components/SearchBox";
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
    <div className="dark:text-dark dark:bg-darkBg bg-lightElement min-h-screen pb-10 ">
      <Navbar />
      <div className="flex flex-col sm:flex-row sm:justify-between lg:mx-20 md:mx-14 mx-8 my-8 ">
        <div className="sm:w-4/6 "><SearchBox/></div>
        <div className="sm:w-2/6    "><Dropdown/></div>
      </div>
      <div className="lg:mx-20 md:mx-14 mx-8 sm:grid  sm:grid-cols-2   lg:grid-cols-3 xl:grid-cols-4    gap-10 ">
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
