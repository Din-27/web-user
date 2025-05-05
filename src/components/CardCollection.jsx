import React from "react";

export default function CardCollection({ image }) {
  return (
    <div>
      <img class="h-auto max-w-full rounded-lg" src={image} alt="" />
    </div>
  );
}
