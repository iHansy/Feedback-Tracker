import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI
import Button from '@material-ui/core/Button';

class Home extends Component {
    //longhand function declaration doesn't work in react?
    // function handleStart() {
    //     console.log('Starting feedback...');
    // }

    componentDidMount() {
        console.log(this.props.reduxStore); //confirming data reset
    }

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
                <Button variant="contained" color="primary" onClick={this.handleStart}>
                    Start Feedback
                </Button>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Home);