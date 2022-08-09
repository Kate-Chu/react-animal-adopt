import React from "react";

import dummyData from "../../data/dummyData.json";
import "./AnimalCard.css";

const AnimalCard = (props) => {
  const { start, end, handleShowModal } = props;
  const startNumber = parseInt(start);
  const endNumber = parseInt(end);

  let data = dummyData.slice(startNumber, endNumber).map((item) => {
    return (
      <div className="col-10 col-md-4 col-lg-2" key={item.animal_id}>
        <div className="card" onClick={() => handleShowModal(item.animal_id)}>
          <img
            src={item.album_file}
            className="card-img-top card-img"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{item.animal_Variety}</h5>
            <p className="card-text">{item.animal_place}</p>
          </div>
        </div>
      </div>
    );
  });

  return data;
};

export default React.memo(AnimalCard);
