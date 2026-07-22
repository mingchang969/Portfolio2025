import React, { forwardRef } from "react";
import Reveal from "../components/Reveal";
const images = ["leaf2", "leaf2_"];
const mobileImages = {};
const desktopImages = {};

images.forEach((name) => {
  mobileImages[name] = require(`../images/mobile/experience/${name}.png`);
  desktopImages[name] = require(`../images/desktop/experience/${name}.png`);
});
const Experience = forwardRef(({ id }, ref) => {
  return (
    <div id={id} ref={ref}>
      <div className="experienceContainer">
        <div className="line">
          <Reveal direction="bottom" delay={0}>
            <div className="dot">
              <div className="content">
                <div className="title">互動數位機台</div>
                <div className="subtitle">畢展團隊開發</div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="bottom" delay={0.2}>
            <div className="dot">
              <div className="content">
                <div className="title">智能生活App</div>
                <div className="subtitle">公司產品開發</div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="bottom" delay={0.4}>
            <div className="dot">
              <div className="content">
                <div className="title">論壇後台系統</div>
                <div className="subtitle">公司產品開發</div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="bottom" delay={0.6}>
            <div className="dot">
              <div className="content">
                <div className="title">旅行嚮導</div>
                <div className="subtitle">個人產品設計</div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="bottom" delay={0.8}>
            <div className="dot">
              <div className="content">
                <div className="title">航空異動系統</div>
                <div className="subtitle">個人產品設計</div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="bottom" delay={0.8}>
            <div className="dot">
              <div className="content">
                <div className="title">地標日誌</div>
                <div className="subtitle">獨立產品開發</div>
              </div>
            </div>
          </Reveal>
        </div>
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

export default Experience;
