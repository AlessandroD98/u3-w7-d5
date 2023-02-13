import { Col, Row } from "react-bootstrap";
function PForTheFooter(props) {
  return (
    <Col>
      <Row>
        <Col className="PContainer">
          <p>{props.p1}</p>
          <p>{props.p2}</p>
          <p>{props.p3}</p>
          <p>{props.p4}</p>
        </Col>
      </Row>
    </Col>
  );
}
export default PForTheFooter;
