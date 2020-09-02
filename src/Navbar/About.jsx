import React from "react";
import web from "../Images/img2.svg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btnName="Contact Now"
      />
    </>
  );
};

export default Home;
