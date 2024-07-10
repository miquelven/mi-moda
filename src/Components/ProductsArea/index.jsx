import { useState } from "react";
import filterData from "../../data/filterData";
import Container from "../Container";
import WhatsappButton from "../WhatsappButton";
import SectionTitle from "../SectionTitle";
import productsData from "../../data/productsData";

export default function ProductsArea() {
  const [filteredValue, setFilteredValue] = useState("all");

  const handleClick = (filtered) => {
    setFilteredValue(filtered);
  };

  return (
    <section id="produtos" className="mt-72">
      <Container>
        <SectionTitle>Alguns Produtos</SectionTitle>

        <ul
          data-aos="fade-up"
          data-aos-delay="1000"
          className="flex justify-center items-center mt-28 mb-20 max-sm:mb-12 max-sm:grid max-sm:grid-cols-2 max-sm:gap-y-5 max-sm:text-center"
        >
          {filterData.map((filter) => (
            <li
              key={filter.id}
              className="px-14 font-semibold text-lg max-lg:px-10 max-sm:px-4 max-sm:text-base"
            >
              <button
                onClick={() => handleClick(filter.filtered)}
                className={`relative transition-all duration-300 cursor-pointer hover:text-[#ef8354] uppercase after:content-[''] after:transition-all after:duration-500 after:w-full after:h-1 after:absolute after:-bottom-1 after:right-1/2 after:translate-x-1/2 after:bg-transparent hover:after:bg-[#ef8354]
                        ${
                          filteredValue == filter.filtered
                            ? "text-[#ef8354]  after:bg-[#ef8354]"
                            : "text-black"
                        }
                    `}
              >
                {filter.text}
              </button>
            </li>
          ))}
        </ul>

        <ul className="grid grid-cols-4 gap-x-14 gap-y-44 max-lg:grid-cols-3 max-lg:gap-x-8 max-md:gap-x-20 max-md:grid-cols-2 max-sm:gap-x-5 max-sm:gap-y-24 ">
          {productsData.map(
            (product) =>
              product.filtered.includes(filteredValue) && (
                <li data-aos="fade-up" data-aos-delay="1100" key={product.id}>
                  <div data-aos="fade-up" data-aos-delay={product.id * 200}>
                    <div className="transition-all duration-500 w-full h-full overflow-hidden shadow-md rounded-md shadow-black/20  brightness-90 hover:brightness-100 ">
                      <img
                        src={product.src}
                        alt="Imagem do produto"
                        className="transition-all duration-500 rounded-md object-cover w-full h-[440px]  hover:scale-110 max-sm:h-[240px]"
                      />
                    </div>
                    <div className="mt-3 flex flex-col gap-3">
                      <div className="flex flex-col gap-1">
                        <h6 className="font-bold text-lg max-sm:text-base">
                          {product.text}
                        </h6>
                        <span className="font-semibold">
                          R${product.price},00
                        </span>
                      </div>
                      <div className="mx-auto">
                        <WhatsappButton />
                      </div>
                    </div>
                  </div>
                </li>
              )
          )}
        </ul>
      </Container>
    </section>
  );
}
