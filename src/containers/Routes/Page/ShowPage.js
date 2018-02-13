import { connect } from "react-redux"
import { bindActionCreators } from "redux";

import RecipeModal from "components/Show/RecipeModal"
import * as getRecipeActions from "modules/getRecipe";

import React, { Component } from 'react';

class ShowPage extends Component {

    handleGetRecipeId = (id) => this.props.GetRecipeActions.requestGetRecipe(id)
    handleSetReceipeToNull = () => this.props.GetRecipeActions.setRecipeToNull()

    render() {
        const { recipe, match, status } = this.props;

        return (
            <RecipeModal
                recipe={recipe}
                status={status}
                match={match}
                onGetRecipe={
                    this.handleGetRecipeId
                }
                onSetRecipeToNull={
                    this.handleSetReceipeToNull
                }
            />
        );
    }
}

export default connect(
    state => ({
        recipe: state.getRecipe.get("recipe").toJS(),
        status: state.getRecipe.get("showStatus")
    }),
    dispatch => ({
        GetRecipeActions: bindActionCreators(getRecipeActions, dispatch)
    })
)(ShowPage);