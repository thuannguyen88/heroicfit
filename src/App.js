import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resources from "./components/FreeResources";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Modal from "./components/Modal";
import React, { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <Resources openModal={openModal} />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <About />
      <Testimonial />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
