import React from "react";

import Menu from "../components/menu/Menu";
import About from "../components/about/About";
import Card from "../components/card/CardList";
import Footer from "../components/footer/Footer";

import Test from "../components/test/Test";

const Home = () => {
  document.title = "JM Carpintaria";
  return (
    <div className="page">
      <Menu />
      <About />
      <Card />
      <Test />
      <Footer />
    </div>
  );
};

export default Home;
