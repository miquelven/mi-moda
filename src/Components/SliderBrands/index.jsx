import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import brandsData from "../../data/brandsData";

const responsiveData = [
  {
    breakpoint: 1500,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 645,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
  },
];

export default function SliderBrands() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,

    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: responsiveData,
  };

  return (
    <div className="bg-black py-5  mb-40">
      <Slider {...settings}>
        {brandsData.map((brand) => (
          <div
            className="w-24 h-24 max-lg:w-20 max-lg:h-20 max-sm:w-12 max-sm:h-12"
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
