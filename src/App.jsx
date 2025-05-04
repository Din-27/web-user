import { useState } from "react";
import Filter from "./components/Filter";
import Hero from "./components/Hero";
import SearchInput from "./components/SearchInput";

function App() {
  return (
    <div style={{}}>
      <Hero />
      <section>
        <div className="container px-24 my-20">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-semibold mb-2">Referensi Kue</h1>
            <div className="tex-sm capitalize text-gray-500">
              Berikut Referensi untuk kamu yg sedang nyari seni dalam kue. Jika
              Sudah dapat,Jangan Lupa Hubungi kami. Kami Akan Buatkan kue dengan
              seni untuk Anda
            </div>
          </div>
          <div className="flex items-center justify-between my-8">
            {/* <SearchInput />
            <Filter /> */}
          </div>
          {/* {products && (
            <div className="lg:hidden">
              {filteredProducts.map((product, index) => {
                return (
                  <div
                    onMouseEnter={() => setTooltips(true)}
                    onMouseLeave={() => setTooltips(false)}
                    className={""}
                  >
                    <Card product={product} key={product.id} />
                  </div>
                );
              })}
            </div>
          )} */}
        </div>
      </section>
    </div>
  );
}

export default App;
