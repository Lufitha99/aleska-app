import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Categories from "./Categories";
import Testimonial from "./Testimonial";
import Gallery from "./Gallery";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Categories />
      <Testimonial />
      <Gallery />
    </div>
  );
}

export default Home;
