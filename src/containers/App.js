import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { IndexPlanTemplate, NewPlanTemplate } from ".";
import './App.scss';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={ IndexPlanTemplate } />
                <Route path="/index" component={ IndexPlanTemplate } />
                <Route path="/new" component={ NewPlanTemplate } />
            </div>
        );
    }
}

export default App;
