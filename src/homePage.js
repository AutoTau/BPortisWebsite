import React from "react";
import "./HomePage.css";
import headshot from "./headshot.png";

import {
  EdgeHeader,
  FreeBird,
  Container,
  Col,
  Row,
  CardBody,
  Fa
} from "mdbreact";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <EdgeHeader color="indigo darken-3" />
        <FreeBird>
          <Row>
            <Col
              md="10"
              className="mx-auto float-none white z-depth-1 py-2 px-2"
            >
              <CardBody>
                <h2 className="h2-responsive mb-10">
                  <strong />
                </h2>
                <Row className="d-flex flex-row justify-content-center row">
                  <span className="border border-dark" fixed="center">
                    <img
                      src={headshot}
                      alt="headshot"
                      className="App-logo"
                      fixed="center"
                    />
                  </span>
                </Row>
              </CardBody>
            </Col>
          </Row>
        </FreeBird>
        <Container>
          <Row>
            <Col md="10" className="mx-auto mt-4">
              <h2 className="text-center my-4 font-weight-bold">
               Freebird 
              </h2>
              <p className="text-center">
               Blabla 
              </p>
              <p className="text-center">
               Blablabla 
              </p>
              <p className="text-center">
               bladeeblablabla 
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomePage;