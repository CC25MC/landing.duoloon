import { Fragment } from "react";
import { Container, Row, Col, NavLink } from "reactstrap";
import { COPY } from "../../../copy";
//Import Images
import homeImg from "../../../assets/images/megafono.png";

const Section = () => {
  return (
    <Fragment>
      <section className="hero-section" id="home">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="hero-wrapper mb-4">
                <p className="font-16 text-uppercase">
                  {COPY["home.section.subtitle.intro"]}
                </p>
                <h1 className="hero-title mb-4">
                  {COPY["home.section.title1"]}
                  <span className="text-primary">
                    {COPY["home.section.title2"]}
                  </span>
                </h1>

                <p>{COPY["home.section.description"]}</p>

                <div className="mt-4">
                  <NavLink
                    href={"#services"}
                    className="btn btn-primary mt-2 mr-2"
                    style={{ width: "200px" }}
                  >
                    {" "}
                    {COPY["home.section.button"]}
                  </NavLink>
                  {/* <Link to="#" className="btn btn-success mt-2 mr-2 ml-1">
                    Learn more
                  </Link> */}
                </div>
              </div>
            </Col>

            <Col lg={5} sm={8}>
              <div className="mt-5 mt-lg-0">
                <img
                  src={homeImg}
                  alt="Megafono"
                  className="img-fluid mx-auto d-block"
                  style={{ marginTop: "-50px" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Section;
