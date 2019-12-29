import React from 'react';
import './App.css';

import {connect} from 'react-redux';

import SignUp from './containers/SignUp/SignUp'
import SignIn from './containers/SignIn/SignIn'
import Dashboard from './containers/Dashboard/Dashboard'
import Inventory from './containers/Inventory/Inventory'
import None from './hoc/404/404'

import {BrowserRouter, Route} from 'react-router-dom'

function App(props) {
    let protectedRoutes = props.isLoggedIn
        ? (
            <React.Fragment>
                <Route path='/dashboard' exact><Dashboard /></Route>
                <Route path='/inventory' exact><Inventory /></Route>
            </React.Fragment>
        )
        : null

    return (
        <div className="App">
            <BrowserRouter>
                <h1>eCommerce aggregator</h1>
                <Route path='/sign-up' exact><SignUp/></Route>
                <Route path='/sign-in' exact><SignIn/></Route>
                {protectedRoutes}
                <Route path='/' ><None /></Route>
            </BrowserRouter>
        </div>
    );
}

const mapStateToProps = state => {
    return {isLoggedIn: state.isLoggedIn}
}

export default connect(mapStateToProps,)(App)