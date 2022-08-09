import "./Animals.css";
import SelectForm from "../component/Animals/SelectForm";
import SearchForm from "../component/Animals/SearchForm";
import Pagination from "../component/Layouts/Pagination";
import AnimalCard from "../component/Animals/AnimalCard";

const Animals = (props) => {
  const { handleShowModal } = props;

  return (
    <>
      <section className="container animals-section">
        <section className="row mt-5 search-section  d-flex justify-content-around">
          <div className="col-lg-3">
            <SelectForm />
          </div>
          <div className="col-lg-4">
            <SearchForm />
          </div>
        </section>
        <section className="animal-cards-section d-flex flex-wrap justify-content-center my-5">
          <AnimalCard start="0" end="20" handleShowModal={handleShowModal} />
        </section>
        <section className="pagination-section d-flex justify-content-center my-5">
          <Pagination />
        </section>
      </section>
    </>
  );
};

export default Animals;
