import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';

import Alert from "react-s-alert";
import Header from 'components/Base/Header'

// routes
import Routes from "./Routes";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
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

export default App;
