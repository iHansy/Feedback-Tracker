import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {

    componentDidMount() {
        //would have probably been more efficient to keep all reducers in 1 bigger one
        //but this is good repetitive practice!
        console.log(this.props.reduxStore)
    }

    render() {
        return (
            <div>
                <h2>Review your feedback</h2>
            </div>
        )
    }
}

//now let's use the store props!
const mapStoreToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStoreToProps)(Review);