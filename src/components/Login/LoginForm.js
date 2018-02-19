import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Field, reduxForm } from 'redux-form/immutable';
import { Form, Button } from "reactstrap";

const validate = values => {
    const errors = {}
    if (!values.username) {
        errors.username = '필수로 적어주셈'
    } else if (values.username.length > 15) {
        errors.username = '15자 아래로 써주셈'
    }
    if (!values.email) {
        errors.email = '필수로 적어주셈'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = '잘못된 이메일 형식이삼'
    }

    if (!values.password) {
        errors.password = '필수로 적어주셈'
    } else if (values.password.length < 8) {
        errors.password = '비밀번호 존나 짧아!!!!'
    }

    return errors
}

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched &&
                ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    </div>
)

class LoginForm extends Component {

    handleClick = () => {
        const { onLogin } = this.props;
        onLogin();
    }

    render() {
        const { 
            pristine, 
            submitting 
        } = this.props;

        return (
            <div>
                <Form>
                    <h2>로그인</h2>    
                    <Field 
                        className="form-control" 
                        name="email" 
                        component="input" 
                        label="이메일"
                        component={renderField}
                        type="email" />
                    
                    <Field 
                        className="form-control" 
                        name="password" 
                        component="input" 
                        label="비밀번호"
                        component={renderField}
                        type="password" />
                    
                    <Button type="button" onClick={this.handleClick} disabled={pristine || submitting}>로그인</Button>
                </Form>
                <Link to='/register'>
                    회원가입
                </Link>
            </div>
        );
    }
}

LoginForm = reduxForm({
    form: 'login',
    validate,
})(LoginForm)

export default LoginForm;