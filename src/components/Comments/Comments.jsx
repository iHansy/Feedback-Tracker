import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI
import { Button, Card, TextField } from '@material-ui/core';

class Comments extends Component {

    //checking store values
    componentDidMount() {
        console.log(this.props.reduxStore);
    }

    state = {
        comments: ''
    }

    commentsInput = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    commentsNextBtn = () => {
        console.log(this.state);
        this.props.dispatch({ type: 'SET_COMMENTS', payload: this.state.comments })
        this.props.history.push('/review')
    }

    commentsBackBtn = () => {
        console.log('going back...');
        this.props.history.goBack();
    }

    render() {
        return (
            <Card elevation={5} className="cardSpacing">
                <h2>Any comments you would like to add?</h2>
                {/* cool thing I found! First time using the textarea element, super sweet. */}
                <TextField
                    id="standard-multiline-static"
                    label="Optional"
                    multiline
                    variant="outlined"
                    rows={5}
                    onChange={this.commentsInput}
                />
                <div className="doubleBtns">
                    <div className="doubleBackBtn">
                        <Button variant="contained" color="primary" size="small" onClick={this.commentsBackBtn}>
                            Back
                    </Button>
                    </div>
                    <div className="doubleNextBtn">
                        <Button variant="contained" color="primary" size="small" onClick={this.commentsNextBtn}>
                            Next
                    </Button>
                    </div>
                </div>
            </Card>
        )
    }
}

//not using store props
const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Comments);