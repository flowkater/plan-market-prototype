import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./PlanTemplateItem.scss";

class PlanTemplateItem extends Component {
    render() {
        const { planTemplate, requestGetPlanTemplate } = this.props;
        return (
            <div className="PlanTemplateItem">
                <Link
                    className="PlanTemplateItemButton"
                    to={`/plan_templates/${planTemplate.id}`}
                    onClick={() => requestGetPlanTemplate({planTemplateId: planTemplate.id})}
                >
                    <h4 className="Name">{planTemplate.name}</h4>
                    <p className="Description">{planTemplate.description}</p>
                </Link>
            </div>
        );
    }
}

PlanTemplateItem.propTypes = {
    planTemplate: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        summary: PropTypes.string
    }).isRequired
};

export default PlanTemplateItem;
