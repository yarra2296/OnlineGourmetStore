import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Header from "./Header";
import {
  URL_GET_EDIT_PRODUCT,
  URL_PUT_UPDATE_PRODUCT,
  URL_DELETE_PRODUCT,
} from "./urls";

export default class UpdateItem extends Component {
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
    this.deleteItem = this.deleteItem.bind(this);

    // Setting up state
    this.state = {
      name: "",
      price: "",
      category: "",
      quantity: "",
      description: "",
      image: "",
      id: this.props.location.state.id
    };
  }

  componentDidMount() {
    console.log(this.props.location.state.id);
    axios
      .get(URL_GET_EDIT_PRODUCT + this.props.location.state.id)
      .then((res) => {
        this.setState({
          id: res.data.id,
          name: res.data.name,
          price: res.data.price,
          category: res.data.category,
          quantity: res.data.quantity,
          description: res.data.description,
          image: res.data.image,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeItemId(e) {
    this.setState({ id: e.target.value });
  }

  onChangeItemDescription(e) {
    this.setState({ description: e.target.value });
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
    };

    axios
      .put(URL_PUT_UPDATE_PRODUCT + this.props.location.state.id, itemObject)
      .then((res) => {
        console.log(res.data);
        console.log("Item successfully updated");

        // Redirect to Homepage
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteItem() {
    console.log("del state:"+this.state.id);
    axios
      .delete(URL_DELETE_PRODUCT + this.props.location.state.id)
      .then((res) => {
        console.log("Item successfully deleted!");
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <Header userName={this.state.userName} />
        <div class="container">
        <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-8">
        <div className="form-wrapper">
        <h2 className="title1" align="center"> Update Item </h2>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.name}
              onChange={this.onChangeItemName}
            />
          </Form.Group>

          <Form.Group controlId="Price">
            <Form.Label>Price</Form.Label>
            <Form.Control
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
              <option value="condiments">Condiments, Butters & Spreads</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="Quantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="text"
              value={this.state.quantity}
              onChange={this.onChangeItemQuantity}
            />
          </Form.Group>

          <Form.Group controlId="Description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={this.state.description}
              onChange={this.onChangeItemDescription}
            />
          </Form.Group>

          <Form.Group controlId="Image">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              onChange={this.onChangeItemImage}
              value={this.state.image}
            />
          </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit">
            Update Item
          </Button>

          <Button
            onClick={this.deleteItem}
            variant="danger"
            size="lg"
            block="block"
          >
            Delete Item
          </Button>
          </Form>
        </div>
        </div>
        <div class="col-sm-2"></div>
        </div>
        </div>
        </>
    );
  }
}
