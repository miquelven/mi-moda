import Container from "../Container";

import bannerImg from "../../assets/imgs/banner.webp";

export default function Banner() {
  return (
    <main
      className={`relative z-0 h-[80vh]  w-full bg-no-repeat bg-center bg-cover max-lg:bg-left max-sm:h-[70vh]`}
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="absolute z-10 inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/10 max-sm:h-[90%] max-sm:via-black/60 max-sm:from-black/70 max-sm:to-black/50"></div>
      <Container>
        <div className="relative z-20 h-[80vh] w-full  flex justify-between items-center text-white max-sm:h-[70vh]">
          <div className="w-4/6 flex flex-col gap-14 max-lg:gap-10  max-sm:w-full ">
            <div className="flex flex-col gap-2">
              <span
                data-aos="fade-up"
                data-aos-delay="300"
                className="font-semibold text-lg max-lg:text-base max-sm:text-sm"
              >
                Novas Peças
              </span>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="font-bold text-8xl text-white max-lg:text-7xl max-sm:text-4xl max-sm:leading-[48px]"
              >
                Novidades prontas para arrasar
              </h1>
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="700"
              className="text-xl w-2/3 font-medium max-lg:text-lg max-lg:w-3/4 max-sm:w-full max-sm:text-sm max-sm:leading-6 max-sm:font-light"
            >
              Confira nossa nova coleção de roupas e acessórios que vão
              transformar seu look. Peças exclusivas e estilosas para você
              arrasar em qualquer ocasião.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
