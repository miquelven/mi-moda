import Slider from "react-slick";

import reviewData from "../../data/reviewData";

import SectionTitle from "../SectionTitle";

import reviewBg from "../../assets/imgs/reviewBg.webp";

export default function ReviewArea() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section
      id="avaliacoes"
      className="relative h-[60vh] mb-40 w-full bg-cover bg-center bg-no-repeat flex flex-col gap-24 justify-center items-center max-sm:h-[80vh]"
      style={{ backgroundImage: `url(${reviewBg})` }}
    >
      <div className="absolute z-10 inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50 max-sm:h-[80vh] "></div>

      <div className="relative z-20 text-center invert max-sm:px-3 ">
        <SectionTitle>Avaliações de Clientes</SectionTitle>
      </div>
      <Slider
        {...settings}
        className="relative z-20 w-1/2 mx-auto max-sm:w-3/4"
      >
        {reviewData.map((review) => (
          <div
            key={review.id}
            className="h-full w-full flex flex-col mb-10 items-center justify-center "
          >
            <img
              src={review.src}
              alt={review.name}
              className="w-24 h-24 object-cover mb-4 mx-auto shadow-md shadow-black/20 rounded-md max-sm:w-20 max-sm:h-20"
            />
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2 text-white max-sm:text-xl">
                {review.name}
              </h3>
              <p className="text-center px-10 mt-5 text-white font-light text-lg max-sm:text-base">
                {review.text}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
