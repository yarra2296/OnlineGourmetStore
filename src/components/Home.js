import React, { Component } from 'react';
import {
    withRouter
} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 90384023403248320982304234,
                    image: "",
                    name: "",
                    price: 80,
                    category: "",
                    quantity: 10
                },
            ]
        }
    }

    render() {
        return(
            <div className={"main"}>
                <Header />
                {/*<h1>Hello</h1>*/}
                {/*<Footer style={"display: sticky; bottom: 0px"}/>*/}
            </div>
        )
    }

}

export default withRouter(Home);
