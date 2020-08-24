import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Card } from '@material-ui/core';

class AdminList extends Component {

    render() {
        return (
            <Table className="adminTableStyle" size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Feeling</TableCell>
                        <TableCell>Understanding</TableCell>
                        <TableCell>Support</TableCell>
                        <TableCell>Comments</TableCell>
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