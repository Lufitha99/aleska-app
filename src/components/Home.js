import React from "react";
import Header from "./Header";
import Categories from "./Categories";
import Testimonial from "./Testimonial";
import Gallery from "./Gallery";
import RegisterPrompt from "./RegisterPromt";

function Home({ selectedCategory, setSelectedCategory }) { 
  return (
    <div>
      <Header />
      <Categories 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />
      <Testimonial />
      <Gallery />
      <RegisterPrompt />
    </div>
  );
}

export default Home;
