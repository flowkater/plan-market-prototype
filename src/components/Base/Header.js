import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Link className="navbar-btn" to="/">홈</Link>
                <Link className="navbar-btn" to="/new">새로운 계획 작성</Link>
                <Link className="navbar-btn" to="/plan_templates">계획 목록</Link>
            </div>
        );
    }
}

export default Header;