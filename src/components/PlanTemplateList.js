import React, { Component } from 'react';
import PropTypes from "prop-types";

import PlanTemplateItem from "./PlanTemplateItem"

class PlanTemplateList extends Component {
    constructor(props) {
        super(props)

        this.toPlanTemplateItem = this.toPlanTemplateItem.bind(this)
    }

    toPlanTemplateItem(planTemplate, index) {
        return (
            <PlanTemplateItem 
                key={index} 
                planTemplate={planTemplate}/>
        )
    }

    componentDidMount() {
        this.props.requestGetPlanTemplateList()
    }

    render() {
        const { planTemplateList } = this.props

        return (
            <div>
                {planTemplateList.map(this.toPlanTemplateItem)}
            </div>
        )
    }
}

PlanTemplateList.propTypes = {
    planTemplateList: PropTypes.array.isRequired,
    requestGetPlanTemplateList: PropTypes.func.isRequired
}

export default PlanTemplateList
