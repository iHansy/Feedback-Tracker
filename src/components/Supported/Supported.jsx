import React, { Component } from 'react';
import { connect } from 'react-redux';

class Supported extends Component {



    render() {
        return (
            <div>
                <h1>How well are you feeling supported?</h1>
                <p>1 = not feeling supported at all</p>
                <p>5 = feeling very supported</p>
                <input type="number" placeholder="enter number" onChange={this.supportedInput}/>
                <button onClick={this.supportedNextBtn}>Next</button>
            </div>
        )
    }
}

//not using state prop
const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Supported); 