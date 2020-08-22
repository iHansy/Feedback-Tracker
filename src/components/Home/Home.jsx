import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

    render() {
        return (
            <div>
                <h2> Take a few deep breathes before you begin.</h2>
                <p>Once you're ready, please hit the "Start Feedback" button.</p>
                <button>Start Feedback</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Home);