import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
    render() {
        return (
            <h1>Feeling Component :D</h1>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Feeling);