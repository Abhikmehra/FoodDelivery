import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import ExporeMenu from "../../components/exploremenu/ExporeMenu";
import FoodDisplay from "../../components/fooddisplay/FoodDisplay";
import AppDownload from "../../components/appdownload/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExporeMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      {/* <AppDownload /> */}
    </div>
  );
};

export default Home;
