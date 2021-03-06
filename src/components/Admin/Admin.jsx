import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import AdminTable from './AdminTable.jsx';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// Material-UI
import { Card } from '@material-ui/core';

class Admin extends Component {

    componentDidMount() {
        console.log('admin page loaded...')
        this.adminGetFeedback();
        console.log(this.props.reduxStore);
    }

    // getting feedback history from database
    adminGetFeedback = () => {
        axios.get('/api/feedback').then((response) => {
            console.log('feedback:', response.data); // should be feedback history
            // dispatching to redux , sending list over there
            this.props.dispatch({ type: 'SET_FEEDBACK', payload: response.data })
        }).catch((error) => {
            console.log('error getting feedback from database', error);
        })
    }

    render() {
        return (
            <Card elevation={5} className="adminCardSpacing">
                <nav>
                    <Link to='/'><i><u>Home</u></i></Link>
                </nav>
                <h2>Feedback History</h2>
                <AdminTable adminGetFeedback={this.adminGetFeedback}/>
            </Card>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Admin);