import React, { Component } from 'react';
import { connect } from 'react-redux';

class Confirmation extends Component {



    render() {
        return (
            <h2>Thank you for submitting your daily feedback!</h2>
            <button onClick>Return Home</button>
        )
    }
}

const mapStoreToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStoreToProps)(Confirmation);