import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {
render() {
return (
<Footer color="blue" className="font-small pt-4 mt-4">
  <Container fluid className="text-center text-md-left">
    <Row>
      <Col md="6">
      <h5 className="title">Footer Content</h5>
      <p>
        Here you can use rows and columns here to organize your footer
        content.
      </p>
      </Col>
      <Col md="6">
      <h5 className="title">Links</h5>
      <ul>
        <li className="list-unstyled">
          <a href="#!">https://www.linkedin.com/in/benjamin-portis-26197a139/</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">https://github.com/benjam123</a>
        </li>
      </ul>
      </Col>
    </Row>
  </Container>
  <div className="">
    <Container fluid>
  
    </Container>
  </div>
</Footer>
);
}
}

export default FooterPage;