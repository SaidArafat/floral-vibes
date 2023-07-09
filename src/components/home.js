import React from "react";
import Blog from "./blog";
import BestSellers from "./bestSellers";
import Stats from "./stats";
import Testimonials from "./testimonials";
import Popular from "./popular";
import Header from "./header";

const Home = () => {
  return (
    <>
      <Header />
      <Stats />
      <Blog />
      <BestSellers />
      <Popular />
      <Testimonials />
    </>
  );
};

export default Home;
