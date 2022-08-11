import { useSelector } from "react-redux";
import HeartSpinner from "../component/UI/Spinner";
import "./Animals.css";
import SelectForm from "../component/Animals/SelectForm";
import SearchForm from "../component/Animals/SearchForm";
import PaginationRender from "../component/Layouts/Pagination";
import AnimalCard from "../component/Animals/AnimalCard";

const Animals = () => {
  const isLoading = useSelector((state) => state.animal.isLoading);

  return (
    <>
      <section className="container animals-section">
        {isLoading && (
          <div className="d-flex align-items-center flex-column h-100">
            <h1 className="waiting-words mt-5 pt-5 text-secondary">
              努力加載中，就快好了...
            </h1>
            <HeartSpinner />
          </div>
        )}
        {!isLoading && (
          <>
            <section className="row mt-5 search-section  d-flex justify-content-around align-items-center">
              <div className="col-lg-3">
                <SelectForm />
              </div>
              <div className="col-lg-4">
                <SearchForm />
              </div>
            </section>
            <section className="animal-cards-section d-flex flex-wrap justify-content-center my-5">
              <AnimalCard />
            </section>
            <section className="pagination-section d-flex justify-content-center my-5">
              <PaginationRender />
            </section>
          </>
        )}
      </section>
    </>
  );
};

export default Animals;
