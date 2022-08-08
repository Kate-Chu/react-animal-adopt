import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";

const Header = React.memo(() => {
  return (
    <header className={classes.header}>
      <NavLink to="/">
        <div className={classes.logo}>Homepage</div>
      </NavLink>
      <nav className={classes.navbar}>
        <ul>
          <li>
            <NavLink to="/animals">所有動物</NavLink>
          </li>
          <li>
            <NavLink to="/animals/favorites">我的最愛</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/auth">Login</NavLink>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
});

export default Header;
