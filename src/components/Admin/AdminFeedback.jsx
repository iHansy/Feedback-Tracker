import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@material-ui/core';

class AdminList extends Component {

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
                    {this.props.reduxStore.feedbackHistoryReducer.map((feedback, index) => {
                        return (
                            <TableRow>
                                <TableCell>{feedback.id}</TableCell>
                                <TableCell>{feedback.feeling}</TableCell>
                                <TableCell>{feedback.understanding}</TableCell>
                                <TableCell>{feedback.support}</TableCell>
                                <TableCell>{feedback.comments}</TableCell>
                                <TableCell>
                                    <Button size="small" variant="contained" color="secondary">Delete</Button>
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

export default connect(mapStateToProps)(AdminList);