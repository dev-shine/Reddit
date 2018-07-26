import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../firebase';

import * as routes from '../constants/routes';

const SignUpPage = () => {
    <div>
        <h1>SignUP</h1>
        <SignUpForm/>
    </div>
}

// initializing the state
const INITIAL_STATE = {
    username: '',
    password: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
}

// try taking the breackets off from property name
const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});



class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE }
    }

    onSubmit = (event) => {
        e.preventDefault();

        const {
            username, email, passwordOne
        } = this.state;

        auth.doCreateUserWithEmailAndPassword(email, password).then (authUser => {
            this.setState(()=> ({ ...INITIAL_STATE }))
        })
        .catch(error => {
            this.setState(byPropKey('error', error));
        });
    }
    
    render () {

        const {
            username,
            passwordOne,
            passwordTwo,
            email,
            error,
        } = this.state;

        const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '' || username === '';

        return (
            <form onSubmit = {this.onSubmit}>
                <input
                    value={username}
                    onChange={event => this.setState(byPropKey('username', event.target.value))}
                    type="text"
                    placeholder="Full Name"
                />
                <input
                    value={email}
                    onChange={event => this.setState(byPropKey('email', event.target.value))}
                    type="text"
                    placeholder="email"
                />
                <input
                    value={passwordOne}
                    onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                    type="password"
                    placeholder="Password"
                />
                <input
                    value={passwordTwo}
                    onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                    type="password"
                    placeholder="Confirm password"
                />
                <button disabled={isInvalid} type="submit">Sign up</button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignUpLink = () => {
    <p>
        Don't have an account ?account
        {' '}
        <Link to={routes.SIGN_UP}>Sign Up</Link>
    </p>
}

export default Signup;

export {
    SignUpForm,
    SignUpLink
}