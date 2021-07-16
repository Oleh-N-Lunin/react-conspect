import React, { Component } from 'react';

const INITIAL_STATE = {
    login: '',
    email: '',
    password: '',
    agreed: false,
};

class SignUpForm extends Component {
    state = { ...INITIAL_STATE };

    handleChange = ({ target }) => {
        const { name, value, type, checked } = target;
        this.setState({ [name]: type === 'checkbox'? checked:value });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { login, email, password, agreed } = this.state;

        console.log(`Login: ${login} Email: ${email} Password ${password} Agreed: ${agreed}`);

        this.props.onSubmit({ ...this.state });
        this.reset();
    };

    reset = () => { this.setState({ ...INITIAL_STATE }) };

    render() {
        const { login, email, password, agreed } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        placeholder="Enter Login"
                        name="login"
                        value={login}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Email
                    <input
                        type="email"
                        placeholder="Enter email"
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Agree to terms
                    <input
                        type="checkbox"
                        checked={agreed}
                        onChange={this.handleChange}
                    />
                </label>
                <button type="submit">Sign up as { login}</button>
            </form>
        );
    }
}

export default SignUpForm;