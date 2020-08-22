import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {
    render() {
        return (
            <h1> Time to review baby!</h1>
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