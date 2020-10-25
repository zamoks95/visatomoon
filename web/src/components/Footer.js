import React from "react";

const Footer = ({ title = "This is a button!" }) => {
  return (
    <h3
      className="footer__content"
      dangerouslySetInnerHTML={{ __html: title }}
    />
  );
};

export default Footer;
