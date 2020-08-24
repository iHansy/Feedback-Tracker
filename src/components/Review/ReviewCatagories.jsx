import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

class ReviewCatagories extends Component {

    render() {
        return (
                <Table className="tableStyle">
                    <TableBody>
                        <TableRow>
                            <TableCell>Overall feeling</TableCell>
                            <TableCell>{this.props.feeling}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Understanding</TableCell>
                            <TableCell>{this.props.understanding}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Support</TableCell>
                            <TableCell>{this.props.supported}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Comments</TableCell>
                            <TableCell>{this.props.comments}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
        )
    }
}

//now let's use the store props!
const mapStoreToProps = (reduxStore) => {
    return {
        feeling: reduxStore.feelingReducer,
        understanding: reduxStore.understandingReducer,
        supported: reduxStore.supportedReducer,
        comments: reduxStore.commentsReducer,
    }
}

export default connect(mapStoreToProps)(ReviewCatagories);