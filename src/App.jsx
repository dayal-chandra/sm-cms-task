import "./App.css";
import Banner from "./components/Banner/Banner";
import CarouselSection from "./components/CarouselSection/CarouselSection";
import Collection from "./components/Collection/Collection";
import Navbar from "./components/Navbar/Navbar";
import PopularProducts from "./components/PopularProducts/PopularProducts";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Collection></Collection>
      <CarouselSection></CarouselSection>
      <PopularProducts></PopularProducts>
    </>
  );
}

export default App;
