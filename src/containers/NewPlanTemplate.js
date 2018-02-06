import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { PlanTemplateForm } from '../components';
import './NewPlanTemplate.scss'

import { bindActionCreators } from "redux";
import { connect  } from 'react-redux';

import * as newTaskTemplateListActions from '../modules/newTaskTemplateList'
import * as newPlanTemplateActions from "../modules/newPlanTemplate";
import * as alertActions from "../modules/alert";

import Alert from 'react-s-alert';

class NewPlanTemplate extends Component {


    render() {
        const { NewPlanTemplateActions, AlertActions, alertStatus } = this.props;
        if(alertStatus === "SUCCESS"){
            Alert.success('<h1>전송 성공!!</h1>');
            AlertActions.setAlert('NOTHING');
        }else if(alertStatus === "FAILURE"){
            Alert.error('<h1>전송 실패..</h1>');
            AlertActions.setAlert('NOTHING');
        }

        return (
            <Container>
                <h1>새로운 계획 작성</h1>
                <PlanTemplateForm 
                    handleSubmit={NewPlanTemplateActions.requestPostPlanTemplate} 
                    taskTemplateItem={this.props.taskTemplateItem}
                    taskTemplateList={this.props.taskTemplateList}
                    formType={this.props.formType}
                    toggle={this.props.toggle}
                    NewTaskTemplateListActions={this.props.NewTaskTemplateListActions}
                />
            </Container>
        );
    }
}

export default connect(
    (state) => ({
        taskTemplateList: state.newTaskTemplateList.get('taskTemplateList').toJS(),
        taskTemplateItem: state.newTaskTemplateList.get('taskTemplateItem').toJS(),
        formType: state.newTaskTemplateList.get('formType'),
        toggle: state.newTaskTemplateList.get('toggle'),
        alertStatus: state.alert.get('status'),
    }),
    (dispatch) => ({
        NewTaskTemplateListActions: bindActionCreators(newTaskTemplateListActions, dispatch),
        NewPlanTemplateActions: bindActionCreators(newPlanTemplateActions, dispatch),
        AlertActions: bindActionCreators(alertActions, dispatch)
    })
)(NewPlanTemplate);