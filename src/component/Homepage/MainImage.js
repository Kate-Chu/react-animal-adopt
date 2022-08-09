import React from "react";
import classes from "./MainImage.module.css";

import dogsImg from "../../assets/dogs-small.jpg";

const MainImage = () => {
  return (
    <>
      <img src={dogsImg} className={classes.mainImage} alt="dogsImg" />
    </>
  );
};

export default React.memo(MainImage);
