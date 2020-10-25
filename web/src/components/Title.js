import React, { useState } from "react";
import Baffle from "baffle-react";

const Title = ({ title = "" }) => {
  const [obfuscate, setObfuscate] = useState(true);
  if (title.length > 0) {
    setTimeout(() => {
      setObfuscate(false);
    }, 250);
  } else {
    if (!obfuscate) {
      setObfuscate(true);
    }
  }
  return (
    <h1 className="title">
      <Baffle
        speed={50}
        characters="AbcdeFGHijKmLNOpqrsTuVWxYZ"
        revealDuration={500}
        revealDelay={0}
        obfuscate={obfuscate}
      >
        {title.length > 0 ? title : "Visa to the Moon"}
      </Baffle>
    </h1>
  );
};

export default Title;
