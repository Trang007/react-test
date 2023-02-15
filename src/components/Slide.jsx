import React from "react";
import S1 from "../assets/1.png";
import S2 from "../assets/2.png";
import S3 from "../assets/3.png";
import S4 from "../assets/4.png";
import S5 from "../assets/5.png";
import S6 from "../assets/6.png";
import S7 from "../assets/7.png";
import Carousel from "react-material-ui-carousel";
const Slide = () => {
  const anArrayOfPicture = [
    <img src={S1} />,
    <img src={S2} />,
    <img src={S3} />,
    <img src={S4} />,
    <img src={S5} />,
    <img src={S6} />,
    <img src={S7} />,

  ];

  return (
    <div className="slide">
      <Carousel className="Carousel">{anArrayOfPicture}</Carousel>
    </div>
  );
};

export default Slide;
