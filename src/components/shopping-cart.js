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
      .then((res) => {});
    //this.state.props.push(PAYMENT_SUCCESS);
  }

  onDeleteItemClick(e, idx) {
    alert("button clicked!" + idx);
    // axios
    //   .delete(
    //     URL_REMOVE_PRODUCT_FROM_CART + "/" + this.state.data._id + "/" + idx,
    //     {
    //       headers: { "auth-token": getJWTToken() },
    //     }
    //   )
    //   .then((res) => {});
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
                      <input type="number" value={product.quantity} />
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
