import React, { Component } from 'react';
import Home from "./pages/Home";
import { Container, Col, Row } from "./components/Grid";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";


class App extends Component {
  render() {
    return (
      <Container>
        <Home />
      </Container>
    );
  }
}

export default App;
