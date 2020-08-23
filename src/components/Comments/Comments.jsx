import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI
import { Button, Paper } from '@material-ui/core';

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
            <div>
                <h2>Any comments you would like to add?</h2>
                {/* cool thing I found! First time using the textarea element, super sweet. */}
                <textarea
                    name="message" rows="7" cols="35"
                    placeholder="leaving a comment is optional"
                    onChange={this.commentsInput}
                />
                <Button variant="contained" color="primary" onClick={this.commentsBackBtn}>
                    Back
                </Button>
                <Button variant="contained" color="primary" onClick={this.commentsNextBtn}>
                    Next
                </Button>
            </div>
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