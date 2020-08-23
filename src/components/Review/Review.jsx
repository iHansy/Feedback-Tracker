import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ReviewCatagories from './ReviewCatagories';

// Material-UI
import { Button, Card } from '@material-ui/core';

class Review extends Component {

    //checking store values
    componentDidMount() {
        console.log(this.props.reduxStore);
    }

    state = {
        feedback: {
            feeling: this.props.feeling,
            understanding: this.props.understanding,
            supported: this.props.supported,
            comments: this.props.comments,
        }
    }

    //happens on submit button click, send info to database and push history
    reviewSubmitBtn = () => {
        console.log('submitting feedback to database...')
        axios.post('/api/feedback', this.state.feedback) //this.state.feedback is going to server
            .then((response) => {
                //added feedback to database
            }).catch((error) => { //should get 500 back if error
                console.log('error adding feedback to database', error);
            })
        //once it's added to database, go to confirmation page
        this.props.history.push('/confirmation');
    }

    reviewBackBtn = () => {
        console.log('going back...');
        this.props.history.goBack();
    }

    render() {

        return (
            <Card elevation={5} className="cardSpacing">
                <h2>Review your feedback</h2>
                {/* created separate component for table with review info */}
                <ReviewCatagories /> 
                <div className="doubleBtns">
                    <div className="doubleBackBtn">
                        <Button variant="contained" color="primary" size="small" onClick={this.reviewBackBtn}>
                            Back
                    </Button>
                    </div>
                    <div className="doubleNextBtn">
                        <Button variant="contained" color="primary" size="small" onClick={this.reviewSubmitBtn}>
                            Submit
                    </Button>
                    </div>
                </div>
            </Card>
        )
    }
}

const mapStoreToProps = (reduxStore) => {
    return {
        reduxStore,
        feeling: reduxStore.feelingReducer,
        understanding: reduxStore.understandingReducer,
        supported: reduxStore.supportedReducer,
        comments: reduxStore.commentsReducer,
    }
}

export default connect(mapStoreToProps)(Review);