import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import Action from "../../redux/action/action";

export const AddUser = () => {
  const bodyData = useSelector((state) => state.reducer.bodyData);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [border1, setBorder1] = useState("");
  const [border2, setBorder2] = useState("");
  const [border3, setBorder3] = useState("");
  const [user, setUser] = useState({
    col2: "",
    col3: "",
    col4: "",
  });
  const { col2, col3, col4 } = user;
  const onHandleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    if (user.col2 !== "" && user.col3 !== "" && user.col4 !== "") {
      dispatch(
        Action({
          type: "ADD_USER",
          payload: { ...user, id: JSON.stringify(bodyData.length + 1) },
        })
      );
      user.col2 = "";
      user.col3 = "";
      user.col4 = "";
      setBorder1("");
      setBorder2("");
      setBorder3("");
      handleClose();
    } else {
      if (col2 === "") {
        setBorder1("border border-danger");
      }
      if (col3 === "") {
        setBorder2("border border-danger");
      }
      if (col4 === "") {
        setBorder3("border border-danger");
      }
    }
  };
  return (
    <>
      <Button variant="primary px-5" onClick={handleShow}>
        ADD
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
                className={border1}
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
                className={border2}
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
                className={border3}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => handleSubmit(e)}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
