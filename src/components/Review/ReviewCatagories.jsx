import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewCatagories extends Component {

    render() {
        return (
                <table>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Your response</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>How you're feeling</td>
                            <td>{this.props.reduxStore.feelingReducer}</td>
                        </tr>
                    </tbody>
                </table>
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

export default connect(mapStoreToProps)(ReviewCatagories);