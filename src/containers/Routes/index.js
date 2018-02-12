import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { 
    CreatePage,
    ListPage,
    ShowPage
} from "./Routes";

class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={ ListPage } />
                <Route path="/recipes" component={ ListPage } />
                <Route path="/recipes/:recipe_id" component={ ShowPage } /> 
                <Route path="/new" component={ CreatePage } />                
            </div>
        );
    }
}

export default Routes;

