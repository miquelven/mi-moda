import Container from "../Container";

import collectionImg from "../../assets/imgs/collection.jpg";
import SectionTitle from "../SectionTitle";
import WhatsappButton from "../WhatsappButton";

export default function Collections() {
  return (
    <section id="colecoes" className="mt-10 mb-40">
      <Container>
        {/* line */}
        <div className="bg-gradient-to-b from-zinc-400/10 to-[#e9ecef] w-full h-2 mb-20"></div>

        <div className="relative z-[-1] grid grid-cols-3 justify-center items-center max-lg:grid-cols-2 max-sm:grid-cols-1">
          <div className=" flex flex-col gap-20 max-sm:relative max-sm:z-10  max-sm:-mt-14">
            <div data-aos="fade-up" data-aos-delay="700" className="w-fit">
              <SectionTitle>Nova Coleção</SectionTitle>
            </div>

            <div className="flex flex-col gap-8 ">
              <div>
                <span
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="font-light text-lg"
                >
                  Novas Coleções
                </span>
                <p
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="font-semibold text-black text-2xl"
                >
                  Disponível na loja
                </p>
              </div>

              <WhatsappButton />
            </div>
          </div>

          <img
            data-aos="zoom-in"
            data-aos-delay="600"
            src={collectionImg}
            alt="Imagem de um homem de terno"
            className="shadow-md shadow-black/20 rounded-md max-sm:absolute max-sm:top-10 max-sm:right-0  max-sm:h-80 max-sm:brightness-75"
          />
        </div>
      </Container>
    </section>
  );
}
