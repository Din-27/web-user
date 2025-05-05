"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const [dropdown, setDropDown] = useState(false);

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  const handleActive = () => {
    setDropDown(!dropdown);
  };

  return (
    <header
      className={`${
        isActive || dropdown ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 lg:px-8 transition-all`}
    >
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex items-center justify-between h-full">
          <a href={"/"}>
            <div>
              <Logo />
            </div>
          </a>
          <div>
            <button
              onClick={handleActive}
              data-collapse-toggle="navbar-solid-bg"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-solid-bg"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              class={`${
                dropdown
                  ? "border-b border-gray-400 absolute right-0"
                  : "hidden"
              } w-full md:block md:w-auto`}
              id="navbar-solid-bg"
            >
              <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700t"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
