import React, { Component } from 'react';
import {
    withRouter
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: this.props.userName,
        }
    }

    render() {
        return(
            <div className={"main"}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-default navbar-fixed-top">
                    <a className="navbar-brand" href="/">Online Gorment Store</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">HOME <span className="sr-only">(current)</span></a>
                            </li>
                            {this.state.userName === "admin" ?
                                <div>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">INSERT ITEMS<span className="sr-only">(current)</span></a>
                                    </li>
                                    {/*<li className="nav-item active">
                                        <a className="nav-link" href="/">HOME <span className="sr-only">(current)</span></a>
                                    </li>*/}
                                </div> :
                                <div>

                                </div>
                            }
                            <li className="nav-item">
                                <a className="nav-link" href="#">SHOPPING CART</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">PURCHASE HISTORY</a>
                            </li>
                            <li className="nav-item my-2 my-lg-0">
                                <a className="nav-link" href="#">LOGOUT</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
};

export default withRouter(Header);
