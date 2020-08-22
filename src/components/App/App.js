import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
// importing components
import Home from '../Home/Home.jsx';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Daily Feedback</h1>
          </header>
          <br />

          {/* Declaring route urls w/ components */}
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/feeling" component={Feeling} />
          <Route exact path="/understanding" component={Understanding} />
          <Route exact path="/supported" component={Supported} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/confirmation" component={Confirmation} /> */}

        </div>
      </Router>
    );
  }
}

export default App;
