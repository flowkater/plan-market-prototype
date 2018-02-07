import { connect } from "react-redux"

import * as ActionCreators from "../actions"
import { PlanTemplate } from "../components"

const mapStateToProps = state => {
    return {
        planTemplate: state.planTemplate.get("planTemplate") ? state.planTemplate.get("planTemplate").toJS() : null
    }
}

const mapDispatchToProps = dispatch => ({
    requestGetPlanTemplate: (PlanTemplateId) => dispatch(ActionCreators.requestGetPlanTemplate(PlanTemplateId)),
    closeModal: () => dispatch(ActionCreators.closeModal())
})

const PlanTemplateContainer = connect(mapStateToProps, mapDispatchToProps)(PlanTemplate)

export default PlanTemplateContainer
