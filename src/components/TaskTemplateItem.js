import React, { Component } from 'react'
import { Card, CardTitle, CardText, CardFooter } from 'reactstrap';
import './TaskTemplateItem.scss'

class TaskTemplateItem extends Component {
    convertNewLine(text) {
        return (text.split('\n').map((item, key) => {
            return <span key={key}>{item}<br/></span>
        }))
    }

    render() {
        const { TaskTemplate } = this.props
        return (
            <Card body>
                <CardTitle>[{TaskTemplate.task_template_type}] {TaskTemplate.name}: {TaskTemplate.amount}{TaskTemplate.unit}</CardTitle>
                <CardText>{this.convertNewLine(TaskTemplate.description)}</CardText>
                <CardFooter className="text-muted">예상 학습시간: {TaskTemplate.learning_minutes}분</CardFooter>
            </Card>
        )
    }
}

TaskTemplateItem.propTypes = {
}

export default TaskTemplateItem
