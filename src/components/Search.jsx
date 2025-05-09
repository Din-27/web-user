import React from "react";
import { useState } from "react";

export default function Search() {
  const [dropdown, setDropDown] = useState(false);

  return (
    <form>
      <div class="flex">
        <label
          for="search-dropdown"
          class="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Your Email
        </label>
        <button
          onClick={() => setDropDown(!dropdown)}
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          class="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300"
          type="button"
        >
          Categories
          <svg
            class="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {dropdown && (
          <div
            id="dropdown"
            class="absolute mt-11 border border-gray-200 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44"
          >
            <ul
              class="py-2 text-sm text-gray-700"
              aria-labelledby="dropdown-button"
            >
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                  Shopping
                </a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                  Images
                </a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                  News
                </a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                  Finance
                </a>
              </li>
            </ul>
          </div>
        )}
        <div class="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search"
            required
          />
          <button
            type="submit"
            class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
}
