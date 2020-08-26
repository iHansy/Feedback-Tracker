import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';

// Material-UI
import { Button, Card, Input } from '@material-ui/core';

class Feeling extends Component {
    //checking store values
    componentDidMount() {
        console.log(this.props.reduxStore);
    }

    state = { //initial state setup
        feeling: ''
    }

    //input function
    feelingInput = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }

    //next button function
    feelingNextBtn = () => {
        console.log(this.state);
        const feelingScore = this.state.feeling
        if (feelingScore === '' || feelingScore < 1 || feelingScore > 5) {
            swal("Error", "Please enter in a number 1-5");
            return
        }
        this.props.dispatch({ type: 'SET_FEELING', payload: this.state.feeling }) //dispatching to redux reducer
        this.props.history.push('/understanding') //navigating to understanding page
    }

    feelingBackBtn = () => {
        console.log('going back...');
        this.props.history.goBack();
    }

    render() {
        return (
            <Card elevation={5} className="cardSpacing">
                <h2>How are you feeling today?</h2>
                <p>1 = feeling horrible</p>
                <p>5 = feeling amazing</p>
                <Input type="number" placeholder="enter number" onChange={this.feelingInput}/>
                <div className="doubleBtns">
                    <div className="doubleBackBtn">
                        <Button variant="contained" color="primary" size="small" onClick={this.feelingBackBtn}>
                            Back
                    </Button>
                    </div>
                    <div className="doubleNextBtn">
                        <Button variant="contained" color="primary" size="small" onClick={this.feelingNextBtn}>
                            Next
                    </Button>
                    </div>
                </div>
            </Card>
        )
    }
}

//not using store props here
const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Feeling);