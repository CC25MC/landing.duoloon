import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Media } from "reactstrap";
import FeatherIcon from "feather-icons-react";

//Import Footer link
import FooterLinks from "./FooterLinks";
const links1 = [
  { link: "#", title: "About Us" },
  { link: "#", title: "Media & Press" },
  { link: "#", title: "Career" },
  { link: "#", title: "Blog" },
];
const links2 = [
  { link: "#", title: "Pricing" },
  { link: "#", title: "For Marketing" },
  { link: "#", title: "For CEOs" },
  { link: "#", title: "For Agencies" },
  { link: "#", title: "Our Apps" },
];

export const Footer = () => {
  return (
    <Fragment>
      <section className="footer" id={"aboutUs"}>
        <Container>
          <Row>
            <Col lg={4} sm={6}>
              <div>
                <h5 className="mb-4 footer-list-title">About the Invoza</h5>
                <p>
                  The Invoza is a sed ut perspiciatis unde omnis iste natus
                  error sit voluptatem accusantium doloremque rem eaque{" "}
                </p>
              </div>
            </Col>
            <Col lg={{ size: 2, offset: 1 }} sm={6}>
              <div>
                <h5 className="mb-4 footer-list-title">Company</h5>
                <ul className="list-unstyled footer-list-menu">
                  {links1.map((fLink, key) => (
                    <li key={key}>
                      <Link to={fLink.link}>{fLink.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col lg={2} sm={6}>
              <div>
                <h5 className="mb-4 footer-list-title">More Info</h5>
                <ul className="list-unstyled footer-list-menu">
                  {links2.map((fLink, key) => (
                    <li key={key}>
                      <Link to={fLink.link}>{fLink.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            <Col lg={3} sm={6}>
              <div>
                <h5 className="mb-4 footer-list-title">Contact</h5>

                <div>
                  <Media>
                    <i>
                      <FeatherIcon
                        icon="map-pin"
                        className="icon-dual-light icons-sm mt-1 mr-2"
                      />
                    </i>
                    <Media body>
                      <p>476 University Drive Ridge, IL 61257</p>
                    </Media>
                  </Media>
                  <Media>
                    <i>
                      <FeatherIcon
                        icon="mail"
                        className="icon-dual-light icons-sm mt-1 mr-2"
                      />
                    </i>
                    <Media body>
                      <p>exampleabc@armyspy.com</p>
                    </Media>
                  </Media>
                  <Media>
                    <i>
                      <FeatherIcon
                        icon="phone"
                        className="icon-dual-light icons-sm mt-1 mr-2"
                      />
                    </i>
                    <Media body>
                      <p>0123-456-789</p>
                    </Media>
                  </Media>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Render footer links */}
      <FooterLinks />
    </Fragment>
  );
};
