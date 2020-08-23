import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewCatagories from './ReviewCatagories';

class Review extends Component {

    componentDidMount() {
        //would have probably been more efficient to keep all reducers in 1 bigger one
        //but this is good repetitive practice
        console.log(this.props.reduxStore)
    }

    //happens on submit button click, send info to database and push history
    reviewSubmitBtn = () => {
        console.log('submitting feedback')
    }

    render() {

        return (
            <div>
                <h2>Review your feedback</h2>
                {/* created separate component for table with review info */}
                <ReviewCatagories /> 
                <button onClick={this.reviewSubmitBtn}>Submit Feedback</button>
            </div>
        )
    }
}

//not using store props here either
const mapStoreToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStoreToProps)(Review);