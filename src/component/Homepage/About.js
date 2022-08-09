import React from "react"
import { NavLink } from "react-router-dom";

import "./About.css";
import dogsImg from "../../assets/dogs-small.jpg";
import dogImg from "../../assets/dog-small.jpg";
import catsImg from "../../assets/cats-small.jpg";

const About = () => {
  return (
    <section className="about-section">
      <div className="row w-75">
        <div className="col-6 about-section__text">
          <h2 className="my-5">為你尋找最適合的牠</h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            24 小時線上查看
          </h3>
          <p className="paragraph">
            白天工作沒有時間親自前往看看心儀的牠嗎？沒問題，您可以先在線上查看喜歡的寵物，之後再預約前往
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            指定條件搜尋
          </h3>
          <p className="paragraph">
            特別喜歡米克斯、柴柴、還是橘貓？沒問題，指定條件搜尋，幫你快速找到喜歡的牠
          </p>

          <NavLink to="/animals" className="btn-text">
            Learn more &rarr;
          </NavLink>
        </div>
        <div className="col-6">
          <div className="composition">
            <img
              src={dogsImg}
              alt="dogsImg"
              className="composition__photo composition__photo--p1"
            />
            <img
              src={dogImg}
              alt="dogImg"
              className="composition__photo composition__photo--p2"
            />
            <img
              src={catsImg}
              alt="catsImg"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);
