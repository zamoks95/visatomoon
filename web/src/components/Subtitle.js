import React, { useState } from "react";
import Image from "./Image";
import Baffle from "baffle-react";

const Subtitle = ({
  title = "Your",
  hashes = "#hash-2 #hash-2",
  iconTrip,
  loaded,
}) => {
  const [obfuscate, setObfuscate] = useState(true);
  console.log();
  if (title.length > 10) {
    setTimeout(() => {
      setObfuscate(false);
    }, 250);
  } else {
    if (!obfuscate) {
      setObfuscate(true);
    }
  }
  let newHashes = hashes.split(" ");
  return (
    <div className="subtitle__content">
      <Image
        src={iconTrip}
        external={true}
        alt="Subtitle Logo"
        imgClass="subtitle__content__image"
        loaded={loaded}
      />
      <h2 className="subtitle__content__title">
        <Baffle
          speed={50}
          characters="AbcdeFGHijKmLNOpqrsTuVWxYZ"
          revealDuration={800}
          revealDelay={500}
          obfuscate={obfuscate}
          exclude={[" ", "!"]}
        >
          {title}
        </Baffle>
      </h2>
      <span className="subtitle__content__separator"></span>
      <ul className="subtitle__content__hash">
        {newHashes.map((hash, index) => (
          <li key={index} className="subtitle__content__hash__item">
            <Baffle
              speed={50}
              characters="AbcdeFGHijKmLNOpqrsTuVWxYZ"
              revealDuration={1250}
              revealDelay={500}
              obfuscate={obfuscate}
            >
              {hash}
            </Baffle>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subtitle;
