import { Fragment, useState } from "react";
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse,
  // Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { COPY } from "../../../copy";

import ScrollspyNav from "./scrollSpy";

import logolight from "../../../assets/images/logo-light.png";
import logodark from "../../../assets/images/logo-dark.png";

export const Header = ({ navClass, imglight, navItems }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggle = () => setIsOpenMenu(!isOpenMenu);
  const targetId = navItems.map((item) => {
    return item.idnm;
  });
  return (
    <Fragment>
      <Navbar
        expand="lg"
        fixed="top"
        className={"navbar-custom sticky sticky-dark " + navClass}
      >
        <Container>
          <NavbarBrand className="logo text-uppercase" href="/">
            {imglight === true ? (
              <img src={logolight} alt="" className="logo-light" height="20" />
            ) : (
              <img src={logodark} alt="" className="logo-dark" height="20" />
            )}
          </NavbarBrand>
          <NavbarToggler onClick={toggle}>
            <i className="mdi mdi-menu"></i>
          </NavbarToggler>

          <Collapse id="navbarCollapse" isOpen={isOpenMenu} navbar>
            <ScrollspyNav
              scrollTargetIds={targetId}
              scrollDuration="200"
              headerBackground="true"
              activeNavClass="active"
              className="navbar-collapse"
            >
              <Nav navbar className="ml-auto navbar-center" id="mySidenav">
                {navItems.map((item, key) => (
                  <NavItem
                    key={key}
                    className={item.navheading === "Home" ? "active" : ""}
                  >
                    <NavLink href={"#" + item.idnm}> {item.navheading}</NavLink>
                  </NavItem>
                ))}
              </Nav>
              <Link to="#" className="btn btn-primary btn-rounded">
                {COPY["nav.button"]}
              </Link>
              {/* <Button color="success" className="btn-rounded navbar-btn">
                Try for Free
              </Button> */}
            </ScrollspyNav>
          </Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};
