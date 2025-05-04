import React from "react";

export default function SearchInput() {
  return (
    <label for="Search">
      <div class="relative">
        <input
          type="text"
          id="Search"
          placeholder="Search"
          class="mt-0.5 p-2 w-full rounded-xl text-xl border-2 border-gray-300 pe-10 shadow-sm"
        />

        <span class="absolute inset-y-0 right-2 grid w-8 place-content-center">
          <button
            type="button"
            aria-label="Submit"
            class="rounded-full p-1.5 text-gray-700 transition-colors hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </span>
      </div>
    </label>
  );
}
