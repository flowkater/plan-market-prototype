import React, { Component } from 'react';
import { ConnectedRouter as Router } from "react-router-redux";
import { Provider } from "react-redux";
import App from "./App";

class Root extends Component {
    render() {
        const { store, history } = this.props;

        return (
            <Provider store={store}>
                <Router history={history}>
                    <App />
                </Router>
            </Provider>
        );
    }
}

export default Root;