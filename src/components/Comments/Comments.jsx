import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
    render() {
        return (
            <div>
                <h2>Any comments you would like to add?</h2>
                <form>
                <textarea name="message" rows="10" cols="30" placeholder="leaving a comment is optional" />
                </form>
            </div>
        )
    }
}

//not using store prop
const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Comments);