import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Alert from "react-s-alert";
import { Container } from "reactstrap";

import { PlanTemplateForm } from "../components";
import * as newTaskTemplateListActions from "../modules/newTaskTemplateList";
import * as newPlanTemplateActions from "../modules/newPlanTemplate";
import * as alertActions from "../modules/alert";

import "./NewPlanTemplate.scss";
import Redirect from "react-router-dom/Redirect";

class NewPlanTemplate extends Component {
    render() {
        const {
            NewPlanTemplateActions,
            AlertActions,
            alertStatus,
            newPlanTemplateId
        } = this.props;

        console.log("렌더렌더러러러러");
        

        if (alertStatus === "SUCCESS") {
            Alert.success("<h1>전송 성공!!</h1>");
            AlertActions.setAlert("NOTHING");

            if (newPlanTemplateId) {
                return <Redirect to={`/plan_templates/${newPlanTemplateId}`} />;
            }
        } else if (alertStatus === "FAILURE") {
            Alert.error("<h1>전송 실패..</h1>");
            AlertActions.setAlert("NOTHING");
        }

        return (
            <Container>
                <h1>새로운 계획 작성</h1>
                <PlanTemplateForm
                    handleSubmit={
                        NewPlanTemplateActions.requestPostPlanTemplate
                    }
                    taskTemplateItem={this.props.taskTemplateItem}
                    taskTemplateList={this.props.taskTemplateList}
                    formType={this.props.formType}
                    toggle={this.props.toggle}
                    NewTaskTemplateListActions={
                        this.props.NewTaskTemplateListActions
                    }
                />
            </Container>
        );
    }
}

export default connect(
    state => ({
        taskTemplateList: state.newTaskTemplateList
            .get("taskTemplateList")
            .toJS(),
        taskTemplateItem: state.newTaskTemplateList
            .get("taskTemplateItem")
            .toJS(),
        formType: state.newTaskTemplateList.get("formType"),
        toggle: state.newTaskTemplateList.get("toggle"),
        alertStatus: state.alert.get("status"),
        newPlanTemplateId: state.newPlanTemplate.get("newPlanTemplateId")
    }),
    dispatch => ({
        NewTaskTemplateListActions: bindActionCreators(
            newTaskTemplateListActions,
            dispatch
        ),
        NewPlanTemplateActions: bindActionCreators(
            newPlanTemplateActions,
            dispatch
        ),
        AlertActions: bindActionCreators(alertActions, dispatch)
    })
)(NewPlanTemplate);
