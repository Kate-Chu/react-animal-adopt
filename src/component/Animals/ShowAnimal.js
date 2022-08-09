import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import dummyData from "../../data/dummyData.json";

const ShowAnimal = (props) => {
  const { isShow, handleCloseModal } = props;
  const testData = dummyData[0];

  return (
    <Modal show={isShow} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{testData.animal_Variety}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={testData.album_file}
          className="card-img-top card-img"
          alt="..."
        />
        <h5 className="mt-3">識別 ID：{testData.animal_id}</h5>
        <h5 className="mt-3">
          性別：{testData.animal_sex === "M" ? "公" : "母"}
        </h5>
        <h5 className="mt-3">顏色：{testData.animal_colour}</h5>
        <h5 className="mt-3">目前位置：{testData.shelter_name}</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          再多看看
        </Button>
        <Button variant="warning" onClick={handleCloseModal}>
          加入最愛
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default React.memo(ShowAnimal);
