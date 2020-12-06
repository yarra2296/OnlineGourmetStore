import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Card, Button } from 'react-bootstrap';
import Pagination from "react-js-pagination";
import {
    Redirect,
    useHistory,
    withRouter
} from "react-router-dom";


class SamplePagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            data: this.props.data,
            updatedData: this.props.data,
            userName: "admine"
        };
        this.handlePageChange = this.handlePageChange.bind(this);
        this.openProductPage = this.openProductPage.bind(this);
    }

    componentDidMount() {
        let tempData = [];
        let data = this.state.data;
        for(var i = 0; i < 9; i++) {
            tempData.push(data[i]);
        }
        this.setState({
            updatedData: tempData,
        })
    }

    componentWillReceiveProps(nextProps) {
        let tempData = [];
        let data = nextProps.data;
        if(nextProps.data.length > 9) {
            for (var i = 0; i < 9; i++) {
                tempData.push(data[i]);
            }
        }
        else {
            for (var i = 0; i < nextProps.data.length; i++) {
                tempData.push(data[i]);
            }
        }
        this.setState({
            data: nextProps.data,
            updatedData: tempData,
            activePage: 1
        });
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        let tempData = [];
        if(9 * pageNumber < this.state.data.length) {
            for (var i = 9 * (pageNumber - 1); i < 9 * pageNumber; i++) {
                tempData.push(this.state.data[i])
            }
        }
        else {
            for (var i = 9 * (pageNumber - 1); i < this.state.data.length; i++) {
                tempData.push(this.state.data[i])
            }
        }
        this.setState({
            activePage: pageNumber,
            updatedData: tempData,
        });
        window.scrollTo(0, 350)
    }

    openProductPage(data) {
        console.log("Just for Testing", data);
        this.props.history.push("/productInfo",{ data: data });
    }

    render() {
        console.log(this.state.data.length);
        return(
            <div className={"mt-5 ml-5"}>
                <Pagination
                    width={1000}
                    hideFirstLastPages
                    itemClass="page-item"
                    linkClass="page-link"
                    activePage={this.state.activePage}
                    itemsCountPerPage={9}
                    totalItemsCount={this.state.data.length}
                    onChange={this.handlePageChange}
                />
                <div className={"row mt-5"}>
                    {this.state.updatedData.map((value) => {return (
                        <div className={"mr-3 mb-5"} style={{border: "1px solid black"}}>
                            {/*<img src={value.image}  alt={value.name} width={"30%"}/>*/}
                            {/*<h6>{value.name}</h6>*/}
                            {/*<p className={"center"}>{value.price}</p>*/}

                            <Card style={{ width: '19rem', border: 0 }} onClick={() => this.openProductPage(value)}>
                                <Card.Img variant="top" src={value.image} />
                                <Card.Body style={{textAlign: 'center'}}>
                                    <Card.Text style={{height: 50, overflow: 'hidden'}}>{value.name}</Card.Text>
                                    <Card.Text>
                                        ${value.price}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <div style={{textAlign: "center", backgroundColor: "white"}} className={"pb-3"}>
                                <div >
                                    {value.available ?
                                        <Button variant="primary" style={{backgroundColor: '#333B3F', height: 50}}>ADD TO CART</Button> :
                                        <Card.Text style={{height: 50, fontWeight: 800, fontSize: 20}}>SOLD OUT</Card.Text>
                                    }
                                </div>
                                <div className={"row ml-4 mt-3"}>
                                    <div className={"col-sm-4"}>
                                        {this.state.userName === "admin" ?
                                            <Button variant="primary" style={{backgroundColor: '#333B3F', height: 50, width: 80}}>EDIT</Button> :
                                            <div></div>
                                        }
                                    </div>
                                    <div className={"col-sm-8"}>
                                        {this.state.userName === "admin" ?
                                            <Button variant="primary" style={{backgroundColor: '#333B3F', height: 50, width: 80}}>DELETE</Button> :
                                            <div></div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )})}
                </div>
                <Pagination
                    width={1000}
                    hideFirstLastPages
                    itemClass="page-item"
                    linkClass="page-link"
                    activePage={this.state.activePage}
                    itemsCountPerPage={9}
                    totalItemsCount={this.state.data.length}
                    onChange={this.handlePageChange}
                />
            </div>
        );
    }
}

export default withRouter(SamplePagination);
