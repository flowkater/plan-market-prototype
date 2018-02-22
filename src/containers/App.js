import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';

import Alert from "react-s-alert";
import Header from 'components/Base/Header'

// routes
import Routes from "./Routes";

import { connect } from 'react-redux';
import { withRouter } from "react-router";

import UserLoader from "./UserLoader";

class App extends Component {
    render() {
        const { status, user } = this.props;
        return (
            <div className="App">
                {status === "SUCCESS" || user.access_token ? (<Header />) : null}
                <Routes />       
                <Alert 
                    effect='jelly'
                    stack={{limit: 3}} 
                    timeout={5000}
                    position='top-right'   
                    html={true} />
                <UserLoader />
            </div>
        );
    }
}

export default withRouter(connect(
    state => ({
        user: state.auth.get('user').toJS(),
        status: state.auth.get('status')
    }),
    null
)(App));


