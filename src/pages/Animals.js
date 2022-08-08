import "./Animals.css";
import SelectForm from "../component/Animals/SelectForm";
import SearchForm from "../component/Animals/SearchForm";
import Pagination from "../component/Layouts/Pagination";
import AnimalsCard from "../component/Animals/AnimalCard";

const Animals = () => {
  return (
    <section className="container animals-section">
      <section className="row mt-5 search-section  d-flex justify-content-around">
        <div className="col-lg-3">
          <SelectForm />
        </div>
        <div className="col-lg-4">
          <SearchForm />
        </div>
      </section>
      <section className="animal-cards-section d-flex flex-wrap my-5">
        <AnimalsCard start="0" end="20" />
      </section>
      <section className="pagination-section d-flex justify-content-center my-5">
        <Pagination />
      </section>
    </section>
  );
};

export default Animals;
