import React, {Component} from 'react'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

class SignUp extends Component {
    state = {
        formData: {
            name: ''
        }
    }

    onNameChangeHandler = e => {
        console.log(this.state)
        this.setState({formData: {name: e.target.value}})
    }

    render() {
        return (
            <div>
                <Container>
                    <Typography component='h1' variant='h5'>Sign Up</Typography>
                    <form>
                        <TextField
                            onChange={this.onNameChangeHandler}
                            value={this.state.formData.name}
                            label='Full name'
                            fullWidth
                            required
                            variant='outlined'
                            id='fullName'
                            autoFocus/>
                    </form>
                </Container>
            </div>
        )
    }
}

export default SignUp