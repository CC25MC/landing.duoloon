import { Fragment } from "react";
import { Col } from "reactstrap";
import CountUp from "react-countup";
import FeatherIcon from "feather-icons-react";

const CounterBox = ({ counters }) => {
  return (
    <Fragment>
      {counters.map((counter, key) => (
        <Col xl={3} sm={6} key={key}>
          <div className="text-center mt-4">
            <i>
              <FeatherIcon
                icon={counter.icon}
                className="icon-dual-white icons-lg"
              />
            </i>
            <h2 className="counter-value text-white mt-4">
              <CountUp start={counter.start} end={counter.end} duration={10} />
            </h2>
            <p className="font-16 text-white-50">{counter.title}</p>
          </div>
        </Col>
      ))}
    </Fragment>
  );
};

export default CounterBox;
