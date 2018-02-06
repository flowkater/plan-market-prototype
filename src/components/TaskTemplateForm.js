import React, { Component } from 'react';
import { Form, FormGroup, Label, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Field, reduxForm, formValueSelector, change } from 'redux-form/immutable';
import { connect } from 'react-redux';

class TaskTemplateForm extends Component {
    constructor(props) {
        super(props);
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
    
        this.toggle = this.toggle.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleUpdateClick = this.handleUpdateClick.bind(this);
      }
    
    toggle() {
        const { NewTaskTemplateListActions, modal, reset } = this.props;
        NewTaskTemplateListActions.toggleNewTaskTemplate(!modal);
        reset();
    }

    onAdd() {
        const { NewTaskTemplateListActions } = this.props;
        NewTaskTemplateListActions.onAddNewTaskTemplate();
        this.toggle();
    }

    handleAddClick() {
        const { NewTaskTemplateListActions, taskTemplate, taskTemplateList, reset } = this.props;
        const order = taskTemplateList.length + 1
        taskTemplate.assignment_type = "day_of_week";
        taskTemplate.order = order;
        if(taskTemplate.monday){
            taskTemplate.monday_order = order
        }
        if(taskTemplate.tuesday){
            taskTemplate.tuesday_order = order
        }
        if(taskTemplate.wednesday){
            taskTemplate.wednesday_order = order
        }
        if(taskTemplate.thursday){
            taskTemplate.thursday_order = order
        }
        if(taskTemplate.friday){
            taskTemplate.friday_order = order
        }
        if(taskTemplate.saturday){
            taskTemplate.saturday_order = order
        }
        if(taskTemplate.sunday){
            taskTemplate.sunday_order = order
        }
        console.log(taskTemplate);
        NewTaskTemplateListActions.addNewTaskTemplate(taskTemplate);
        
        this.toggle();
    }

    handleUpdateClick() {
        const { NewTaskTemplateListActions, taskTemplate, index, reset } = this.props;
        NewTaskTemplateListActions.updateNewTaskTemplate({index: index, taskTemplateItem: taskTemplate})
        
        this.toggle();
    }

    render() {
        const { modal, formType } = this.props;        
        console.log(formType);

        return (
            <div>
                <Button color="primary" size="lg" onClick={this.onAdd}>{this.props.buttonLabel}</Button>
                <Modal isOpen={modal} fade={false} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>공부법 항목 추가</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Label for="taskName" sm={4}>공부법 이름</Label>
                            <Col sm={8}>
                                <Field 
                                    className="form-control" 
                                    name="name" 
                                    component="input" 
                                    type="text" 
                                    placeholder="이름" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="studyType" sm={4}>학습 유형</Label>
                            <Col sm={3}>
                                <Field 
                                    className="form-control"
                                    name="task_template_type"
                                    component="select">
                                    <option />
                                    <option value="preview">예습</option>
                                    <option value="learning">학습</option>
                                    <option value="review">복습</option>
                                </Field>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="contentsAmount" sm={4}>분량</Label>
                            <Col sm={4}>
                                <Field 
                                    className="form-control" 
                                    name="amount" 
                                    component="input" 
                                    type="number" 
                                    placeholder="분량" />
                            </Col>
                            <Col sm={4}>
                                <Field 
                                    className="form-control" 
                                    name="unit" 
                                    component="input" 
                                    type="text" 
                                    placeholder="단위" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="contentsAmount" sm={4}>예상학습시간</Label>
                            <Col sm={8}>
                                <Field 
                                    className="form-control" 
                                    name="learning_minutes" 
                                    component="input" 
                                    type="number" 
                                    placeholder="시간" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="studyWeekday" sm={4}>학습 요일</Label>
                            {this.state.weekdays.map((weekday, i) => (
                                <Col sm={1} key={i}>
                                    <Label for={weekday.key}>{weekday.value}</Label>
                                    <Field 
                                        className="form-control" 
                                        name={weekday.key}
                                        id={weekday.key} 
                                        type="checkbox"
                                        component="input" />
                                </Col>
                            ))}
                        </FormGroup>
                        <FormGroup row>
                            <Label for="description" sm={4}>상세 설명</Label>
                            <Col sm={8}>
                                <Field 
                                    className="form-control" 
                                    id="task-template-form-description"
                                    name="description" 
                                    component="textarea" 
                                    placeholder="상세 항목에 대한 자세한 설명을 적어주세요." />
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    {formType === "NEW" ? <Button color="primary" onClick={this.handleAddClick}>추가</Button> : (
                        formType === "EDIT" ? <Button color="primary" onClick={this.handleUpdateClick}>수정</Button> : null
                    )}
                    {' '}
                    <Button color="secondary" onClick={this.toggle}>취소</Button>
                </ModalFooter>
                </Modal>
            </div>
        );
    }
}

TaskTemplateForm = reduxForm({
    form: 'taskTemplate'
})(TaskTemplateForm)

const selector = formValueSelector('taskTemplate');

export default connect(
    state => ({
        index: state.newTaskTemplateList.get('index'),
        taskTemplate: {
            name: selector(state, 'name'),
            description: selector(state, 'description'),
            task_template_type: selector(state, 'task_template_type'),
            learning_minutes: selector(state, 'learning_minutes'),
            amount: selector(state, 'amount'),
            unit: selector(state, 'unit'),
            monday: selector(state, 'monday'),
            tuesday: selector(state, 'tuesday'),
            wednesday: selector(state, 'wednesday'), 
            thursday: selector(state, 'thursday'),
            friday: selector(state, 'friday'),
            saturday: selector(state, 'saturday'),
            sunday: selector(state, 'sunday')
        }
    })
)(TaskTemplateForm);

