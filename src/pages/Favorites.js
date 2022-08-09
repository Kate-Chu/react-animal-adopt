import "./Favorites.css";
import AnimalsCard from "../component/Animals/AnimalCard";

const Favorites = (props) => {
  const { handleShowModal } = props;

  return (
    <section className="container animals-section mt-5">
      <section className="animal-cards-section d-flex flex-wrap my-5">
        <AnimalsCard start="0" end="20" handleShowModal={handleShowModal} />
      </section>
    </section>
  );
};

export default Favorites;
