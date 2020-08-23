import React, { Component } from 'react';
import { connect } from 'react-redux';

class Confirmation extends Component {

    //is this function name too long?
    confirmationHomeBtn = () => {
        console.log('returning home...')
        console.log(this.props.reduxStore);
        this.props.dispatch({type: 'RESET', payload: {}}) //resetting all reducer values when returning home
        this.props.history.push('/'); //changing url to home
    }

    render() {
        return (
            <div>
                <h2>Thank you for submitting your daily feedback!</h2>
                <button onClick={this.confirmationHomeBtn}>Return Home</button>
            </div>
        )
    }
}

const mapStoreToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStoreToProps)(Confirmation);