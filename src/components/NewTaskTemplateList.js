import React, { Component } from 'react';
import { Jumbotron } from "reactstrap";
import { NewTaskTemplateItem } from ".";
      

class NewTaskTemplateList extends Component {
    render() {
        const { taskTemplateList, NewTaskTemplateListActions, modal } = this.props;

        const listComponent = taskTemplateList.sort((a, b) => a.order - b.order).map((taskTemplate, i) =>
            <NewTaskTemplateItem 
                taskTemplate={taskTemplate} 
                NewTaskTemplateListActions={NewTaskTemplateListActions}
                modal={modal}
                index={i}
                key={i} />
        );

        const jumbotron = (
            <Jumbotron />
        );

        return (
            <ul>
                {taskTemplateList.length !== 0 ? listComponent : jumbotron}
            </ul>
        );
    }
}

export default NewTaskTemplateList;