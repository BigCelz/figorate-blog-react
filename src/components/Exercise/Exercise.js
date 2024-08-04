import "./Exercise.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Exercise() {
  return (
    <section className="exercise">
      <Container>
        <Row>
          <Col md={12}>
            <div className="exercise-content">
              <h2 className="exercise-head">Exercises You can do without acess to gym equipment </h2>
              <p className="exercise-word">
                Not having access to fully functioning gym should not stop You
                from chasing that dream body, here are some workout routines You
                can perform with little or no equipment
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Exercise;
