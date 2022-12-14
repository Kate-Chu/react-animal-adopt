import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Spinner from "react-bootstrap/Spinner";
import AuthContext from "../store/AuthContext";
import "./Auth.css";

const Auth = () => {
  const [hasAccount, setHasAccount] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const googleApi = process.env.REACT_APP_GOOGLE_API;

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchModeHandler = () => {
    setHasAccount((prev) => !prev);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const emailInput = emailInputRef.current.value;
    const passwordInput = passwordInputRef.current.value;
    localStorage.setItem(
      "userId",
      emailInput.slice(0, emailInput.indexOf("@"))
    );

    setIsLoading(true);

    let url;
    if (hasAccount) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${googleApi}`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${googleApi}`;
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: emailInput,
        password: passwordInput,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";

            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.loginHandler(data.idToken, expirationTime.toString());
        navigate(-1, { replace: true });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className="auth-section container mt-5 p-5">
      <form className="auth-form" onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            aria-describedby="emailHelp"
            ref={emailInputRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">
            ??????
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            ref={passwordInputRef}
          />
        </div>
        {isLoading ? (
          <div className="d-flex m-5 justify-content-center">
            <Spinner animation="border" variant="warning" />
          </div>
        ) : (
          <div>
            <button
              type="button"
              className="btn btn-toggleMode border-0"
              onClick={switchModeHandler}
            >
              {hasAccount ? "Create Account" : "Login with existing account"}
            </button>
          </div>
        )}
        {!isLoading && (
          <button type="submit" className="btn btn-submit">
            {hasAccount ? "Signin" : "Signup"}
          </button>
        )}
      </form>
    </section>
  );
};

export default Auth;
