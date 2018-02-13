import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as auth from 'modules/auth'
import { Link } from "react-router-dom";

class LoginPage extends Component {
    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <Link to='/register'>
                    회원가입
                </Link>
            </div>
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