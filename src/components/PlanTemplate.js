import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { TaskTemplateTable, ConditionTable } from '.';
import './PlanTemplate.scss'

class PlanTemplate extends Component {
    state = {
        modal: true
    }

    convertNewLine(text) {
        return (text.split('\n').map((item, key) => {
            return <p key={key}>{item}<br/></p>
        }))
    }
    
    render() {
        const { planTemplate } = this.props
        return (planTemplate ? (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>{planTemplate.name}</ModalHeader>
                <ModalBody>
                    <ConditionTable conditions={planTemplate.conditions}/>
                    {this.convertNewLine(planTemplate.description)}
                    <TaskTemplateTable taskTemplates={planTemplate.task_templates} />
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.toggle}>닫기</Button>
                </ModalFooter>
                </Modal>
            </div>
            ) : (<div></div>)
        )
    }
}

export default PlanTemplate
