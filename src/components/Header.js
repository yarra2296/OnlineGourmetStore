import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import { getUserName } from "./getToken";
import {
  ADD_ITEM,
  PURCHASE_HISTORY,
  SHOPPING_CART,
  EDIT_ITEM,
  DELETE_ITEM,
  HOME,
} from "./urls";
import Home from "./Home";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: getUserName(),
    };
    this.logUserOut = this.logUserOut.bind(this);
    this.purchaseHistory = this.purchaseHistory.bind(this);
    this.shoppingCart = this.shoppingCart.bind(this);
    this.editItem = this.editItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.inserItem = this.inserItem.bind(this);
  }

  logUserOut(e) {
    e.preventDefault();
    localStorage.clear();
    this.props.history.push("/login");
  }
  inserItem(e) {
    e.preventDefault();
    this.props.history.push(ADD_ITEM);
  }
  purchaseHistory(e) {
    e.preventDefault();
    this.props.history.push(PURCHASE_HISTORY);
  }
  shoppingCart(e) {
    e.preventDefault();
    this.props.history.push(SHOPPING_CART);
  }
  editItem(e) {
    e.preventDefault();
    this.props.history.push(EDIT_ITEM);
  }
  deleteItem(e) {
    e.preventDefault();
    this.props.history.push(HOME);
  }

  render() {
    return (
      <div className={"main"}>
        {/*https://previews.123rf.com/images/antoshkaforever/antoshkaforever1604/antoshkaforever160400060/55371443-heart-with-silhouette-of-a-fork-on-a-white-background-gourmet-icon-delicious-food-lovely-food-icon-t.jpg*/}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-default navbar-fixed-top">
          <a className="navbar-brand" href="/">
            <img height={100} style={{borderRadius: 50}} src={"https://previews.123rf.com/images/antoshkaforever/antoshkaforever1604/antoshkaforever160400060/55371443-heart-with-silhouette-of-a-fork-on-a-white-background-gourmet-icon-delicious-food-lovely-food-icon-t.jpg"} alt={"Online Gourmet Store"}></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  HOME <span className="sr-only">(current)</span>
                </a>
              </li>
              {this.state.userName === "admin" ? (
                <div>
                  <li className="nav-item">
                    <a className="nav-link" onClick={this.inserItem}>
                      INSERT ITEMS<span className="sr-only">(current)</span>
                    </a>
                  </li>
                  {/*<li className="nav-item active">
                                        <a className="nav-link" href="/">HOME <span className="sr-only">(current)</span></a>
                                    </li>*/}
                </div>
              ) : (
                <div></div>
              )}
              <li className="nav-item">
                <a className="nav-link" onClick={this.shoppingCart}>
                  SHOPPING CART
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={this.purchaseHistory}>
                  PURCHASE HISTORY
                </a>
              </li>
              <li className="nav-item my-2 my-lg-0">
                <a className="nav-link" onClick={this.logUserOut}>
                  LOGOUT
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Header);
