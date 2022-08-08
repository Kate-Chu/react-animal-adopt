import "./Features.css";
import AnimalsCard from "../Animals/AnimalCard";

const Features = () => {
  const randomNum = Math.floor(Math.random() * 10);
  return (
    <section className="section-features">
      <div className="row section-features__row">
        <AnimalsCard start={randomNum} end={randomNum + 4} />
      </div>
    </section>
  );
};

export default Features;
