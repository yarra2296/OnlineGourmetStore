import React, { Component } from "react";
import axios from "axios";
import {
  URL_CHECKOUT_PRODUCTS_IN_CART,
  URL_GET_PRODUCTS_IN_CART,
  PAYMENT_SUCCESS,
  URL_FINAL_CHECKOUT,
  URL_REMOVE_PRODUCT_FROM_CART,
} from "./urls";
import { Table } from "react-bootstrap";
import { getJWTToken, getUserName } from "./getToken";
import Header from "./Header";

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    if (getJWTToken() === null) {
      props.history.push("/login");
    }

    // Setting up state
    this.state = {
      data: {},
      totalCartPrice: 0,
    };

    this.onCheckOut = this.onCheckOut.bind(this);

    //this.onChangeQuantity = this.onChangeQuantity.bind(this);

    this.onDeleteItemClick = this.onDeleteItemClick.bind(this);

    this.updateCount = this.updateCount.bind(this);
  }

  componentDidMount() {
    const _token = getJWTToken();
    let _count = 0;

    axios
      .get(URL_GET_PRODUCTS_IN_CART, {
        headers: { "auth-token": _token },
      })
      .then((res) => {
        if (res.data !== null) {
          res.data.products.forEach((product) => {
            _count = _count + product.price * product.quantity;
          });
          this.setState({
            data: res.data,
            totalCartPrice: _count,
          });
        }
        console.log(this.state.data);
      });
  }
  //onDeleteItem(e) {}
  //onChangeQuantity(e) {}

  onCheckOut(e) {
    e.preventDefault();
    const _token = getJWTToken();

    let _data = {};
    _data.products = this.state.data.products;
    _data.totalPrice = this.state.totalCartPrice;
    _data.userId = this.state.data.userId;

    axios
      .post(URL_FINAL_CHECKOUT, {
        headers: { "auth-token": _token },
        _data,
      })
      .then((res) => {
        this.props.history.push(PAYMENT_SUCCESS);
      });
  }

  onDeleteItemClick(e, idx) {
    let total_data = this.state.data;
    const old_data = this.state.data.products;
    let _count = 0;
    axios
      .delete(
        URL_REMOVE_PRODUCT_FROM_CART + "/" + this.state.data._id + "/" + idx,
        {
          headers: { "auth-token": getJWTToken() },
        }
      )
      .then((res) => {
        const index = old_data.findIndex((value) => value.id === idx);
        total_data.products.splice(index, 1);
        total_data.products.forEach((product) => {
          _count = _count + product.price * product.quantity;
        });
        this.setState({
          data: total_data,
          totalCartPrice: _count,
        });
      });
  }

  updateCount(e, data) {
    console.log(data);
    let total_data = this.state.data;
    const old_data = this.state.data.products;
    const idx = old_data.findIndex((value) => value.id === data.id);
    total_data.products[idx].quantity = e.target.value;
    let _count = 0;
    axios
      .put(
        "http://localhost:4000/cart/updatequantity/" + this.state.data._id,
        this.state.data.products,
        { headers: { "auth-token": getJWTToken() } }
      )
      .then((res) => {
        console.log(res);
        console.log("Item successfully updated");
        this.state.data.products.forEach((product) => {
          _count = _count + product.price * product.quantity;
        });
        this.setState({ data: total_data, totalCartPrice: _count });
        // Redirect to Homepage
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <Header />
        {Object.keys(this.state.data).length !== 0 ? (
          <Table responsive="md">
            <thead>
              <tr>
                <th> #</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th> Action </th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.products.map((product, idx) => {
                return (
                  <tr id={product.id}>
                    <td>{idx + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                      <input
                        onChange={(e) => this.updateCount(e, product)}
                        type="number"
                        value={product.quantity}
                      />
                    </td>
                    <td>{product.price * product.quantity}</td>
                    <td>
                      <button
                        className="btn-danger"
                        onClick={(e) => {
                          this.onDeleteItemClick(e, product.id);
                        }}
                      >
                        remove
                      </button>
                    </td>
                  </tr>
                );
              })}

              <tr id="total">
                <td></td>
                <td></td>
                <td></td>
                <td>Total cart price: </td>
                <td>{this.state.totalCartPrice}</td>
                <td>
                  <button className="btn-primary" onClick={this.onCheckOut}>
                    {" "}
                    checkout
                  </button>
                </td>
              </tr>
            </tbody>
          </Table>
        ) : (
          <h3> No products in your cart</h3>
        )}
      </>
    );
  }
}
