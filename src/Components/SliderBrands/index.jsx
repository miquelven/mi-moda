import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import brandsData from "../../data/brandsData";

const responsiveData = [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
    },
  },
  {
    breakpoint: 645,
    settings: {
      slidesToShow: 2,
    },
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
    },
  },
];

export default function SliderBrands() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: responsiveData,
  };

  return (
    <div className="bg-black py-5 mt-80  mb-40 max-sm:mt-28 max-sm:mb-32">
      <Slider {...settings}>
        {brandsData.map((brand) => (
          <div
            className="w-20 h-20 max-lg:w-16 max-lg:h-16 max-sm:w-12 max-sm:h-12"
            key={brand.id}
          >
            <div className="relative w-full h-full">
              <img
                src={brand.src}
                alt="Imagem de uma logo"
                className="w-full h-full object-contain invert"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
