import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
    render() {
        return (
            <div>
                <h1>Understanding Page!</h1>
            </div>
        )
    }
}

//not using state props here
const mapStateToProps = (ReduxState) => {
    return {
        ReduxState
    }
}

export default connect(mapStateToProps)(Understanding);