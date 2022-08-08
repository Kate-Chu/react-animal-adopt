import "./Auth.css";

const Auth = () => {
  return (
    <section className="auth-section container mt-5 p-5">
      <form className="auth-form">
        <div className="mb-3">
          <label for="emailInput" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="passwordInput" className="form-label">
            密碼
          </label>
          <input type="password" className="form-control" id="passwordInput" />
        </div>
        <div className="mb-3">
          <label for="passwordCheckInput" className="form-label">
            密碼驗證
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordCheckInput"
          />
        </div>
        <div>
          <button type="button" className="btn btn-toggleMode">
            Create Account
          </button>
        </div>
        <button type="submit" className="btn btn-submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Auth;
