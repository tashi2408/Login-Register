import React from 'react';


export class Login extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (<div className="base-container" ref={this.props.containerRef}>
            <div className="header">Login</div>
            <div className="content">
                <div className="form">
                    <div className="form__group">
                        <input type="text" name="Username" placeholder="Username" className="form__input"></input>
                        <label htmlFor="Username" className="form__label">Username</label>
                    </div>
                    
                    <div className="form__group">
                        <input className="form__input" type="password" name="password" placeholder="Password"></input>
                        <label className="form__label" htmlFor="password">Password</label>
                    </div>
                    <div className="footer">
                        <button type="button" className="btn btn-ghost">Sign In</button>
                    </div>
                </div>
            </div>
        </div>);
    }
}

