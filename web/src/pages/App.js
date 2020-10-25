import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import CtaButton from "../components/CtaButton";
import Controls from "../components/Controls";
import Subtitle from "../components/Subtitle";
import Footer from "../components/Footer";
import Title from "../components/Title";
import Image from "../components/Image";

const sliderDataType = {
  index: null,
  bgImage: "",
  iconTrip: "",
  logo: "",
  headerImage: "",
  backgroundMoon: "",
  imageRocket: "",
  title: "",
  subtitle: "",
  hash: "",
  linkprev: false,
  linknext: false,
  easeView: "",
  ctaText: "",
  ctaLink: "",
};
const totalImages = 6;
const App = () => {
  /* States Initialization - Start */
  let [totalImagesLoaded, setTotalImagesLoaded] = useState(0);
  const [sliderData, setSliderData] = useState(sliderDataType);
  /* States Initialization - End */

  const loadImage = () => {
    let newTotalLoaded = (totalImagesLoaded += 1);
    setTotalImagesLoaded(newTotalLoaded);
  };

  const loadSliderData = (sliderIndex) => {
    setSliderData(sliderDataType);
    setTotalImagesLoaded(0);
    axios
      .get("http://localhost:3003/sliderData", {
        params: {
          index: sliderIndex,
        },
      })
      .then((res) => {
        setSliderData(res.data);
        return res.data;
      })
      .catch((error) => {
        toast.error("🔥 API is on fire!", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(error);
      });
  };

  useEffect(() => {
    loadSliderData(0);
  }, []);

  return (
    <div className="App">
      <div className="layout">
        <main className="layout__front">
          <header className="layout__header header">
            <Image
              src={sliderData.logo}
              external={true}
              alt="Main Logo"
              imgClass="header__logo"
              loaded={loadImage}
            />
          </header>
          <section className="layout__intro">
            <Title title={sliderData.title} />
          </section>
          <section className="layout__cta">
            <CtaButton
              content={sliderData.ctaText}
              action={sliderData.ctaLink}
            />
          </section>
          <section className="layout__loader">
            <Controls
              progress={totalImagesLoaded}
              maxProgress={totalImages}
              prev={sliderData.linkprev}
              next={sliderData.linknext}
              index={sliderData.index}
              triggerLoad={loadSliderData}
            />
          </section>
          <section className="layout__subtitle subtitle">
            <Subtitle
              iconTrip={sliderData.iconTrip}
              title={sliderData.subtitle}
              hashes={sliderData.hash}
              loaded={loadImage}
            />
          </section>
          <footer className="layout__footer footer">
            <Footer title={"Expore<br/>the surface"} />
          </footer>
        </main>

        <div className="layout__back">
          <div className="layout__header layout__back__header">
            <Image
              src={sliderData.headerImage}
              external={true}
              alt="Background Image"
              imgClass="layout__background-image back-image"
              loaded={loadImage}
            />
          </div>
          <div className="layout__intro layout__back__intro">
            <Image
              src={sliderData.imageRocket}
              alt="Background Image"
              external={true}
              imgClass="layout__background-image back-image"
              loaded={loadImage}
            />
          </div>
          <div className="layout__cta layout__back__cta"></div>
          <div className="layout__subtitle layout__back__subtitle">
            <Image
              src={sliderData.bgImage}
              alt="Background Image"
              external={true}
              imgClass="layout__background-image back-image"
              loaded={loadImage}
            />
          </div>
          <div className="layout__footer layout__back__footer">
            <Image
              src={sliderData.backgroundMoon}
              external={true}
              alt="Background Image"
              imgClass="layout__background-image back-image"
              loaded={loadImage}
            />
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
