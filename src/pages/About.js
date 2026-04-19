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
            比起視覺奪目
            <br />
            更在意「機能與產品價值」
            <br />
            讓我用更全方位的思維
            <br />
            讓設計帶給人們美好價值
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
