import React, {Component} from 'react'

import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

import {Redirect} from 'react-router-dom'

import axios from 'axios'

import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import classes from '../SignUp/SignUp.module.css'

class SignIn extends Component {
    state = {
        formData: {
            email: '',
            password: ''
        },
        authStatus: null,
        resMessage: null
    }

    onInputChangeHandler = (e, field) => {
        const newForm = {
            ...this.state.formData
        }
        newForm[field] = e.target.value
        this.setState({
            ...this.state,
            formData: newForm
        })
    }

    onFormSubmitHandler = e => {
        e.preventDefault()
        const payload = {
            ...this.state.formData
        }
        axios
            .post('http://localhost:4000/local-auth/sign-in', payload)
            .then(res => {
                console.log(res.data)
                if (res.data.code === 200) {
                    this.setState({
                        ...this.state,
                        authStatus: true,
                        resMessage: res.data.message
                    })
                    this
                        .props
                        .onLogin(payload.email) //Fix this, can be a bug
                } else {
                    this.setState({
                        ...this.state,
                        authStatus: false,
                        resMessage: res.data.message
                    })
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        let errorMessage = this.state.resMessage
            ? (
                <p>{this.state.resMessage}</p>
            )
            : null

        return (
            <div>
                <Container>
                    <Typography component='h1' variant='h2'>Sign In</Typography>
                    {errorMessage}
                    <form onSubmit={this.onFormSubmitHandler}>
                        <TextField
                            label='Email address'
                            className={classes.TextField}
                            onChange={(e) => this.onInputChangeHandler(e, 'email')}
                            value={this.state.formData.email}
                            type='email'
                            variant='outlined'
                            required
                            autoFocus/>
                        <TextField
                            label='Password'
                            className={classes.TextField}
                            onChange={(e) => this.onInputChangeHandler(e, 'password')}
                            value={this.state.formData.password}
                            type='password'
                            variant='outlined'
                            required/>
                        <Button
                            className={classes.SubmitButton}
                            type='submit'
                            variant="contained"
                            color="primary">
                            Submit
                        </Button>
                    </form>
                </Container>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (email) => dispatch({type: actionTypes.LOGIN, email: email})
    }
}

const mapStateToProps = state => {
    return {currentUser: state.currentUser, isLoggedIn: state.isLoggedIn}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)