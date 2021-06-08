import { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//Import Section Title
import { Title } from "../..";
import BriefcaseBox from "./BriefcaseBox";
import { COPY, clients } from "../../../copy";

export const Briefcase = () => {
  const responsive = {
    576: {
      items: 2,
    },
  };
  return (
    <Fragment>
      <section className="section bg-light" id="briefcase">
        <Container>
          <Title
            subtitle={ COPY["briefcase"] }
            title={ COPY["briefcase.title"] }
            desc={ COPY["briefcase.desc"] }
          />

          <Row>
            <Col lg={12}>
              <h5 className="mb-4">
                <i className="mdi mdi-format-quote-open text-primary h1 mr-1"></i>{" "}
                { COPY["briefcase.client"] }
                <i className="mdi mdi-format-quote-close text-primary h1 mr-1"></i>{" "}
              </h5>

              <OwlCarousel
                className="owl-theme testi-carousel"
                id="testi-carousel"
                items={1}
                // loop={true}
                margin={10}
                nav={true}
                responsive={responsive}
              >
                <BriefcaseBox clients={clients} />
              </OwlCarousel>
            </Col>
          </Row>
        </Container>
      </section>
      
    </Fragment>
  );
};
