import Container from "../Container";
import SectionTitle from "../SectionTitle";

import saleData from "../../data/saleData";
import WhatsappButton from "../WhatsappButton";

export default function SaleArea() {
  return (
    <section className="mt-60 mb-40 max-sm:mt-96">
      <Container>
        <div className="flex flex-col gap-14 ">
          <div className="text-center">
            <SectionTitle>Promoções</SectionTitle>
          </div>

          <ul className="grid grid-cols-3 gap-20 max-xl:gap-10 max-lg:grid-cols-1 ">
            {saleData.map((sale) => (
              <li
                key={sale.id}
                className="h-80 w-full relative hover:brightness-125 max-lg:h-60 max-lg:mx-auto max-lg:flex max-lg:justify-center max-lg:bg-black/60 max-lg:rounded-xl max-lg:overflow-hidden max-lg:shadow-md max-lg:shadow-black/20 max-sm:flex-col max-sm:h-96 "
              >
                <img
                  src={sale.src}
                  alt={sale.alt}
                  className="object-cover absolute z-10 h-96 inset-0 brightness-50 shadow-md shadow-black/20 rounded-md max-lg:h-full max-lg:w-60 max-lg:brightness-100 max-lg:relative max-sm:w-full max-sm:object-top  max-sm:shadow-none max-sm:rounded-none max-sm:h-60"
                />

                <div className="relative z-20 h-96 w-full flex flex-col justify-center gap-6 items-center text-white max-lg:justify-start max-lg:gap-14 max-sm:gap-2 ">
                  <div className="flex flex-col items-center gap-4 max-lg:gap-2 max-lg:mt-2 ">
                    <span className="text-xl font-light ">{sale.text}</span>
                    <h3 className="text-white text-4xl font-semibold max-sm:text-3xl">
                      {sale.sale}
                    </h3>
                    <span className="font-light text-lg max-sm:hidden">
                      Não Perca!
                    </span>
                  </div>
                  <WhatsappButton />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
