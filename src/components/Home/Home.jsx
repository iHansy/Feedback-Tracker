import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// Material-UI
import { Button, Card } from '@material-ui/core';

class Home extends Component {
    //longhand function declaration doesn't work in react?
    // function handleStart() {
    //     console.log('Starting feedback...');
    // }

    componentDidMount() {
        console.log(this.props.reduxStore); //confirming data reset
    }

    //function to go to feeling url
    homeStart = () => {
        console.log('starting feedback...');
        this.props.history.push("/feeling")
    }


    render() {
        return (
            <Card elevation={5} className="cardSpacing">
                <nav>
                    <Link to='/admin'><i><u>Admin View</u></i></Link>
                </nav>
                <div className="homeConfirmSpacing">
                    <h2> Take a few deep breathes before you begin.</h2>
                    <p>Once you're ready, please click below.</p>
                    <div className="startHomeBtn">
                        <Button variant="contained" color="primary" onClick={this.homeStart} size="small">
                            Start Feedback
                    </Button>
                    </div>
                </div>
            </Card>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Home);