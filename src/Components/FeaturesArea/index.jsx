import featuresData from "../../data/featuresData";
import Container from "../Container";

export default function FeaturesArea() {
  return (
    <Container>
      <div className="mt-80  mb-80 grid grid-cols-3 justify-center items-center px-28 gap-7 max-lg:px-0 max-md:grid-cols-1">
        {featuresData.map((features) => (
          <div
            key={features.id}
            data-aos="fade-up"
            data-aos-delay={400 * features.id}
            className="relative  h-full w-full flex gap-5 overflow-hidden p-4 shadow-md shadow-black/30 rounded-md max-md:w-11/12 max-md:mx-auto after:content-[''] after:absolute after:top-0 after:left-0 after:w-2 after:h-full after:bg-black"
          >
            <div className="">{features.icon}</div>

            <div>
              <h6 className="font-bold">{features.title}</h6>
              <p className="">{features.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
