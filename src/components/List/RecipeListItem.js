import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class RecipeListItem extends Component {
    render() {
        const { recipe } = this.props;
        return (
            <div className="PlanTemplateItem">
                <Link
                    className="PlanTemplateItemButton"
                    to={`/plan_templates/${recipe.id}`}
                >
                    <h4 className="Name">{recipe.name}</h4>
                    <p className="Description">{recipe.description}</p>
                </Link>
            </div>
        );
    }
}

RecipeListItem.propTypes = {
    recipe: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        summary: PropTypes.string
    }).isRequired
};

export default RecipeListItem;
