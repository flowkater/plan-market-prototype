import React, { Component } from "react";
import PropTypes from "prop-types";

import PlanTemplateItem from "./PlanTemplateItem";

import "./PlanTemplateList.scss";

class PlanTemplateList extends Component {
    constructor(props) {
        super(props);

        this.toPlanTemplateItem = this.toPlanTemplateItem.bind(this);

        console.log(this.props);
    }

    toPlanTemplateItem(planTemplate, index) {
        return <PlanTemplateItem key={index} planTemplate={planTemplate} />;
    }

    componentDidMount() {
        this.props.requestGetPlanTemplateList();
    }

    render() {
        const { planTemplateList } = this.props;
        return (
            <div className="PlanTemplateList">
                <div className="PlanTemplateItemContainer">
                    {planTemplateList.map(this.toPlanTemplateItem)}
                </div>
            </div>
        );
    }
}

PlanTemplateList.propTypes = {
    planTemplateList: PropTypes.array.isRequired,
    requestGetPlanTemplateList: PropTypes.func.isRequired
};

export default PlanTemplateList;
