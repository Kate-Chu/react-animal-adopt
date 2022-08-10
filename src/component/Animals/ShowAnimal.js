import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { modalActions } from "../../store/modalSlice";

const ShowAnimal = () => {
  const isShow = useSelector((state) => state.modal.isShow);
  const data = useSelector((state) => state.modal.data);
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    dispatch(modalActions.hideModal());
  };

  return (
    <Modal show={isShow} onHide={closeModalHandler}>
      <Modal.Header closeButton>
        <Modal.Title>{data.animal_Variety}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={data.album_file}
          className="card-img-top card-img"
          alt="..."
        />
        <h5 className="mt-3">識別 ID：{data.animal_id}</h5>
        <h5 className="mt-3">性別：{data.animal_sex === "M" ? "公" : "母"}</h5>
        <h5 className="mt-3">顏色：{data.animal_colour}</h5>
        <h5 className="mt-3">目前位置：{data.shelter_name}</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModalHandler}>
          再多看看
        </Button>
        <Button variant="warning" onClick={closeModalHandler}>
          加入最愛
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default React.memo(ShowAnimal);
