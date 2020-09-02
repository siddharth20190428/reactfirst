import React from "react";
import web from "../Images/img1.svg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={web}
        visit="/service"
        btnName="Get started"
      />
    </>
  );
};

export default Home;
