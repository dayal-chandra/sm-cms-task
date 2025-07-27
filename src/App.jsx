import "./App.css";
import Banner from "./components/Banner/Banner";
import CarouselSection from "./components/CarouselSection/CarouselSection";
import Collection from "./components/Collection/Collection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Collection></Collection>
      <CarouselSection></CarouselSection>
    </>
  );
}

export default App;
