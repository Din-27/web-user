import Hero from "./components/Hero";
import Card from "./components/Card";
import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";
import { useState } from "react";
import Search from "./components/Search";

const data = [
  {
    row: 4,
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
  },
  {
    row: 2,
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
  },
  {
    row: 2,
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
  },
];

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      rtl: false,
      slides: {
        perView: isMobile ? 1 : 4,
        spacing: 2,
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div style={{}}>
      <Hero />
      <section id="new_arrival">
        <div className="container px-6 lg:px-20 mt-20 mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl font-semibold mb-2">New Arrivals</h1>
          </div>
          <div ref={sliderRef} className="keen-slider">
            {[...data, ...data, ...data].map((x, y) => (
              <div
                key={y}
                className={`keen-slider__slide number-slide${y + 1}`}
              >
                <Card isMobile={isMobile} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container px-6 lg:px-20 mt-20 mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl font-semibold mb-2">Collections</h1>
            <p className="tex-sm capitalize text-gray-500">
              Berikut Referensi untuk kamu yg sedang nyari seni dalam kue. Jika
              Sudah dapat,Jangan Lupa Hubungi kami. Kami Akan Buatkan kue dengan
              seni untuk Anda
            </p>
          </div>
          <div class={`flex justify-evenly flex-wrap gap-x-4 gap-y-8`}>
            {data.map((x, y) => (
              <div className="relative" key={y}>
                <img
                  class={`w-[350px] h-[300px] max-w-full rounded-lg object-cover`}
                  src={x.image}
                  alt=""
                />
                <div className="absolute top-0 bottom-0 left-0 right-0 p-12 bg-gray-800/35 rounded-lg" />
                <div className="absolute bottom-0 p-5 rounded-lg cursor-pointer">
                  <h3 className="flex items-end gap-x-2 text-xl relative font-bold text-white">
                    Ear Buds
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l14 0" />
                        <path d="M15 16l4 -4" />
                        <path d="M15 8l4 4" />
                      </svg>
                    </span>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="products">
        <div className="container px-6 lg:px-20 mt-20 mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl font-semibold mb-2">Product</h1>
            <Search />
          </div>
          <div class={`grid lg:grid-cols-4 grid-cols-2 gap-x-4 gap-y-8`}>
            {[...data, ...data].map((x, y) => (
              <Card isMobile={isMobile} key={y} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
