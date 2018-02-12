import React, { Component } from "react";
import PropTypes from "prop-types";
import RecipeListItem from "./RecipeListItem";

class RecipeList extends Component {
    render() {
        const { recipeList } = this.props;
      
        return (
            <div className="PlanTemplateList">
                <div className="PlanTemplateItemContainer">
                    {recipeList.map((recipe, index) => (
                        <RecipeListItem 
                            key={index} 
                            recipe={recipe}
                            onGetRecipe={this.props.onGetRecipe}/>
                    ))}
                </div>
            </div>
        );
    }
}

RecipeList.propTypes = {
    recipeList: PropTypes.array.isRequired
};

export default RecipeList;
