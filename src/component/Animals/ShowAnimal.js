import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Modal, Button, Row, Col, Container } from "react-bootstrap";
import { modalActions } from "../../store/modalSlice";

const ShowAnimal = () => {
  const isShow = useSelector((state) => state.modal.isShow);
  const data = useSelector((state) => state.modal.data);
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    dispatch(modalActions.hideModal());
  };

  return (
    <Modal
      show={isShow}
      onHide={closeModalHandler}
      size="lg"
      className="show-grid"
    >
      <Container>
        <Modal.Header closeButton>
          <Modal.Title>{data.animal_Variety}</Modal.Title>
        </Modal.Header>
        <Row className="d-flex align-items-center">
          <Col xs={12} md={4}>
            <div className="w-auto my-3">
              <img
                src={data.album_file}
                className="card-img-top card-img"
                alt="..."
              />
            </div>
          </Col>
          <Col xs={12} md={8}>
            <Modal.Body>
              <h5 className="mt-3">識別 ID：{data.animal_id}</h5>
              <h5 className="mt-3">種類：{data.animal_kind}</h5>
              <h5 className="mt-3">
                性別：{data.animal_sex === "M" ? "公" : "母"}
              </h5>
              <h5 className="mt-3">顏色：{data.animal_colour}</h5>
              <h5 className="mt-3">目前位置：{data.animal_place}</h5>
              <h5 className="mt-3">聯絡電話：{data.shelter_tel}</h5>
              {data.animal_remark && (
                <p className="mt-3">備註：{data.animal_remark}</p>
              )}
              <p className="mt-3">更新日期：{data.animal_update}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModalHandler}>
                再多看看
              </Button>
              <Button variant="warning" onClick={closeModalHandler}>
                加入最愛
              </Button>
            </Modal.Footer>
          </Col>
        </Row>
      </Container>
    </Modal>
  );
};

export default React.memo(ShowAnimal);
