import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {

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
        this.props.dispatch({type:'SET_UNDERSTANDING', payload: this.state.understanding})
    }

    render() {
        return (
            <div>
                <h2>How well are you understanding the content?</h2>
                <p>1 = not understanding it at all</p>
                <p>5 = understanding everything!</p>
                <input type="number" placeholder="enter number" onChange={this.understandingInput} />
                <button onClick={this.understandingNextBtn}>Next</button>
            </div>
        )
    }
}

//not using state props here
const mapStateToProps = (ReduxState) => {
    return {
        ReduxState
    }
}

export default connect(mapStateToProps)(Understanding);