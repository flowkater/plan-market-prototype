import React, { Component } from 'react';
import { Col, FormGroup, Label } from "reactstrap";
import { Field, reduxForm } from 'redux-form/immutable';

class ContentsForm extends Component {
    render() {
        return (
            <div>
                <FormGroup row>
                    <Label for="contentsName" sm={4}>컨텐츠 이름 (교재 명/ 강의 명)</Label>
                    <Col sm={2}>
                        <Field 
                            className="form-control" 
                            name="category" 
                            component="input" 
                            type="text" 
                            placeholder="카테고리 이름" />
                    </Col>
                    <Col sm={6}>
                        <Field 
                            className="form-control" 
                            name="name" 
                            component="input" 
                            type="text" 
                            placeholder="(교재 명/ 강의 명)" />
                    </Col>
                </FormGroup>
                <hr/>
                <FormGroup row>
                    <Label for="contentsAmount" sm={4}>분량</Label>
                    <Col sm={2}>
                        <Field 
                            className="form-control" 
                            name="amount" 
                            component="input" 
                            type="number" 
                            placeholder="분량" />
                    </Col>
                    <Col sm={2}>
                        <Field 
                            className="form-control" 
                            name="unit" 
                            component="input" 
                            type="number" 
                            placeholder="단위" />
                    </Col>
                </FormGroup>
                <hr/>
                <FormGroup row>
                    <Label for="contentsUrl" sm={4}>링크주소</Label>
                    <Col sm={4}>
                        <Field 
                            className="form-control" 
                            name="url" 
                            component="input" 
                            type="url" 
                            placeholder="링크주소" /> 
                    </Col>
                </FormGroup>
            </div>
        );
    }
}

ContentsForm = reduxForm({
    form: 'content'
})(ContentsForm)

export default ContentsForm;