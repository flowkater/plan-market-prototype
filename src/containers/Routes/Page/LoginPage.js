import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as auth from 'modules/auth'

import LoginForm from "components/Login/LoginForm";

import { Container } from "reactstrap";
import storage from 'helpers/storage';


class LoginPage extends Component {
    handleLogin = () => {
        const { AuthActions } = this.props;

        AuthActions.requestLogin()
    }

    componentWillMount() {
        const { AuthActions } = this.props;

        const user = storage.get('__PRTD_USER__');
        console.log(user);

        if(user) {
            console.log("redirectRoot")
            AuthActions.redirectRoot();
        }
    }

    render() {
        return (
            <Container>
                <LoginForm
                    onLogin={this.handleLogin} />
            </Container>
        );
    }
}

export default connect(
    state => ({
        user: state.auth.get('user'),
        status: state.auth.get('status')
    }),
    dispatch => ({
        AuthActions: bindActionCreators(auth, dispatch)
    })
)(LoginPage);