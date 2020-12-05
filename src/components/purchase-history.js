import React, { Component } from "react";
import axios from "axios";
import { URL_PURCHASE_HISTORY } from "./urls";
import { Accordion, Card, Table } from "react-bootstrap";

export default class PurchaseHistory extends Component {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = [];

    axios.get(URL_PURCHASE_HISTORY).then((res) => {
      console.log(res.data);

      //load data
    });

    //dummy data
    var data = {
      id: "1",
      timeStamp: "time stamp 1",
      products: [
        { id: "1", name: "product 1", price: "$100", quantity: "3" },
        { id: "2", name: "product 2", price: "$200", quantity: "3" },
        { id: "3", name: "product 3", price: "$300", quantity: "3" },
      ],
    };

    this.state.push(data);

    data = {
      id: "2",
      timeStamp: "time stamp 2",
      products: [
        { id: "1", name: "product 11", price: "$100", quantity: "3" },
        { id: "2", name: "product 12", price: "$200", quantity: "3" },
        { id: "3", name: "product 13", price: "$300", quantity: "3" },
      ],
    };

    this.state.push(data);
  }

  render() {
    return (
      <Accordion defaultActiveKey="0">
        {this.state.map(function (purchase) {
          return (
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey={purchase.id}>
                {purchase.timeStamp}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={purchase.id}>
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
