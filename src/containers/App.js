import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { IndexPlanTemplate, NewPlanTemplate } from ".";
import Alert from "react-s-alert";
import './App.scss';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={ IndexPlanTemplate } />
                <Route path="/index" component={ IndexPlanTemplate } />
                <Route path="/new" component={ NewPlanTemplate } />
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
