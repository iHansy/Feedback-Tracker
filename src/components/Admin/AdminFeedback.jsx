import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI
import { Button, Card } from '@material-ui/core';

class AdminList extends Component {
    render() {
        return (
            <h1> ADMIN PAGE!</h1>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(AdminList);