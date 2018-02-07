import React, { Component } from 'react'
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
            <div className="TaskTemplateItem">
                <h5>[{TaskTemplate.task_template_type}] {TaskTemplate.name}: {TaskTemplate.amount}{TaskTemplate.unit}</h5>
                <div>
                    {this.convertNewLine(TaskTemplate.description)}
                </div>
                <small>예상 학습시간: {TaskTemplate.learning_minutes}분</small>
            </div>
        )
    }
}

TaskTemplateItem.propTypes = {
}

export default TaskTemplateItem
