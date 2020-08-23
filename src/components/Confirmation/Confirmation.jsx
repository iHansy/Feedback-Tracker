import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI
import { Button, Paper } from '@material-ui/core';

class Confirmation extends Component {

    //checking store values
    componentDidMount() {
        console.log(this.props.reduxStore);
        console.log(this.props.history); //very interesting to see this console log
    }

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
                <Button variant="contained" color="primary" onClick={this.confirmationHomeBtn}> 
                    Return Home
                </Button>
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