import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import homepageCards from "../../data/homepageCards.json";
import { animalActions } from "../../store/animalSlice";
import { modalActions } from "../../store/modalSlice";
import "./AnimalCard.css";
import catImage from "../../assets/cats-small.jpg";
import dogImage from "../../assets/dogs-small.jpg";

const AnimalCard = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const stateData = useSelector((state) => state.animal.data);

  if (stateData.length === 0) {
    dispatch(animalActions.receiveDefaultData());
  }

  const stateShowData = useSelector((state) => state.animal.showData);
  const animalData = location.pathname === "/" ? homepageCards : stateShowData;

  const showModalHandler = (item) => {
    dispatch(modalActions.showModal(item));
  };

  const cards = animalData.map((item) => {
    let image;

    if (!item.album_file && item.animal_kind === "狗") {
      image = dogImage;
    } else if (!item.album_file && item.animal_kind === "貓") {
      image = catImage;
    } else {
      image = item.album_file;
    }

    return (
      <div className="col-10 col-md-4 col-lg-2" key={item.animal_id}>
        <div
          className="card"
          onClick={() => showModalHandler({ ...item, album_file: image })}
        >
          <img src={image} className="card-img-top card-img" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.animal_Variety}</h5>
            <p className="card-text">{item.animal_place}</p>
          </div>
        </div>
      </div>
    );
  });

  return <>{cards}</>;
};

export default React.memo(AnimalCard);
