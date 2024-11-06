import React from "react";
import Header from "./Header";
import Categories from "./Categories";
import Testimonial from "./Testimonial";
import Gallery from "./Gallery";
import RegisterPrompt from "./RegisterPromt";

function Home({ selectedCategory, setSelectedCategory }) { // Recibe el estado y la función para actualizar la categoría
  return (
    <div>
      <Header />
      <Categories 
        selectedCategory={selectedCategory} // Pasa el estado de la categoría seleccionada
        setSelectedCategory={setSelectedCategory} // Pasa la función para actualizar la categoría
      />
      <Testimonial />
      <Gallery />
      <RegisterPrompt />
    </div>
  );
}

export default Home;
