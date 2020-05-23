import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({displayName:'', email:'', password:'', confirmPassword:''});
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render(){
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='Display name' type='display-name' value={this.state.displayName} onChange={this.handleChange} label='Display name' required/>
                    <FormInput name='Email' type='email' value={this.state.email} onChange={this.handleChange} label='Email' required/>
                    <FormInput name='Password' type='password' value={this.state.password} onChange={this.handleChange} label='Password' required/>
                    <FormInput name='Confirm password' type='password' value={this.state.confirmPassword} onChange={this.handleChange} label='Confirm Password' required/>
                    <CustomButton type='submit'> Sign Up </CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp;