import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { animalActions } from "../../store/animalSlice";
import "./SelectForm.css";

const cities = [
  "基隆市",
  "臺北市",
  "新北市",
  "宜蘭縣",
  "桃園市",
  "新竹市",
  "新竹縣",
  "苗栗縣",
  "臺中市",
  "彰化縣",
  "南投縣",
  "雲林縣",
  "嘉義市",
  "嘉義縣",
  "臺南市",
  "高雄市",
  "屏東縣",
  "花蓮縣",
  "臺東縣",
  "澎湖縣",
  "連江縣",
  "金門縣",
];

const SelectForm = () => {
  // const inputRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    let inputValue = event.target.value;
    inputValue = inputValue === "地區" ? "all" : inputValue;

    dispatch(
      animalActions.search({
        searchBy: "city",
        searchVariety: inputValue,
      })
    );
    navigate("/animals");
  };

  return (
    <form className="d-flex" onChange={submitHandler}>
      <select className="form-select" aria-label="Default select example">
        <option>地區</option>
        {cities.map((city) => {
          return (
            <option key={city} value={city}>
              {city}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default React.memo(SelectForm);
