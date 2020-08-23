import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI
import { Button, Paper } from '@material-ui/core';

class Understanding extends Component {

    //checking store values
    componentDidMount() {
        console.log(this.props.reduxStore);
    }

    state = { //initial state
        understanding: ''
    }

    understandingInput = (event) => {
        this.setState({
            understanding: event.target.value //new state.understanding value
        })
    }

    //sending dispatch and pushing to url history
    understandingNextBtn = () => {
        console.log(this.state);
        const understandingScore = this.state.understanding
        if (understandingScore === '' || understandingScore < 1 || understandingScore > 5) {
            alert('Please fill in a number 1-5.')
            return
        }
        this.props.dispatch({ type: 'SET_UNDERSTANDING', payload: this.state.understanding })
        this.props.history.push('/supported')
    }

    understandingBackBtn = () => {
        console.log('going back...');
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <h2>How well are you understanding the content?</h2>
                <p>1 = not understanding it at all</p>
                <p>5 = understanding everything!</p>
                <input type="number" placeholder="enter number" onChange={this.understandingInput} />
                <Button variant="contained" color="primary" onClick={this.understandingBackBtn}>
                    Back
                </Button>
                <Button variant="contained" color="primary" onClick={this.understandingNextBtn}>
                    Next
                </Button>
            </div>
        )
    }
}

//not using store props here
const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Understanding);