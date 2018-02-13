import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';

import Alert from "react-s-alert";
import Header from 'components/Base/Header'

// routes
import Routes from "./Routes";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router";

import * as auth from 'modules/auth'
import storage from 'helpers/storage';

class App extends Component {

    checkLoginStatus = () => {
        const { AuthActions } = this.props;

        const user = storage.get('__PRTD_USER__');
        let token;

        if(user) {
            AuthActions.setUser(user);
            token = user.token
        }

        AuthActions.checkLoginStatus();

        if(token) {
            
            console.log("success Login!")
        } else {
            console.log("Not Login");
            AuthActions.noAuth();
        }
    }
    
    componentWillMount() {
        this.checkLoginStatus();
    }

    render() {
        const { status } = this.props;
        return (
            <div className="App">
                {status === "SUCCESS" ? (<Header />) : null}
                <Routes />       
                <Alert 
                    effect='jelly'
                    stack={{limit: 3}} 
                    timeout={5000}
                    position='top-right'   
                    html={true} />
            </div>
        );
    }
}

export default withRouter(connect(
    state => ({
        user: state.auth.get('user'),
        status: state.auth.get('status')
    }),
    dispatch => ({
        AuthActions: bindActionCreators(auth, dispatch)
    })
)(App));


