import { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";
import { COPY } from "../../../copy";
import ServiceBox from "./ServiceBox";
import { Title } from "../../../components";
export const Service = () => {
  const services = [
    {
      icon: COPY["services.item.icon1"],
      title: COPY["services.item.title1"],
      desc: COPY["services.item.desc1"],
    },
    {
      icon: COPY["services.item.icon2"],
      title: COPY["services.item.title2"],
      desc: COPY["services.item.desc2"],
    },
    {
      icon: COPY["services.item.icon3"],
      title: COPY["services.item.title3"],
      desc: COPY["services.item.desc3"],
    },
    {
      icon: COPY["services.item.icon4"],
      title: COPY["services.item.title4"],
      desc: COPY["services.item.desc4"],
    },
  ];
  return (
    <Fragment>
      <section className="section bg-light" id="services">
        <Container>
          <Title
            subtitle={COPY["services"]}
            title={COPY["services.title"]}
            desc={COPY["services.desc"]}
          />

          <Row>
            <ServiceBox services={services} />
          </Row>

          {/* <Row className="mt-4">
            <Col lg={12}>
              <div className="text-center">
                <Link to="#" className="btn btn-success">
                  View more
                </Link>
              </div>
            </Col>
          </Row> */}
        </Container>
      </section>
      <section className="section bg-success">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={7}>
              <div className="text-center text-white-50">
                <h4 className="text-white">Best Solutions for your Business</h4>
                <p>
                  To achieve this, it would be necessary to have uniform
                  grammar, pronunciation and more common that of the individual
                  languages.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};
