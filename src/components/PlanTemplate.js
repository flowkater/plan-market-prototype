import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { TaskTemplateTable, ConditionTable } from '.';
import './PlanTemplate.scss'

class PlanTemplate extends Component {
    convertNewLine(text) {
        return (text.split('\n').map((item, key) => {
            return <p key={key}>{item}<br/></p>
        }))
    }
    
    render() {
        const { planTemplate } = this.props

        return (planTemplate ? (
            <div className="PlanTemplate">
                <Modal isOpen={this.props.PlanTemplate !== null}>
                    <ModalHeader>{planTemplate.name}</ModalHeader>
                    <ModalBody>
                        <ConditionTable conditions={planTemplate.conditions}/>
                        {this.convertNewLine(planTemplate.description)}
                        <TaskTemplateTable taskTemplates={planTemplate.task_templates} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.props.closeModal}>닫기</Button>
                    </ModalFooter>
                </Modal>
            </div>
            ) : (<div></div>)
        )
    }
}

export default PlanTemplate
