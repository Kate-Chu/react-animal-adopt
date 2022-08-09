import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./component/Layouts/Header";
import Animals from "./pages/Animals";
import Homepage from "./pages/Homepage";
import Favorites from "./pages/Favorites";
import Auth from "./pages/Auth";
import Footer from "./component/Layouts/Footer";
import ShowAnimal from "./component/Animals/ShowAnimal";
import dummy_data from "./data/dummyData.json";

function App() {
  const [isShow, setIsShow] = useState(false);

  const handleShowModal = (id) => {
    setIsShow(true);
    const animalData = dummy_data.find((item) => item.animal_id === id);
    console.log(animalData);
    // return animalData;
  };

  const handleCloseModal = () => setIsShow(false);

  return (
    <>
      <ShowAnimal isShow={isShow} handleCloseModal={handleCloseModal} />
      <Header />
      <main>
        <Routes>
          <Route path="/index" element={<Homepage />}></Route>
          <Route
            path="/animals"
            element={<Animals handleShowModal={handleShowModal} />}
          ></Route>
          <Route
            path="/animals/favorites"
            element={<Favorites handleShowModal={handleShowModal} />}
          ></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/*" element={<Homepage />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
