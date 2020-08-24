import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// Material-UI
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@material-ui/core';

class AdminTable extends Component {


    //deleting selected row from database
    adminDeleteBtn = (id) => {
        console.log('deleting from database...');
        axios.delete(`/api/feedback/${id}`).then((response) => {
            //reload feedback history
            this.props.adminGetFeedback();
        })
    }

    render() {
        return (
                <Table className="adminTableStyle" size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">Feeling</TableCell>
                            <TableCell align="center">Understanding</TableCell>
                            <TableCell align="center">Support</TableCell>
                            <TableCell align="center">Comments</TableCell>
                            <TableCell align="center">Remove</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.reduxStore.feedbackHistoryReducer.map((feedback) => {
                            return (
                                <TableRow key={feedback.id}>
                                    <TableCell>{feedback.id}</TableCell>
                                    <TableCell>{feedback.feeling}</TableCell>
                                    <TableCell>{feedback.understanding}</TableCell>
                                    <TableCell>{feedback.support}</TableCell>
                                    <TableCell>{feedback.comments}</TableCell>
                                    <TableCell>
                                        <Button size="small" variant="contained"
                                            color="secondary" onClick={() => this.adminDeleteBtn(feedback.id)}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(AdminTable);