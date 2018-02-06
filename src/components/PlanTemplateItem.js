import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';

class PlanTemplateItem extends Component {
    render() {
        const { planTemplate } = this.props
        return (
            <div>
                <Link to={"/plan_templates/" + planTemplate.id}>
                    <h3>{planTemplate.name}</h3>
                    <p>{planTemplate.description}</p>
                </Link>
            </div>
        )
    }
}

PlanTemplateItem.propTypes = {
    planTemplate: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        summary: PropTypes.string
    }).isRequired
}

export default PlanTemplateItem
