import React, { Component } from 'react';
import { connect } from 'react-redux';
import { change } from 'redux-form/immutable';
import { Button } from "reactstrap";

class NewTaskTemplateItem extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            weekdays: [
                {key: 'monday', value: '월'}, 
                {key: 'tuesday',value:'화'}, 
                {key: 'wednesday', value: '수'}, 
                {key: 'thursday', value: '목'}, 
                {key: 'friday', value: '금'}, 
                {key: 'saturday', value: '토'}, 
                {key: 'sunday', value: '일'}]
        };
           
    }
    
    onEdit() {
        const { NewTaskTemplateListActions, modal, taskTemplate, dispatch, index } = this.props;
        NewTaskTemplateListActions.toggleNewTaskTemplate(!modal);
        NewTaskTemplateListActions.editNewTaskTemplate({taskTemplateItem: taskTemplate, index: index});
        dispatch(change('taskTemplate', 'name', taskTemplate.name))
        dispatch(change('taskTemplate', 'task_template_type', taskTemplate.task_template_type))
        dispatch(change('taskTemplate', 'description', taskTemplate.description))
        dispatch(change('taskTemplate', 'amount', taskTemplate.amount))
        dispatch(change('taskTemplate', 'unit', taskTemplate.unit))
        dispatch(change('taskTemplate', 'learning_minutes', taskTemplate.learning_minutes))
        this.state.weekdays.forEach((weekday) => {
            dispatch(change('taskTemplate', weekday.key, taskTemplate[weekday.key]))
        });
    }

    onUp(e) {
        e.preventDefault();
        const { NewTaskTemplateListActions, taskTemplate } = this.props;
        NewTaskTemplateListActions.upNewTaskTemplate(taskTemplate.order);
    }

    onDown(e) {
        e.preventDefault();
        const { NewTaskTemplateListActions, taskTemplate } = this.props;
        NewTaskTemplateListActions.downNewTaskTemplate(taskTemplate.order);
    }

    onRemove(e) {
        e.preventDefault();
        const { NewTaskTemplateListActions, index } = this.props;
        NewTaskTemplateListActions.removeNewTaskTemplate(index);
    }

    render() {
        const { taskTemplate } = this.props;

        return (
            <li>
                <span onClick={this.onEdit.bind(this)}>{taskTemplate.name}</span>{' '}
                <Button type="button" outline color="secondary" size="sm" onClick={this.onUp.bind(this)}>△</Button>{' '}
                <Button type="button" outline color="secondary" size="sm" onClick={this.onDown.bind(this)}>▽</Button>{' '}
                <Button type="button" color="danger" size="sm" onClick={this.onRemove.bind(this)}>X</Button>
            </li>
        );
    }
}

export default connect()(NewTaskTemplateItem);