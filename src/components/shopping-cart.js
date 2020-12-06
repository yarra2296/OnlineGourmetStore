import React, { Component } from "react";
import axios from "axios";
import { URL_PURCHASE_HISTORY } from "./urls";
import { Accordion, Card, Table } from "react-bootstrap";
import { getJWTToken } from "./getToken";

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);

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
      <Accordion defaultActiveKey="0">
        {this.state.data.map(function (purchase) {
          return (
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey={purchase._id}>
                {purchase.purchaseDate}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={purchase._id}>
                <Card.Body>
                  <Table responsive="md">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {purchase.products.map(function (product) {
                        return (
                          <tr id={purchase.id + product.id}>
                            <td>1</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          );
        })}
      </Accordion>
    );
  }
}
