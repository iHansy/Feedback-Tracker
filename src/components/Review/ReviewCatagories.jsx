import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewCatagories extends Component {

    render() {
        return (
                <table className="tableStyle">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Your response</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Feeling</td>
                            <td>{this.props.feeling}</td>
                        </tr>
                        <tr>
                            <td>Understanding</td>
                            <td>{this.props.understanding}</td>
                        </tr>
                        <tr>
                            <td>Supported</td>
                            <td>{this.props.supported}</td>
                        </tr>
                        <tr>
                            <td>Comments</td>
                            <td>{this.props.comments}</td>
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