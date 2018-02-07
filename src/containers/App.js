import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { PlanTemplateListContainer, NewPlanTemplate } from ".";
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route exact path="/" component={ NewPlanTemplate } />
                <Route path="/plan_templates" component={ PlanTemplateListContainer } />
                <Route path="/new" component={ NewPlanTemplate } />
            </div>
        );
    }
}

export default App;
