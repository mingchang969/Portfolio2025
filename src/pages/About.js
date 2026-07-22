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
            － 始 於 洞 察 －
            <br />
               成 於 設 計 
            <br />
               落 於 實 踐 
            <br />
            － 終 於 價 值 －
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
