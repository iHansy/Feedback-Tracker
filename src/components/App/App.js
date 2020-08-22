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
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br />

          {/* Declaring route urls -> components */}
          <Route exact path="/" component={Home} />

        </div>
      </Router>
    );
  }
}

export default App;
