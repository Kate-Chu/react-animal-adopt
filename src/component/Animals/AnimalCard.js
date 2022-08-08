import dummyData from "../../data/dummyData.json";
import "./AnimalCard.css";

const AnimalsCard = (props) => {
  const { start, end } = props;
  const startNumber = parseInt(start);
  const endNumber = parseInt(end);

  let data = dummyData.slice(startNumber, endNumber).map((item) => {
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

  return data;
};

export default AnimalsCard;
