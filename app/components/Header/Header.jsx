"use client";
import { useState } from "react";
import Accounts from "./Accounts";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Menu from "./Menu";
import styles from "./Header.module.css";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="absolute top-7 w-full z-10 px-3 md:px-0">
      <div className="container mx-auto">
        <div
          className={`${styles.header} flex justify-start items-center rounded-xl relative`}
        >
          <Logo demo={true} />

          <div className="relative ml-5 pr-2">
            <button
              onClick={toggleDropdown}
              className="relative px-4 py-2 bg-blue-500 text-white rounded-md flex items-center"
            >
              Prop Firms{" "}
              <svg
              className="ml-2"
                fill="#fff"
                width="20px"
                height="20px"
                viewBox="0 0 32 32"
                version="1.1"
              >
                <path d="M11.125 16.313l7.688-7.688 3.594 3.719-11.094 11.063-11.313-11.313 3.5-3.531z"></path>
              </svg>
            </button>
            {isDropdownOpen && <Menu />}
          </div>
        </div>
      </div>
    </header>
  );
}
