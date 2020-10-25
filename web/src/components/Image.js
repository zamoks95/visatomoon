import React, { useEffect, useState } from "react";

const Image = ({
  src = "",
  alt = "Image Alt",
  imgClass = "",
  external = false,
  loaded,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(false);
  }, [src]);
  const setLoaded = () => {
    setIsLoaded(true);
    loaded();
  };
  if (src.length > 0) {
    if (external && !src.includes("http")) {
      src = "http://localhost:3003/" + src;
    }
    return (
      <img
        src={src}
        onLoad={() => setLoaded()}
        className={`${imgClass} ${
          isLoaded ? "image__loaded" : "image__loading"
        }`}
        alt={alt}
      />
    );
  } else {
    return (
      <span
        className={`${imgClass} ${
          isLoaded ? "image__loaded" : "image__loading"
        }`}
      />
    );
  }
};
export default Image;
