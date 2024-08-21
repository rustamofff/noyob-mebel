import React from "react";
import HeroSlider from "../Components/HeroSlider";
import HomeCategory from "../Components/HomeCategory";
import HomeDiskaunt from "../Components/HomeDiskaunt";
import Map from "../Components/Map";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <div className="home_container">
        <HomeCategory />
        <HomeDiskaunt />
        <Map />
      </div>
    </>
  );
}
