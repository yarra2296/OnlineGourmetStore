import React, { Component } from 'react';
import {
    withRouter
} from "react-router-dom";
import Header from "./Header";
import {Button, Card} from "react-bootstrap";
import Footer from "./Footer";
import {getUserName} from "./getToken";
import {EDIT_ITEM} from "./urls";


class ProductInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.location.state.data,
            userName: getUserName()
        }
        this.openPage = this.openPage.bind(this);
    }

    openPage(e, data, name) {
        console.log("data in product info is:",data);
        if(name === "edit") {
            e.preventDefault();
            this.props.history.push(EDIT_ITEM, {id: this.state.data._id});
        }
        if(name === "delete") {
            e.preventDefault();
            this.props.history.push(EDIT_ITEM, {id: this.state.data._id});
        }
    }

    render() {
        return (
            <div className={"main bg-light"}>
                <Header userName={this.state.userName}/>
                <div>
                    <div className={"row"} style={{marginLeft: "10%", marginRight: "10%", backgroundColor: "white", overflowY: "hidden"}}>
                        <div className={"col-md-6 pt-5 pb-5"}>
                            <img src={this.state.data.image} width={"90%"} style={{marginLeft: "8%"}}></img>
                        </div>
                        <div className={"col-md-6 pt-5 pb-5"}>
                            <div>
                                <h3 className={"mb-5"}>Product Details</h3>
                                <h5 className={"mb-1"}>Product Name:</h5>
                                <p className={"mb-5"}>{this.state.data.name}</p>
                                <h5 className={"mb-1"}>Description:</h5>
                                <p className={"mb-5"}>{this.state.data.description}</p>
                                <h5 className={"mb-1"}>Price:</h5>
                                <p className={"mb-5"}>${this.state.data.price}</p>
                            </div>
                            <div>
                                {this.state.data.available ?
                                    <Button variant="primary" style={{backgroundColor: '#333B3F', height: 50, width: 500}}>ADD TO CART</Button> :
                                    <Card.Text style={{height: 50, textAlign: "center", fontWeight: 800, fontSize: 20}}>SOLD OUT</Card.Text>
                                }
                            </div>
                            <div className={"row text-align-center mt-3"}>
                                <div className={"col ml-2"}>
                                    {this.state.userName === "admin" ?
                                        <Button variant="primary" style={{backgroundColor: '#333B3F', height: 50, width: 200}} onClick={(e) => this.openPage(e, this.state.data, "edit")}>EDIT</Button> :
                                        <div></div>
                                    }
                                </div>
                                <div className={"col"}>
                                    {this.state.userName === "admin" ?
                                        <Button variant="primary" style={{backgroundColor: '#333B3F', height: 50, width: 200}} onClick={(e) => this.openPage(e, this.state.data, "delete")}>DELETE</Button> :
                                        <div></div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer style={"display: sticky; bottom: 0px"}/>
            </div>
        );
    }
}

export default withRouter(ProductInfo);
