import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { animalActions } from "../../store/animalSlice";
import "./SearchForm.css";

const SearchForm = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    const inputValue = inputRef.current.value;

    dispatch(
      animalActions.search({
        searchBy: "kind",
        searchVariety: inputValue,
      })
    );
    navigate("/animals");
  };

  return (
    <form className="d-flex m-sm-3" onSubmit={submitHandler}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="搜尋種類、品種，例如：狗"
        aria-label="Search"
        ref={inputRef}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};

export default React.memo(SearchForm);
