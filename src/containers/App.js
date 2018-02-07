import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Alert from "react-s-alert";

import { PlanTemplateListContainer, NewPlanTemplate, PlanTemplateContainer } from ".";

import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route exact path="/" component={ NewPlanTemplate } />
                <Route path="/plan_templates" component={ PlanTemplateListContainer } />
                <Route path="/plan_templates/:plan_template_id" component={ PlanTemplateContainer } />
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
