import { Fragment, useState, useEffect } from "react";
import {
  Header,
  Service,
  Features,
  Clients,
  Pricing,
  Subscribe,
  Footer,
} from "../../../components";
import Section from "./Section";

export const Landing = () => {
  const navItems = [
    { id: 1, idnm: "home", navheading: "Home" },
    { id: 2, idnm: "services", navheading: "Services" },
    { id: 3, idnm: "features", navheading: "Features" },
    { id: 4, idnm: "clients", navheading: "Clients" },
    { id: 5, idnm: "pricing", navheading: "Plans" },
    { id: 6, idnm: "aboutUs", navheading: "About Us" },

  ];
  const [imglight, setImglight] = useState(false);
  const [navClass, setNavClass] = useState("");

  useEffect(() => {
    const pos = document.documentElement.scrollTop;
    const scrollNavigation = () => {
      var scrollup = document.documentElement.scrollTop;
      if (scrollup > pos) {
        setImglight(false);
        setNavClass("nav-sticky");
      } else {
        setImglight(false);
        setNavClass("");
      }
    };
    window.addEventListener("scroll", scrollNavigation, true);
  });

  return (
    <Fragment>
      {/* Importing Navbar */}
      <Header navItems={navItems} navClass={navClass} imglight={imglight} />

      {/* Importing section */}
      <Section />

      {/* Importing Service */}
      <Service />

      <Features />

      <Clients />

      <Pricing />

      <Subscribe />

      <Footer />
    </Fragment>
  );
};
