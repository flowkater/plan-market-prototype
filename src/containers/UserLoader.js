import { Component } from 'react';
import * as auth from 'modules/auth'
import storage from 'helpers/storage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class UserLoader extends Component {
    checkLoginStatus = () => {
        const { AuthActions } = this.props;

        const user = storage.get('__PRTD_USER__');
        console.log(user);

        if(user) {
            AuthActions.setUser(user);
        }

        AuthActions.checkLoginStatus();
    }
    
    componentWillMount() {
        this.checkLoginStatus();
    }

    render() {
        return null;
    }
}

export default connect(
    state => ({
        user: state.auth.get('user').toJS(),
        status: state.auth.get('status')
    }),
    dispatch => ({
        AuthActions: bindActionCreators(auth, dispatch)
    })
)(UserLoader);