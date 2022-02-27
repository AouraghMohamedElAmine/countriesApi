import React from "react";
import { GetSearchedCountries } from "../redux/actionsCreators";
import { useDispatch  } from "react-redux";
function SearchBox() {
    const dispatch = useDispatch();
  return (
    <input
      type="text"
      className=" sm:w-3/6 w-full mb-8 sm:mb-0 shadow-md outline-none h-14 px-4  dark:bg-darkElement dark:border-darkElement  dark:text-white text-gray-800 border rounded-md "
      placeholder="search for a country "
      onChange={(e) =>  dispatch(GetSearchedCountries(e.target.value)) }
    />
  );
}

export default SearchBox;
