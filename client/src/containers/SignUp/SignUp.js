import React, {Component} from 'react'

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
            address: {
                building: '',
                street: '',
                city: '',
                state: '',
                pin: ''
            }
        }
    }

    onNameChangeHandler = e => {
        let newForm = {
            ...this.state.formData
        }
        newForm.name = e.target.value
        this.setState({formData: newForm})
    }

    onEmailChangeHandler = e => {
        let newForm = {
            ...this.state.formData
        }
        newForm.email = e.target.value
        this.setState({formData: newForm})
    }

    onGSTINChangeHandler = e => {
        let newForm = {
            ...this.state.formData
        }
        newForm.gstin = e.target.value
        this.setState({formData: newForm})
    }

    onPhoneChangeHandler = e => {
        let newForm = {
            ...this.state.formData
        }
        newForm.phone = e.target.value
        this.setState({formData: newForm})
    }

    onPasswordChangeHandler = e => {
        let newForm = {
            ...this.state.formData
        }
        newForm.password = e.target.value
        this.setState({formData: newForm})
    }

    onBuildingChangeHandler = e => {
        let newForm = {
            ...this.state.formData
        }
        let newAddress = {
            ...newForm.address
        }
        newAddress.building = e.target.value
        newForm.address = newAddress
        this.setState({formData: newForm})
    }

    onStreetChangeHandler = e => {
        let newForm = {
            ...this.state.formData
        }
        let newAddress = {
            ...newForm.address
        }
        newAddress.street = e.target.value
        newForm.address = newAddress
        this.setState({formData: newForm})
    }

    onCityChangeHandler = e => {
        let newForm = {
            ...this.state.formData
        }
        let newAddress = {
            ...newForm.address
        }
        newAddress.city = e.target.value
        newForm.address = newAddress
        this.setState({formData: newForm})
    }

    //Address state change, not the component state
    onStateChangeHandler = e => {
        let newForm = {
            ...this.state.formData
        }
        let newAddress = {
            ...newForm.address
        }
        newAddress.state = e.target.value
        newForm.address = newAddress
        this.setState({formData: newForm})
    }

    onPinChangeHandler = e => {
        let newForm = {
            ...this.state.formData
        }
        let newAddress = {
            ...newForm.address
        }
        newAddress.pin = e.target.value
        newForm.address = newAddress
        this.setState({formData: newForm})
    }

    render() {

        return (
            <div>
                <Container>
                    <Typography component='h1' variant='h2'>Sign Up</Typography>
                    <form>
                        <TextField
                            className={classes.TextField}
                            onChange={this.onNameChangeHandler}
                            value={this.state.formData.name}
                            label='Full name'
                            fullWidth
                            required
                            variant='outlined'
                            id='fullName'
                            autoFocus/>
                        <TextField
                            className={classes.TextField}
                            onChange={this.onEmailChangeHandler}
                            value={this.state.formData.email}
                            label='Email address'
                            fullWidth
                            required
                            variant='outlined'
                            id='email'/>
                        <TextField
                            className={classes.TextField}
                            onChange={this.onBuildingChangeHandler}
                            value={this.state.formData.address.building}
                            label='Building'
                            fullWidth
                            required
                            variant='outlined'
                            id='building'/>
                        <TextField
                            className={classes.TextField}
                            onChange={this.onStreetChangeHandler}
                            value={this.state.formData.address.street}
                            label='Street'
                            fullWidth
                            required
                            variant='outlined'
                            id='street'/>
                        <TextField
                            className={classes.TextField}
                            onChange={this.onCityChangeHandler}
                            value={this.state.formData.address.city}
                            label='City'
                            fullWidth
                            required
                            variant='outlined'
                            id='city'/>
                        <TextField
                            className={classes.TextField}
                            onChange={this.onStateChangeHandler}
                            value={this.state.formData.address.state}
                            label='State'
                            fullWidth
                            required
                            variant='outlined'
                            id='street'/>
                        <TextField
                            className={classes.TextField}
                            onChange={this.onPinChangeHandler}
                            value={this.state.formData.address.pin}
                            label='PIN code'
                            fullWidth
                            required
                            variant='outlined'
                            id='pin'/>
                        <TextField
                            className={classes.TextField}
                            onChange={this.onGSTINChangeHandler}
                            value={this.state.formData.gstin}
                            label='GSTIN number'
                            fullWidth
                            required
                            variant='outlined'
                            id='gstin'/>
                        <TextField
                            className={classes.TextField}
                            onChange={this.onPhoneChangeHandler}
                            value={this.state.formData.phone}
                            label='Phone number'
                            fullWidth
                            required
                            variant='outlined'
                            id='phone'/>
                        <TextField
                            className={classes.TextField}
                            onChange={this.onPasswordChangeHandler}
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