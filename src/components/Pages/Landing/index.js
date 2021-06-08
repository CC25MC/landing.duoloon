import { Fragment, useState, useEffect } from "react";
import {
  Header,
  Service,
  // Features,
  Briefcase,
  Pricing,
  Subscribe,
  Footer,
} from "../../../components";
import { COPY } from "../../../copy";
import Section from "./Section";

export const Landing = () => {
  const navItems = [
    { id: 1, idnm: "home", navheading: COPY["home"] },
    { id: 2, idnm: "services", navheading: COPY["services"]  },
    // { id: 3, idnm: "features", navheading: COPY["features"]  },
    { id: 3, idnm: "pricing", navheading: COPY["pricing"]  },
    { id: 4, idnm: "briefcase", navheading: COPY["briefcase"]  },
    { id: 5, idnm: "aboutUs", navheading: COPY["aboutUs"]  },

  ];
  const [imglight, setImglight] = useState(false);
  const [navClass, setNavClass] = useState("");

  useEffect(() => {
    const pos = 0;
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

      {/* <Features /> */}

      <Pricing />

      <Briefcase />

      <Subscribe />

      <Footer />
    </Fragment>
  );
};
