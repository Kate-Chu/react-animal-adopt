import { NavLink } from "react-router-dom";

import "./Features.css";
import dummyData from "../../data/dummyData.json";

const Features = () => {
  let data = dummyData.slice(0, 4).map((item) => {
    return (
      <div className="col-2" key={item.animal_id}>
        <div className="card">
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
  return (
    <section className="section-features">
      <div className="row section-features__row">{data}</div>
      <div className="section-features__btn">
        <NavLink to="/animals" className="btn-text">
          尋找你的牠
        </NavLink>
      </div>
    </section>
  );
};

export default Features;
