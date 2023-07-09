import React from "react";
import FooterList from "./footerList";

const Footer = () => {
  return (
    <footer className="p-8 flex flex-col md:flex-row justify-between">
      <FooterList
        title="Flora Vibes"
        items={["about us", "privacy policy", "terms and conditions"]}
      />
      <FooterList
        title="information"
        items={["contact us", "services", "pricing"]}
      />
      <FooterList title="about" items={["culture", "teams"]} />
      <FooterList title="quick links" items={["blog", "reviews", "flowers"]} />
    </footer>
  );
};

export default Footer;
