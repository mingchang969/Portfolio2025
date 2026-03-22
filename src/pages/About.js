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
            比起畫漂亮畫面
            <br />
           「這個設計是否真的解決問題」
            <br />
            我擅長從使用者與商業目標之間找到平衡
            <br />
            讓設計真正發揮影響力
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
