import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { 
    CreatePage,
    ListPage,
    // ShowPage
} from "./Routes";

class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={ ListPage } />
                <Route path="/plan_templates" component={ ListPage } />
                }
                <Route path="/new" component={ CreatePage } />
            </div>
        );
    }
}

export default Routes;

{/* <Route path="/plan_templates/:plan_template_id" component={ ShowPage } />  */}