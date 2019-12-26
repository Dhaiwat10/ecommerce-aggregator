import React, {Component} from 'react'

import axios from 'axios'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import classes from './SignUp.module.css';

class SignUp extends Component {
    state = {
        formData: {
            name: '',
            email: '',
            gstin: '',
            phone: '',
            password: '',
            building: '',
            street: '',
            city: '',
            state: '',
            pin: ''
        }
    }

    onInputChangeHandler = (e, field) => {
        let newFormData = {
            ...this.state.formData
        }

        newFormData[field] = e.target.value

        this.setState({formData: newFormData})
    }

    onFormSubmitHandler = e => {
        e.preventDefault()

        axios
            .post('http://localhost:4000/reg/add-new', this.state.formData)
            .then(res => alert(res.data.message))
            .catch(err => alert(err))
    }

    render() {

        return (
            <div>
                <Container>
                    <Typography component='h1' variant='h2'>Sign Up</Typography>
                    <form onSubmit={this.onFormSubmitHandler}>
                        <TextField
                            className={classes.TextField}
                            onChange={e => this.onInputChangeHandler(e, 'name')}
                            value={this.state.formData.name}
                            label='Full name'
                            fullWidth
                            required
                            variant='outlined'
                            id='fullName'
                            autoFocus/>
                        <TextField
                            className={classes.TextField}
                            onChange={e => this.onInputChangeHandler(e, 'email')}
                            value={this.state.formData.email}
                            label='Email address'
                            fullWidth
                            required
                            variant='outlined'
                            id='email'/>
                        <TextField
                            className={classes.TextField}
                            onChange={e => this.onInputChangeHandler(e, 'building')}
                            value={this.state.formData.building}
                            label='Building'
                            fullWidth
                            required
                            variant='outlined'
                            id='building'/>
                        <TextField
                            className={classes.TextField}
                            onChange={e => this.onInputChangeHandler(e, 'street')}
                            value={this.state.formData.street}
                            label='Street'
                            fullWidth
                            required
                            variant='outlined'
                            id='street'/>
                        <TextField
                            className={classes.TextField}
                            onChange={e => this.onInputChangeHandler(e, 'city')}
                            value={this.state.formData.city}
                            label='City'
                            fullWidth
                            required
                            variant='outlined'
                            id='city'/>
                        <TextField
                            className={classes.TextField}
                            onChange={e => this.onInputChangeHandler(e, 'state')}
                            value={this.state.formData.state}
                            label='State'
                            fullWidth
                            required
                            variant='outlined'
                            id='street'/>
                        <TextField
                            className={classes.TextField}
                            onChange={e => this.onInputChangeHandler(e, 'pin')}
                            value={this.state.formData.pin}
                            label='PIN code'
                            fullWidth
                            required
                            variant='outlined'
                            id='pin'/>
                        <TextField
                            className={classes.TextField}
                            onChange={e => this.onInputChangeHandler(e, 'gstin')}
                            value={this.state.formData.gstin}
                            label='GSTIN number'
                            fullWidth
                            required
                            variant='outlined'
                            id='gstin'/>
                        <TextField
                            className={classes.TextField}
                            onChange={e => this.onInputChangeHandler(e, 'phone')}
                            value={this.state.formData.phone}
                            label='Phone number'
                            fullWidth
                            required
                            variant='outlined'
                            id='phone'/>
                        <TextField
                            className={classes.TextField}
                            onChange={e => this.onInputChangeHandler(e, 'password')}
                            value={this.state.formData.password}
                            label='Choose a secure password'
                            fullWidth
                            required
                            variant='outlined'
                            id='phone'
                            type='password'/>
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

export default SignUp