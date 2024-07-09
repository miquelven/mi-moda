import "./App.css";
import Header from "./Components/ui/Header";
import Banner from "./Components/Banner";
import Collections from "./Components/Collections";
import SaleArea from "./Components/SaleArea";
import SliderBrands from "./Components/SliderBrands";
import ProductsArea from "./Components/ProductsArea";
import FeaturesArea from "./Components/FeaturesArea";
import ReviewArea from "./Components/ReviewArea";
import ToTopButton from "./Components/ToTopButton";
import Footer from "./Components/ui/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Collections />
      <SaleArea />
      <SliderBrands />
      <ProductsArea />
      <FeaturesArea />
      <ReviewArea />
      <ToTopButton />
      <Footer />
    </>
  );
}

export default App;
