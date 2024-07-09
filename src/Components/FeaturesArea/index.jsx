import featuresData from "../../data/featuresData";
import Container from "../Container";

export default function FeaturesArea() {
  return (
    <Container>
      <div className="mt-60  mb-40 grid grid-cols-3 justify-center items-center px-28 gap-7 max-lg:px-0 max-md:grid-cols-1">
        {featuresData.map((features) => (
          <div
            key={features.id}
            className="h-full w-full flex gap-5 p-4 shadow-md shadow-black/30 rounded-md max-md:w-11/12 max-md:mx-auto"
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
