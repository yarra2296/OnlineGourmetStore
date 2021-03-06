import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { URL_POST_CREATE_PRODUCT } from "./urls";
import Header from "./Header";

export default class AddItem extends Component {
  constructor(props) {
    super(props);

    // Setting up functions

    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeItemPrice = this.onChangeItemPrice.bind(this);
    this.onChangeItemCategory = this.onChangeItemCategory.bind(this);
    this.onChangeItemQuantity = this.onChangeItemQuantity.bind(this);
    this.onChangeItemDescription = this.onChangeItemDescription.bind(this);
    this.onChangeItemImage = this.onChangeItemImage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: "",
      price: "",
      category: "",
      quantity: "",
      description: "",
      image: "",
    };
  }

  onChangeItemId(e) {
    this.setState({ id: e.target.value });
  }

  onChangeItemName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeItemPrice(e) {
    this.setState({ price: e.target.value });
  }

  onChangeItemCategory(e) {
    this.setState({ category: e.target.value });
  }

  onChangeItemQuantity(e) {
    this.setState({ quantity: e.target.value });
  }
  onChangeItemDescription(e) {
    this.setState({ description: e.target.value });
  }

  onChangeItemImage(e) {
    this.setState({ image: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const itemObject = {
      id: this.state.id,
      name: this.state.name,
      price: this.state.price,
      category: this.state.category,
      quantity: this.state.quantity,
      description: this.state.description,
      image: this.state.image,
      available: true,
    };

    axios
      .post(URL_POST_CREATE_PRODUCT, itemObject)
      .then((res) => console.log(res.data));

    this.setState({
      id: "",
      name: "",
      price: "",
      category: "",
      quantity: "",
      description: "",
      image: "",
    });
  }

  render() {
    return (
      <>
        <Header userName={this.state.userName} />

        <div className="form-wrapper container" style={{ marginTop: "50px" }}>
          <h2 className="title1" align="center">
            {" "}
            Add New Item{" "}
          </h2>
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="Name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                required="required"
                value={this.state.name}
                onChange={this.onChangeItemName}
              />
            </Form.Group>

            <Form.Group controlId="Price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                required="required"
                type="text"
                value={this.state.price}
                onChange={this.onChangeItemPrice}
              />
            </Form.Group>

            <Form.Group controlId="Category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                value={this.state.category}
                onChange={this.onChangeItemCategory}
                className="my-1 mr-sm-2"
                custom
              >
                <option value="0">Choose...</option>
                <option value="pantry">Pantry</option>
                <option value="oils">Oils & Vinegars</option>
                <option value="condiments">
                  Condiments, Butters & Spreads
                </option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="Quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                required="required"
                type="text"
                value={this.state.quantity}
                onChange={this.onChangeItemQuantity}
              />
            </Form.Group>

            <Form.Group controlId="Description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                required="required"
                type="text"
                value={this.state.description}
                onChange={this.onChangeItemDescription}
              />
            </Form.Group>

            <Form.Group controlId="Image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                required="required"
                type="text"
                onChange={this.onChangeItemImage}
                value={this.state.image}
              />
            </Form.Group>

            <Button variant="danger" size="lg" block="block" type="submit">
              Add Item
            </Button>
          </Form>
        </div>
      </>
    );
  }
}
