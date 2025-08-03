import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    // Navbar height handling
    const navbar = document.querySelector(".navbar");
    const custHead = document.getElementById("custhead");
    const innerBanner = document.querySelector(".inner-comoonbanner");
    const width = window.innerWidth;

    if (navbar && custHead && innerBanner && width <= 1200) {
      const headHeight = navbar.offsetHeight;
      innerBanner.style.marginTop = `${headHeight}px`;
    }

    // Collapse menu handlers for Bootstrap
    const mainNav = document.getElementById("mainNav");

    const onCollapseShow = () => {
      if (custHead) custHead.style.height = "100vh";
    };

    const onCollapseHide = () => {
      if (custHead) custHead.style.height = "";
    };

    if (mainNav) {
      mainNav.addEventListener("shown.bs.collapse", onCollapseShow);
      mainNav.addEventListener("hidden.bs.collapse", onCollapseHide);
    }
 

    // Cleanup listeners on unmount
    return () => {
      if (mainNav) {
        mainNav.removeEventListener("shown.bs.collapse", onCollapseShow);
        mainNav.removeEventListener("hidden.bs.collapse", onCollapseHide);
      }

    };
  }, []);

};

export default Header;
