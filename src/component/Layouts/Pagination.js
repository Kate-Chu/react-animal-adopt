import { NavLink } from "react-router-dom";

const Pagination = () => {
  return (
    <nav aria-label="Page navigation page-nav">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
