import React, { Component } from "react";
import axios from "axios";
import { URL_PURCHASE_HISTORY } from "./urls";
import { Accordion, Card, Table } from "react-bootstrap";
import { getJWTToken } from "./getToken";
import Header from "./Header";

export default class PurchaseHistory extends Component {
  constructor(props) {
    super(props);

    if (getJWTToken() === null) {
      props.history.push("/login");
    }

    // Setting up state
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const _token = getJWTToken();
    axios
      .get(URL_PURCHASE_HISTORY, {
        headers: { "auth-token": _token },
      })
      .then((res) => {
        console.log(res.data);
        this.setState({
          data: res.data,
        });
        //load data
      });
  }

  render() {
    return (
      <>
        <Header></Header>
        <div
          className="container"
          style={{ border: "2px black solid", marginTop: "20px" }}
        >
          {this.state.data.map(function (purchase) {
            return (
              <div>
                <b>
                  {"order ID:" + purchase._id}
                  <br />
                  {"Purchase Date: " + purchase.purchaseDate.substring(0, 10)}
                </b>
                <hr />
                <div>
                  <Table responsive="md">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price per item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {purchase.products.map(function (product) {
                        return (
                          <tr id={purchase.id + product.id}>
                            <td>
                              <img
                                src={product.image}
                                alt="product image"
                                height="100px"
                                width="100px"
                              />
                            </td>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <td>{product.quantity}</td>
                            <td>${product.price * product.quantity}</td>
                          </tr>
                        );
                      })}
                      <tr id={purchase.id + "total"}>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <b>Total Price: </b>
                        </td>
                        <td>
                          <b>${purchase.totalPrice}</b>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <hr />
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
