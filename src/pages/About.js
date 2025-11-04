import React, { forwardRef } from "react";
import Reveal from "../components/Reveal";

const images = ["leaf1", "flower", "leaf1_"];
const mobileImages = {};
const desktopImages = {};

images.forEach((name) => {
  mobileImages[name] = require(`../images/mobile/about/${name}.png`);
  desktopImages[name] = require(`../images/desktop/about/${name}.png`);
});

const About = forwardRef(({ id }, ref) => {
  return (
    <div id={id} ref={ref}>
      <div className="aboutContainer">
        <Reveal>
          <div className="context">
            未知就像一種引力
            <br />
            即使啟航於茫茫
            <br />
            始終能找到大陸和島嶼
            <br />
            等著我探險和創造
          </div>
        </Reveal>
      </div>

      <div className="homeBg">
        <div className="container">
          {images.map((name) => (
            <picture key={name}>
              <source srcSet={desktopImages[name]} media="(min-width:1025px)" />
              <img
                className={`${name} leaf-away`}
                src={mobileImages[name]}
                alt=""
              />
            </picture>
          ))}
        </div>
      </div>
    </div>
  );
});

export default About;
