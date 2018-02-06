import React, { Component } from 'react';
import { Button } from "reactstrap";

class NewTaskTemplateItem extends Component {
    onEdit() {
        const { NewTaskTemplateListActions, modal } = this.props;
        NewTaskTemplateListActions.toggleNewTaskTemplate(!modal);
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

    render() {
        const { taskTemplate } = this.props;

        return (
            <li>
                <span onClick={this.onEdit.bind(this)}>{taskTemplate.name}</span>{' '}
                <Button type="button" outline color="secondary" size="sm" onClick={this.onUp.bind(this)}>△</Button>{' '}
                <Button type="button" outline color="secondary" size="sm" onClick={this.onDown.bind(this)}>▽</Button>
            </li>
        );
    }
}

export default NewTaskTemplateItem;