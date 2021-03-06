import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Col, CardBody } from "reactstrap";

const PricingBox = ({ pricings }) => {
  return (
    <Fragment>
      {pricings.map((pricing, key) => (
        <Col lg={4} key={key}>
          <div className="pricing-plan card text-center">
            <CardBody className="p-4">
              <h5 className="mt-2 mb-5">{pricing.title}</h5>

              <h1 className="mb-5">
                <sup>
                  <small>$</small>
                </sup>
                {pricing.price}/{" "}
                <span className="font-16">{pricing.duration}</span>
              </h1>

              <div>
                <Link to="#" className="btn btn-success">
                  Join now
                </Link>
              </div>
              <div className="plan-features mt-5">
                {pricing.features.map((feature, key) => (
                  <p key={key}>
                    {feature.title} :{" "}
                    <span className="text-success">{feature.value}</span>
                  </p>
                ))}
              </div>
            </CardBody>
          </div>
        </Col>
      ))}
    </Fragment>
  );
};

export default PricingBox;
