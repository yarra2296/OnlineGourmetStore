import React, { Component } from 'react';
import {
    withRouter
} from 'react-router-dom';

class Footer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div>
                <footer className="page-footer font-small blue">
                    <div className="footer-copyright text-center py-3">© 2018 Copyright:
                        <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
                    </div>
                </footer>
            </div>
        )
    }

}

export default withRouter(Footer);
