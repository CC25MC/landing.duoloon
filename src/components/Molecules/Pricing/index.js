import { Fragment, useState } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";

//Import Section Title
import { Title } from "../../../components";

//Import Pricing
import PricingBox from "./PricingBox";
const pricings1 = [
  {
    title: "Economy",
    price: 19,
    duration: "Mo",
    features: [
      { title: "Bandwidth", value: "1GB" },
      { title: "Onlinespace ", value: "50MB" },
      { title: "Support", value: "No" },
    ],
  },
  {
    title: "Premium",
    price: 29,
    duration: "Mo",
    features: [
      { title: "Bandwidth", value: "2GB" },
      { title: "Onlinespace ", value: "1GB" },
      { title: "Support", value: "No" },
    ],
  },
  {
    title: "Developer",
    price: 39,
    duration: "Mo",
    features: [
      { title: "Bandwidth", value: "3GB" },
      { title: "Onlinespace ", value: "2GB" },
      { title: "Support", value: "Yes" },
    ],
  },
];
const pricings2 = [
  {
    title: "Economy",
    price: 19,
    duration: "Year",
    features: [
      { title: "Bandwidth", value: "1GB" },
      { title: "Onlinespace ", value: "50MB" },
      { title: "Support", value: "No" },
    ],
  },
  {
    title: "Premium",
    price: 29,
    duration: "Year",
    features: [
      { title: "Bandwidth", value: "2GB" },
      { title: "Onlinespace ", value: "1GB" },
      { title: "Support", value: "No" },
    ],
  },
  {
    title: "Developer",
    price: 39,
    duration: "Year",
    features: [
      { title: "Bandwidth", value: "3GB" },
      { title: "Onlinespace ", value: "2GB" },
      { title: "Support", value: "Yes" },
    ],
  },
];
export const Pricing = () => {
  const [activeTab, setActiveTab] = useState("1");
  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <Fragment>
      <section className="section bg-light" id="pricing">
        <Container>
          <Title
            subtitle="Pricing"
            title="Choose your Plan"
            desc="It will be as simple as occidental in fact, it will be Occidental."
          />

          <Row>
            <Col lg={12}>
              <div className="text-center mb-4">
                <Nav pills className="pricing-nav-tabs mb-4">
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: activeTab === "1",
                      })}
                      onClick={() => {
                        toggleTab("1");
                      }}
                    >
                      Monthly
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: activeTab === "2",
                      })}
                      onClick={() => {
                        toggleTab("2");
                      }}
                    >
                      Yearly
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </Col>
          </Row>

          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <PricingBox pricings={pricings1} />
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <PricingBox pricings={pricings2} />
              </Row>
            </TabPane>
          </TabContent>
        </Container>
      </section>
    </Fragment>
  );
};
