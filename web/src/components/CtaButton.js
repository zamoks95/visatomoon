import React, { useState } from "react";
import Baffle from "baffle-react";

const CtaButton = ({
  content = "Start",
  action = "https://www.google.com/",
}) => {
  const [obfuscate, setObfuscate] = useState(true);
  if (content.length > 0) {
    setTimeout(() => {
      setObfuscate(false);
    }, 250);
  } else {
    if (!obfuscate) {
      setObfuscate(true);
    }
  }

  return (
    <a
      className="cta-button"
      href={action}
      target="_blank"
      rel="noreferrer noopener"
      title={`Visit: ${action}`}
    >
      <span className="cta-button__content">
        <Baffle
          speed={50}
          characters="AbcdeFGHijKmLNOpqrsTuVWxYZ"
          revealDuration={1000}
          revealDelay={500}
          obfuscate={obfuscate}
        >
          {content}
        </Baffle>
      </span>
    </a>
  );
};

export default CtaButton;
