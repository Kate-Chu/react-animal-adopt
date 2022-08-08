import { NavLink } from "react-router-dom";

const Pagination = () => {
  return (
    <nav aria-label="Page navigation page-nav">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#">
            1
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            2
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            3
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
