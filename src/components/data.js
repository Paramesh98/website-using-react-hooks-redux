import React, { useState } from "react";
import {
  Card,
  Button,
  CardGroup,
  Col,
  Form,
  Row,
  Jumbotron,
  ButtonGroup,
  Modal
} from "react-bootstrap";
import { connect, useSelector, useDispatch } from "react-redux";
import { search, quantity as one, submit, deleteItem } from "../store/Actions";

function Data() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const user = useSelector(state => state.user);
  //const userValue = useSelector(state => state.userValue);
  const dispatch = useDispatch();

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = user.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = number => {
    setCurrentPage(currentPage + number);
  };
  const handleEdit = id => {
    //console.log("edit", id);
    setEdit(true);
    setId(id);
    const item = user.filter(item => item.id == id);
    item.map(item => {
      return (
        setName(item.customer_name),
        setEmail(item.customer_email),
        setProduct(item.product),
        setQuantity(item.quantity)
      );
    });
  };

  const handleSubmit = () => {
    const newItem = {
      id: id,
      customer_name: name,
      customer_email: email,
      product: product,
      quantity: quantity
    };
    setName(""), setEmail(""), setProduct(""), setQuantity("");
    setShow(true);
    setEdit(false);
    dispatch(submit(newItem));
  };
  const handleDelete = id => {
    //console.log("deleter", id);
    dispatch(deleteItem(id));
  };

  const handleName = e => {
    setName(e.target.value);
  };
  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handleProduct = e => {
    setProduct(e.target.value);
  };
  const handleQuantity = e => {
    setQuantity(e.target.value);
  };
  return (
    <>
      <Row>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Succesfully Edited</Modal.Title>
          </Modal.Header>
          <Modal.Body>Changes have been saved</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
      <Row className="form-group">
        <Col md="6" className="form-group">
          <select className="form-control" onChange={e => dispatch(search(e))}>
            <option value="">Choose Product</option>
            <option value="Product 1">Product 1</option>
            <option value="Product 2">Product 2</option>
            <option value="Product 3">Product 3</option>
          </select>
        </Col>
        <Col md="6" className="form-group">
          <select className="form-control" onChange={e => dispatch(one(e))}>
            <option value="">Choose Quantity</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </Col>
      </Row>

      {edit && (
        <Row>
          <Col md="2" className="form-group">
            <Button
              className="btn-block from-group"
              variant="primary"
              disabled="true"
            >
              Edit Here
            </Button>
          </Col>
          <Col md="2">
            <Form.Control
              onChange={e => handleName(e)}
              name="name"
              value={name}
              type="text"
              placeholder="Enter Name"
              className="form-group"
            />
          </Col>
          <Col md="2">
            <Form.Control
              onChange={e => handleEmail(e)}
              name="email"
              value={email}
              type="text"
              placeholder="Enter Email"
              className="form-group"
            />
          </Col>
          <Col md="2">
            <Form.Control
              onChange={e => handleProduct(e)}
              value={product}
              name="product"
              type="text"
              placeholder="Enter Product"
              className="form-group"
            />
          </Col>
          <Col md="2">
            <Form.Control
              onChange={e => handleQuantity(e)}
              value={quantity}
              name="quantity"
              type="text"
              placeholder="Enter email"
              className="form-group"
            />
          </Col>
          <Col md="2" className="form-group">
            <Button
              className="btn-block"
              onClick={() => handleSubmit()}
              variant="outline-primary"
            >
              Submit
            </Button>
          </Col>
        </Row>
      )}

      <CardGroup>
        {currentPost.map(item => {
          return (
            <Col md={3} className="form-group">
              <Card style={{ width: "auto" }}>
                <Card.Body>
                  <Card.Title>Name: {item.customer_name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    id: {item.id}
                  </Card.Subtitle>
                  <Card.Text>Product: {item.product}</Card.Text>
                  <Card.Text>Quantity: {item.quantity}</Card.Text>
                  <ButtonGroup>
                    <Button
                      onClick={() => handleEdit(item.id)}
                      variant="success"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDelete(item.id)}
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </ButtonGroup>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </CardGroup>
      <ButtonGroup>
        <Button
          disabled={indexOfFirstPost <= 1 ? true : false}
          variant="warning"
          onClick={() => paginate(-1)}
        >
          Prev
        </Button>
        <Button
          disabled={indexOfLastPost >= user.length ? true : false}
          variant="warning"
          onClick={() => paginate(1)}
        >
          Next
        </Button>
        <Button variant="primary">
          {" "}
          {currentPage} of {Math.ceil(user.length / postPerPage)}
        </Button>
      </ButtonGroup>
    </>
  );
}
export default Data;
