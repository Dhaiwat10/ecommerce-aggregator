import React, { Component } from 'react'

import {connect} from 'react-redux';

import { Link } from 'react-router-dom'

class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Hello {this.props.currentUser}!</h1>
                <Link to='/inventory'>Inventory</Link>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {currentUser: state.currentUser, isLoggedIn: state.isLoggedIn}
}

export default connect(mapStateToProps, )(Dashboard)