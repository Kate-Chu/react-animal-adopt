import React from "react";
import "./MainImage.css";

import dogsImg from "../../assets/dogs-small.jpg";

const MainImage = () => {
  return (
    <>
      <img src={dogsImg} className="mainImage" alt="dogsImg" />
    </>
  );
};

export default React.memo(MainImage);
