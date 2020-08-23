import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI
import { Button, Card, Input } from '@material-ui/core';

class Supported extends Component {

    //checking store values
    componentDidMount() {
        console.log(this.props.reduxStore);
    }

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
        const supportedScore = this.state.supported
        if (supportedScore === '' || supportedScore < 1 || supportedScore > 5) {
            alert('Please fill in a number 1-5.')
            return
        }
        this.props.dispatch({ type: 'SET_SUPPORTED', payload: this.state.supported}) //dispatch to redux
        this.props.history.push('/comments') //adding url
    }

    supportedBackBtn = () => {
        console.log('going back...');
        this.props.history.goBack();
    }

    render() {
        return (
            <Card elevation={5} className="cardSpacing">
                <h2>How well are you feeling supported?</h2>
                <p>1 = not feeling supported at all</p>
                <p>5 = feeling very supported</p>
                <Input type="number" placeholder="enter number" onChange={this.supportedInput} />
                <div className="doubleBtns">
                    <div className="doubleBackBtn">
                        <Button variant="contained" color="primary" size="small" onClick={this.supportedBackBtn}>
                            Back
                    </Button>
                    </div>
                    <div className="doubleNextBtn">
                        <Button variant="contained" color="primary" size="small" onClick={this.supportedNextBtn}>
                            Next
                    </Button>
                    </div>
                </div>
            </Card>
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