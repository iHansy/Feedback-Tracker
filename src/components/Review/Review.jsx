import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewCatagories from './ReviewCatagories';

class Review extends Component {

    componentDidMount() {
        //would have probably been more efficient to keep all reducers in 1 bigger one
        //but this is good repetitive practice
        console.log(this.props.reduxStore)
    }

    render() {

        return (
            <div>
                <h2>Review your feedback</h2>
                {/* created separate component for table with review info */}
                <ReviewCatagories /> 
            </div>
        )
    }
}

//now let's use the store props!
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