import React from "react"
import Modal from "../UI/Modal";
import AnimalsCard from "./AnimalCard";

const ShowAnimal = (props) => {
  return (
    <Modal>
      <AnimalsCard start="0" end="1" />
    </Modal>
  );
};

export default React.memo(ShowAnimal);
