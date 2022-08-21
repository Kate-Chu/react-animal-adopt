import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store/index";
import { AuthContextProvider } from "./store/AuthContext";
import ScrollToTop from "./component/Layouts/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthContextProvider>
        <Router>
          <ScrollToTop />
          <App />
        </Router>
      </AuthContextProvider>
    </Provider>
  </React.StrictMode>
);
