import { connect } from "react-redux"

import * as ActionCreators from "../actions"
import { PlanTemplateList } from "../components"

const mapStateToProps = state => ({
    planTemplateList: state.planTemplate.get("planTemplateList").toJS()
})

const mapDispatchToProps = dispatch => ({
    requestGetPlanTemplateList: () => dispatch(ActionCreators.requestGetPlanTemplateList()),
    requestGetPlanTemplate: (PlanTemplateId) => dispatch(ActionCreators.requestGetPlanTemplate(PlanTemplateId))
})

const PlanTemplateListContainer = connect(mapStateToProps, mapDispatchToProps)(PlanTemplateList)

export default PlanTemplateListContainer
