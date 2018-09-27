import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Container, Col, Row } from "./components/Grid";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Wrapper>
            <Route exact path="/" component={Home} />
          </Wrapper>
        </div>
      </Router>
    );
  }
}

export default App;
