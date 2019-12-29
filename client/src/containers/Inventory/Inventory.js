import React, { Component } from 'react'

import {connect} from 'react-redux';

import axios from 'axios'

class Inventory extends Component {
    state = {
        loadingInventory: true,
        fetchedDataArr: null
    }

    componentDidMount() {
        const payload = {sellerEmail: this.props.currentUser}
        axios.post('http://localhost:4000/inventory/get-inventory', {sellerEmail: this.props.currentUser})
            .then((res) => {
                console.log(res.data)
                this.setState({loadingInventory: false, fetchedDataArr: res.data.foundItems})
            })
            .catch((err) => console.log(err))
    }

    itemsList = () => {
        if(this.state.fetchedDataArr) {
            return this.state.fetchedDataArr.map(item => (
                <p>{item.name}</p>
            ))
        } else {
            return null
        }
    }

    render() {
        let inventoryDisplay = this.state.loadingInventory ? (<p>Loading...</p>) : (null)
        
        return (
            <React.Fragment>
                <h1>Your inventory</h1>
                {inventoryDisplay}
                {this.itemsList()}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser, 
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps, )(Inventory)