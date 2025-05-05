import React from "react";
import Rating from "../components/Rating";

export default function Card({ isMobile }) {
  return (
    <div
      class={`group relative block overflow-hidden rounded-lg border border-gray-300 w-[${
        !isMobile && "262px"
      }]`}
    >
      <img
        src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
        alt=""
        class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />
      <div class="relative border border-gray-100 bg-gray-50 p-6">
        <Rating />
        <h3 class="mt-1.5 text-lg font-medium text-gray-900">
          Wireless Headphones
        </h3>
        <p class="text-gray-700">
          $49.99
          <span class="text-gray-400 line-through">$80</span>
        </p>
      </div>
    </div>
  );
}
