import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./component/Layouts/Header";
import AnimalData from "./pages/AnimalData";
import Animals from "./pages/Animals";
import Homepage from "./pages/Homepage";
import Favorites from "./pages/Favorites";
import Auth from "./pages/Auth";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/index" element={<Homepage />}></Route>
          <Route path="/animals" element={<Animals />}></Route>
          <Route path="/animals/favorites" element={<Favorites />}></Route>
          <Route path="/animals/:id" element={<AnimalData />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/*" element={<Homepage />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
