import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resources from "./components/FreeResources";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Products from "./components/Products";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Resources />
      <About />
      <Testimonial />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
