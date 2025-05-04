import React from "react";
import bgHero from "../assets/bghero.jpg";

export default function Hero() {
  return (
    <section
      style={{ backgroundImage: `url(${bgHero})` }}
      className="h-[800px] bg-no-repeat bg-cover bg-center py-20"
    >
      <div className="lg:p-0 flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center -mt-52 uppercase">
            <div className="w-10 h-[2px] mr-3 bg-cyan-700"></div>Hot Trend
          </div>
          <h1 className="uppercase text-[55px] md:text-[70px] leading-[1.1] font-semibold mb-4">
            Fresh Fashion Finds
            <br />
            <span className="font-light">new collection</span>
          </h1>
          <a
            href={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
}
