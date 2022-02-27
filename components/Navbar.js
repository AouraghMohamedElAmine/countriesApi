import {useRouter} from 'next/router'
import React from "react";
import DarkModeSwitch from "./DarkModeSwitch";
function Navbar() {
  const router = useRouter()
  return (
    <nav>
      <ul className="flex justify-between h-20 items-center   shadow-xl dark:bg-darkBg bg-lightBg font-semibold   lg:px-20 md:px-14 px-8">
          <li className="font-bold hover:cursor-pointer" onClick={()=> router.push('/')}>    Where in the world  !   </li>
          <li className="hover:cursor-pointer">   <DarkModeSwitch/>  </li>
      </ul>
    </nav>
  );
}

export default Navbar;
