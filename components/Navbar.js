import {useRouter} from 'next/router'
import React from "react";
import DarkModeSwitch from "./DarkModeSwitch";
function Navbar() {
  const router = useRouter()
  return (
    <nav>
      <ul className="flex justify-between h-20 items-center px-6 shadow-xl dark:bg-darkBg bg-lightBg font-semibold   sm:px-10">
          <li className="font-bold hover:cursor-pointer" onClick={()=> router.push('/')}>    Where in the world  !   </li>
          <li className="hover:cursor-pointer">   <DarkModeSwitch/>  </li>
      </ul>
    </nav>
  );
}

export default Navbar;
