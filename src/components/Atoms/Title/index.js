import { Fragment } from "react";
import { Row, Col } from "reactstrap";

export const Title = ({ title, subtitle, desc }) => {
  return (
    <Fragment>
      <Row className="justify-content-center">
        <Col lg={8}>
          <div className="text-center mb-5">
            <h5 className="text-primary text-uppercase small-title">
              {subtitle}
            </h5>
            <h4 className="mb-3">{title}</h4>
            <p>{desc}</p>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};