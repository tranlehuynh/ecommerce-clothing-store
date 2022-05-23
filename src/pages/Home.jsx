import React from "react";

import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import heroSliderData from "../assets/fake-data/hero-slider";

const Home = () => {
  return (
    <Helmet title="Trang chủ">
      <HeroSlider data={heroSliderData} control={true} />
    </Helmet>
  );
};

export default Home;
