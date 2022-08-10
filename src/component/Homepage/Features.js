import React from "react";
import { NavLink } from "react-router-dom";
import "./Features.css";
import AnimalsCard from "../Animals/AnimalCard";

const Features = () => {
  return (
    <section className="section-features">
      <div className="row section-features__row">
        <AnimalsCard />
      </div>
      <div className="section-features__btn">
        <NavLink to="/animals" className="btn-text">
          去看更多
        </NavLink>
      </div>
    </section>
  );
};

export default React.memo(Features);
