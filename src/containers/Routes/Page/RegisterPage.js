import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as auth from 'modules/auth'
import { Container } from "reactstrap";

import RegisterForm from "components/Register/RegisterForm";

class RegisterPage extends Component {
    handleRegister = () => {
        const { AuthActions } = this.props;

        AuthActions.requestRegister()
    }

    render() {
        return (
            <Container>
                <RegisterForm
                    onRegister={this.handleRegister} />
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
)(RegisterPage);;