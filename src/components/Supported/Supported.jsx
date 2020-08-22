import React, { Component } from 'react';
import { connect } from 'react-redux';

class Supported extends Component {

    state = {
        supported: ''
    }

    supportedInput = (event) => {
        this.setState({
            supported: event.target.value //setting new state, not spreading because only 1 property
        })
    }

    supportedNextBtn = () => {
        console.log(this.state);
        this.props.dispatch({ type: 'SET_SUPPORTED', payload: this.state.supported}) //dispatch to redux
        this.props.history.push('/comments') //adding url
    }

    render() {
        return (
            <div>
                <h2>How well are you feeling supported?</h2>
                <p>1 = not feeling supported at all</p>
                <p>5 = feeling very supported</p>
                <input type="number" placeholder="enter number" onChange={this.supportedInput} />
                <button onClick={this.supportedNextBtn}>Next</button>
            </div>
        )
    }
}

//not using store prop
const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Supported); 