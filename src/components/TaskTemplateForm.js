import React, { Component } from 'react';
import { Form, FormGroup, Label, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';

class TaskTemplateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
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
      }
    
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {


        return (
            <div>
                <Button color="primary" size="lg" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
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
                                    <option>예습</option>
                                    <option>학습</option>
                                    <option>복습</option>
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
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>추가</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>취소</Button>
                </ModalFooter>
                </Modal>
            </div>
        );
    }
}

TaskTemplateForm = reduxForm({
    form: 'taskTemplateForm'
})(TaskTemplateForm)

export default TaskTemplateForm;