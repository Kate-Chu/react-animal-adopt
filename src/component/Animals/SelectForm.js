import React from "react";
import "./SelectForm.css";

const SelectForm = () => {
  const cities = [
    "基隆市",
    "台北市",
    "新北市",
    "宜蘭縣",
    "桃園市",
    "新竹市",
    "新竹縣",
    "苗栗縣",
    "台中市",
    "彰化縣",
    "南投縣",
    "雲林縣",
    "嘉義市",
    "嘉義縣",
    "台南市",
    "高雄市",
    "屏東縣",
    "花蓮縣",
    "台東縣",
    "澎湖縣",
    "連江縣",
    "金門縣",
  ];

  return (
    <form className="d-flex">
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
