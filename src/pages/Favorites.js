import React from "react";
import "./Favorites.css";
import AnimalCard from "../component/Animals/AnimalCard";

const Favorites = () => {
  return (
    <section className="container animals-section mt-5">
      <section className="animal-cards-section d-flex flex-wrap my-5">
        <AnimalCard />
      </section>
    </section>
  );
};

export default React.memo(Favorites);
