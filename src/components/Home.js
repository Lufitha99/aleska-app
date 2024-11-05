import React from "react";
import Header from "./Header";
import Categories from "./Categories";
import Testimonial from "./Testimonial";
import Gallery from "./Gallery";
import RegisterPrompt from "./RegisterPromt";
function Home({ setSelectedCategory }) { // Recibe la función para actualizar la categoría
  return (
    <div>
      <Header />
      <Categories setSelectedCategory={setSelectedCategory} /> {/* Pasa la función a Categories */}
      <Testimonial />
      <Gallery />
      <RegisterPrompt/>
    </div>
  );
}

export default Home;
