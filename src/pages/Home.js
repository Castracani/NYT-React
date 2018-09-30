import React, { Component } from "react";
import Header from "../components/Header";
import CardHeader from "../components/CardHeader"
import CardBody from "../components/CardBody";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import { Col, Row, Container } from "../components/Grid";

class Home extends Component {
  state = {
    articles: [],
    q: "",
    begin_date: "",
    end_date: ""
  }

  handleInputChange = function() {

  }



  render() {
    return (
    <Container>
      <Header>
      <h1>
        <i class="fa fa-newspaper-o"></i>  New York Times Article Search and Saver
      </h1>
      </Header>
      <Row>
        <Col size="12">
          <div className="card">
            <CardHeader>
            <strong><i class="fa fa-list-alt"></i> Search Parameters</strong>
            </CardHeader>
            <CardBody>
              <SearchForm />
            </CardBody>
          </div>
        </Col>
      </Row>

      <Row>
        <Col size="12">
          <div className="card">
            <CardHeader>
            <strong><i class="fa fa-table"></i> Top Articles</strong>
            </CardHeader>
            <CardBody>
              <SearchResults />
            </CardBody>
          </div>
        </Col>
      </Row>
    </Container>
    )
  } 
}

export default Home;