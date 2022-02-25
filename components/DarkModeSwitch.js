import React from "react";
import { useTheme } from "next-themes";

function DarkModeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <a
      aria-label="Toggle Dark Mode"
      className="  h-12 w-12 order-2 md:order-3"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <i className="fa-solid fa-moon mx-1  "></i>
      dark mode
    </a>
  );
}

export default DarkModeSwitch;
