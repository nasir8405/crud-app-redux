import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import Action from "../../redux/action/action";

export const EditUser = ({ id, index }) => {
  const bodyData = useSelector((state) => state.reducer.bodyData);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const user1 = bodyData.find((item) => {
    return item.id === id;
  });
  const [user, setUser] = useState({
    id: user1.id,
    col2: user1.col2,
    col3: user1.col3,
    col4: user1.col4,
  });
  const { col2, col3, col4 } = user;
  const onHandleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    dispatch(
      Action({
        type: "EDIT_USER",
        payload: { user, index },
      })
    );
    handleClose();
  };
  return (
    <>
      <Button className="btn btn-primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Enter Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="col2"
                value={col2}
                onChange={(e) => onHandleChange(e)}
                placeholder="Enter Your Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicProfession">
              <Form.Label>Game Played</Form.Label>
              <Form.Control
                type="text"
                name="col3"
                value={col3}
                onChange={(e) => onHandleChange(e)}
                placeholder="Enter Game Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                name="col4"
                value={col4}
                onChange={(e) => onHandleChange(e)}
                placeholder="Enter Your Country"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={(e) => handleSubmit(e)}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
