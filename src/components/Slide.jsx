import React from "react";
import S1 from "../assets/1a.png";
import S2 from "../assets/2a.png";
import S3 from "../assets/3a.png";
import Carousel from "react-material-ui-carousel";
const Slide = () => {
  const anArrayOfPicture = [
    <img src={S1} />,
    <img src={S2} />,
    <img src={S3} />,
  ];

  return (
    <div className="slide">
      <Carousel className="Carousel">{anArrayOfPicture}</Carousel>
    </div>
  );
};

export default Slide;
