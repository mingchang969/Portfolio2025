import { useState, useEffect, forwardRef } from "react";
import Reveal from "../components/Reveal";
import selfie from "../images/selfie.png";
import { ReactComponent as Wave1_m } from "../images/mobile/home/wave1.svg";
import { ReactComponent as Wave2_m } from "../images/mobile/home/wave2.svg";
import { ReactComponent as Wave1_d } from "../images/desktop/home/wave1.svg";
import { ReactComponent as Wave2_d } from "../images/desktop/home/wave2.svg";

const images = [
  "leaf1",
  "flower",
  "leaf1_",
  "leaf2",
  "leaf1_2",
  "flower_",
  "leaf2_",
];
const mobileImages = {};
const desktopImages = {};

images.forEach((name) => {
  mobileImages[name] = require(`../images/mobile/home/${name}.png`);
  desktopImages[name] = require(`../images/desktop/home/${name}.png`);
});

const Home = forwardRef(({ id }, ref) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1025);

  useEffect(() => {
    const isDesktopDetect = () => {
      setIsDesktop(window.innerWidth >= 1025);
    };
    window.addEventListener("resize", isDesktopDetect);
    return () => {
      window.removeEventListener("resize", isDesktopDetect);
    };
  }, []);

  return (
    <div id={id} ref={ref}>
      <div className="homeContainer">
        <div className="titleContainer">
          <Reveal direction="right" delay={0.4}>
            <div className="title title-twinkle">HI!</div>
          </Reveal>
          <Reveal direction="left" delay={0.4}>
            <div className="subtitle title-twinkle_">
              我是<span>UI/UX</span>設計師
            </div>
          </Reveal>
        </div>
      </div>
      <div className="homeBg">
        <div className="container_m">
          {images.map((name) => (
            <picture key={name}>
              <source srcSet={desktopImages[name]} media="(min-width:1025px)" />
              <img className={`${name} leaf-away`} src={mobileImages[name]} alt="" />
            </picture>
          ))}
          <Reveal direction="bottom" delay={0}>
            <img className="selfie" src={selfie} alt="" />
          </Reveal>
          {isDesktop ? (
            <>
              <Wave1_d className="wave1" />
              <Wave1_d className="wave1_" />
              <Wave2_d className="wave2" />
              <div className="container_d">
                <img
                  className="flower_2 leaf-away"
                  src={require("../images/desktop/home/flower_2.png")}
                  alt=""
                />
                <img
                  className="leaf1_3 leaf-away"
                  src={require("../images/desktop/home/leaf1_3.png")}
                  alt=""
                />
                <img
                  className="leaf1_4 leaf-away"
                  src={require("../images/desktop/home/leaf1_4.png")}
                  alt=""
                />
                <img
                  className="flower_3 leaf-away"
                  src={require("../images/desktop/home/flower_3.png")}
                  alt=""
                />
              </div>
            </>
          ) : (
            <>
              <Wave1_m className="wave1" />
              <Wave1_m className="wave1_" />
              <Wave2_m className="wave2" />
            </>
          )}
        </div>
      </div>
    </div>
  );
});

export default Home;
