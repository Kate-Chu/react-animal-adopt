import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import classes from "./Header.module.css";

const Header = React.memo(() => {
  const navigation = useNavigate();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logoutHandler();
    navigation("/", { replace: true });
  };

  return (
    <header className={classes.header}>
      <NavLink to="/">
        <div className={classes.logo}>陪你</div>
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
          {!isLoggedIn ? (
            <>
              <li>
                <NavLink to="/auth">Signin</NavLink>
              </li>
              <li>
                <NavLink to="/auth">Signup</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
});

export default Header;
