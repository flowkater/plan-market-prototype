import { connect } from "react-redux"

import * as ActionCreators from "../actions"
import { PlanTemplate } from "../components"

const mapStateToProps = state => {
    return {
        planTemplate: state.planTemplate.get("planTemplate").toJS()
    }
}

const mapDispatchToProps = dispatch => ({
    requestGetPlanTemplate: () => dispatch(ActionCreators.requestGetPlanTemplate())
})

const PlanTemplateContainer = connect(mapStateToProps, mapDispatchToProps)(PlanTemplate)

export default PlanTemplateContainer
