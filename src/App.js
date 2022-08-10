import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Layouts/Header";
import Animals from "./pages/Animals";
import Homepage from "./pages/Homepage";
import Favorites from "./pages/Favorites";
import Auth from "./pages/Auth";
import Footer from "./component/Layouts/Footer";
import ShowAnimal from "./component/Animals/ShowAnimal";
import AuthContext from "./store/AuthContext";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <ShowAnimal />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/animals" element={<Animals />}></Route>
          {authCtx.isLoggedIn && (
            <Route path="/animals/favorites" element={<Favorites />}></Route>
          )}
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/*" element={<Auth />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
