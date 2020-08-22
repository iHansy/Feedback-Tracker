import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
    state = {
        feeling: ''
    }

    handleInput = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }

    handleFeelingNext = () => {
        console.log(this.state);
        this.props.dispatch({ type: 'SET_FEELING', payload: this.state.feeling})
    }

    render() {
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <p>1 = I'm struggling </p>
                <p>5 = Feeling amazing</p>
                {/* <form></form> */}
                <input type="number" required placeholder="enter number"
                    onChange={this.handleInput}
                />
                <button onClick={this.handleFeelingNext}>Next</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Feeling);