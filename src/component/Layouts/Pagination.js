import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { animalActions } from "../../store/animalSlice";

import Pagination from "react-bootstrap/Pagination";
import "./Pagination.css";

const PaginationRender = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stateAnimalLength = useSelector((state) => state.animal.length);
  const currentPage = useSelector((state) => state.animal.currentPage);

  const endPage = Math.ceil(stateAnimalLength / 15);
  const start = currentPage < 5 ? 1 : currentPage - 4;
  const end = currentPage + 4 > endPage ? endPage : currentPage + 4;

  let active = currentPage;
  let items = [];

  const changePageHandler = (number) => {
    dispatch(animalActions.changeShowDataByPage(number));
  };

  for (let number = start; number <= end; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => {
          changePageHandler(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Pagination className="mb-5">
        <Pagination.First
          onClick={() => changePageHandler(1)}
          disabled={currentPage === 1}
        />
        <Pagination.Prev
          onClick={() => changePageHandler(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {items}
        <Pagination.Next
          onClick={() => changePageHandler(currentPage + 1)}
          disabled={currentPage === endPage}
        />
        <Pagination.Last
          onClick={() => changePageHandler(endPage)}
          disabled={currentPage === endPage}
        />
      </Pagination>
    </div>
  );
};

export default PaginationRender;
