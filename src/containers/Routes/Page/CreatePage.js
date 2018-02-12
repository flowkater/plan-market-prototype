import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Alert from "react-s-alert";
import { Container } from "reactstrap";

import PlanTemplateForm from "components/Create/RecipeForm";
import * as taskFormActions from "modules/taskForm";
import * as createRecipeActions from "modules/createRecipe";
import * as alertActions from "modules/alert";

import Redirect from "react-router-dom/Redirect";

class CreatePage extends Component {
    render() {
        const {
            taskList,
            taskItem,
            CreateRecipeActions,
            TaskFormActions,
            AlertActions,
            alertStatus,
            recipeId,
            formType,
            toggle
        } = this.props;

        if (alertStatus === "SUCCESS") {
            Alert.success("<h1>전송 성공!!</h1>");
            AlertActions.setAlert("NOTHING");

            if (recipeId) {
                return <Redirect to={`/plan_templates/${recipeId}`} />;
            }
        } else if (alertStatus === "FAILURE") {
            Alert.error("<h1>전송 실패..</h1>");
            AlertActions.setAlert("NOTHING");
        }

        return (
            <Container>
                <h1>새로운 계획 작성</h1>
                <PlanTemplateForm
                    CreateRecipeActions={
                        CreateRecipeActions
                    }
                    taskItem={taskItem}
                    taskList={taskList}
                    formType={formType}
                    toggle={toggle}
                    TaskFormActions={
                        TaskFormActions
                    }
                />
            </Container>
        );
    }
}

export default connect(
    state => ({
        taskList: state.taskForm.get("taskList").toJS(),
        taskItem: state.taskForm.get("taskItem").toJS(),
        formType: state.taskForm.get("formType"),
        toggle: state.taskForm.get("toggle"),
        alertStatus: state.alert.get("status"),
        recipeId: state.createRecipe.get("recipeId")
    }),
    dispatch => ({
        TaskFormActions: bindActionCreators(
            taskFormActions,
            dispatch
        ),
        CreateRecipeActions: bindActionCreators(
            createRecipeActions,
            dispatch
        ),
        AlertActions: bindActionCreators(alertActions, dispatch)
    })
)(CreatePage);
