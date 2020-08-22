import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
    render() {
        return (
            <div>
                <h2>How well are you understanding the content?</h2>
                <p>1 = I'm struggling </p>
                <p>5 = Feeling amazing</p>
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