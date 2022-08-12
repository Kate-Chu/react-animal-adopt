import React, { useContext, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Layouts/Header";
import Footer from "./component/Layouts/Footer";
import ShowAnimal from "./component/Animals/ShowAnimal";
import AuthContext from "./store/AuthContext";
import Spinner from "./component/UI/Spinner";

const Animals = React.lazy(() => import("./pages/Animals"));
const Homepage = React.lazy(() => import("./pages/Homepage"));
const Favorites = React.lazy(() => import("./pages/Favorites"));
const Auth = React.lazy(() => import("./pages/Auth"));

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <ShowAnimal />
      <Header />
      <main>
        <Suspense
          fallback={
            <div className="d-flex justify-content-center">
              <Spinner />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/animals" element={<Animals />}></Route>
            {authCtx.isLoggedIn && (
              <Route path="/animals/favorites" element={<Favorites />}></Route>
            )}
            <Route path="/auth" element={<Auth />}></Route>
            <Route path="/*" element={<Auth />}></Route>
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
