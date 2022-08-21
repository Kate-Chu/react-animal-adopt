import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import homepageCards from "../../data/homepageCards.json";
import { fetchAnimalData } from "../../store/animalSlice";
import { modalActions } from "../../store/modalSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./AnimalCard.css";
import illusDogs from "../../assets/illus-dogs.jpg";
import illusCats from "../../assets/illus-cats.jpg";

const AnimalCard = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const stateData = useSelector((state) => state.animal.data);
  const stateShowData = useSelector((state) => state.animal.showData);
  const stateFavoriteData = useSelector((state) => state.favorite.favorites);

  if (stateData.length === 0) {
    dispatch(fetchAnimalData());
  }

  let animalData;

  if (location.pathname === "/") {
    animalData = homepageCards;
  } else if (location.pathname === "/animals/favorites") {
    const favoritesData = stateFavoriteData.map((favorite) =>
      stateData.find((item) => item.animal_id === favorite)
    );
    animalData = favoritesData;
  } else {
    animalData = stateShowData;
  }

  const showModalHandler = (item) => {
    dispatch(modalActions.showModal(item));
  };

  const cards = animalData.map((item) => {
    let image;

    if (!item.album_file && item.animal_kind === "狗") {
      image = illusDogs;
    } else if (!item.album_file && item.animal_kind === "貓") {
      image = illusCats;
    } else {
      image = item.album_file;
    }

    const isFavorite =
      stateFavoriteData.indexOf(item.animal_id) !== -1 ? true : false;

    return (
      <div className="col-10 col-md-4 col-lg-2" key={item.animal_id}>
        <div
          className="card"
          onClick={() => showModalHandler({ ...item, album_file: image })}
        >
          <img src={image} className="card-img-top card-img" alt="..." />
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">{item.animal_Variety}</h5>
              <FontAwesomeIcon icon={faHeart} color={isFavorite ? "red" : ""} />
            </div>
            <p className="card-text">{item.animal_place}</p>
          </div>
        </div>
      </div>
    );
  });

  return <>{cards}</>;
};

export default React.memo(AnimalCard);
