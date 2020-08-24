import './App.css';
import React, { Component } from 'react';
import { HashRouter as Router, Route, } from 'react-router-dom';
// importing feedback components
import Home from '../Home/Home.jsx';
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Supported from '../Supported/Supported.jsx';
import Comments from '../Comments/Comments.jsx';
import Review from '../Review/Review.jsx';
import Confirmation from '../Confirmation/Confirmation.jsx'
import Admin from '../Admin/Admin.jsx';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Daily Feedback</h1>
          </header>
          {/* Declaring route urls w/ components */}
          <Route exact path="/" component={Home} />
          <Route exact path="/feeling" component={Feeling} />
          <Route exact path="/understanding" component={Understanding} />
          <Route exact path="/supported" component={Supported} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/confirmation" component={Confirmation} />
          <Route exact path="/admin" component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
