import { Fragment } from "react";
import { Row } from "reactstrap";

//Import Blog Box
import CounterBox from "./CounterBox";

export const Counter = () => {
  const counters = [
    { icon: "bookmark", title: "Projects", start: 10, end: 2581 },
    { icon: "user-plus", title: "No. of Clients", start: 2, end: 800 },
    { icon: "shopping-cart", title: "Cups of coffee", start: 608, end: 128 },
    { icon: "award", title: "Awards", start: 6, end: 47 },
  ];
  return (
    <Fragment>
      <Row id="counter">
        <CounterBox counters={counters} />
      </Row>
    </Fragment>
  );
};
