import React from 'react';

export class Register extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (<div className="base-container" ref={this.props.containerRef}>
            <div className="header">Register</div>
            <div className="content">
                <div className="form">
                    <div className="form__group">
                        <input type="text" name="username" placeholder="Username" className="form__input"></input>
                        <label htmlFor="username" className="form__label">Username</label>
                    </div>
                    <div className="form__group">
                        <input className="form__input" type="email" name="email" placeholder="Email"></input>
                        <label className="form__label" htmlFor="email">Email</label>
                    </div>
                    <div className="form__group">
                        <input className="form__input" type="password" name="password" placeholder="Password"></input>
                        <label className="form__label" htmlFor="password">Password</label>
                    </div>
                    <div className="footer">
                        <button type="button" className="btn btn-ghost">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>);
    }
}