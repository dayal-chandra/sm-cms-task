import "./App.css";
import Banner from "./components/Banner/Banner";
import Blogs from "./components/Blogs/Blogs";
import CarouselSection from "./components/CarouselSection/CarouselSection";
import Collection from "./components/Collection/Collection";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import PopularProducts from "./components/PopularProducts/PopularProducts";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Collection></Collection>
      <CarouselSection></CarouselSection>
      <PopularProducts></PopularProducts>
      <Testimonial></Testimonial>
      <Blogs></Blogs>
      <Footer></Footer>
    </>
  );
}

export default App;
