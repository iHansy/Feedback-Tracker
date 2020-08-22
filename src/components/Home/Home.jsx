import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    //longhand function declaration doesn't work in react?
    // function handleStart() {
    //     console.log('Starting feedback...');
    // }

    //function to go to feeling url
    handleStart = () => {
        console.log('starting feedback...');
        this.props.history.push("/feeling")
    }


    render() {
        return (
            <div>
                <h2> Take a few deep breathes before you begin.</h2>
                <p>Once you're ready, please click below.</p>
                <button onClick={this.handleStart}>Start Feedback</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Home);