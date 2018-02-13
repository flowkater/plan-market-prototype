import { connect } from "react-redux"
import { bindActionCreators } from "redux";

import RecipeList from "components/List/RecipeList"
import * as getRecipeActions from "modules/getRecipe";

import React, { Component } from 'react';

class ListPage extends Component {
    componentDidMount() {
        const { GetRecipeActions } = this.props;
        GetRecipeActions.requestGetRecipeList();
    }

    render() {
        const { recipeList } = this.props;
        return (
            <RecipeList 
                recipeList={recipeList}
            />
        );
    }
}

export default connect(
    state => ({
        recipeList: state.getRecipe.get("recipeList").toJS(),
    }),
    dispatch => ({
        GetRecipeActions: bindActionCreators(getRecipeActions, dispatch)
    })
)(ListPage);