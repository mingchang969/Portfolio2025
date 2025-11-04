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
                <div className="title">楊梅高中</div>
                <div className="subtitle">資訊科</div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="bottom" delay={0.2}>
            <div className="dot">
              <div className="content">
                <div className="title">臺北科技大學</div>
                <div className="subtitle">互動設計系</div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="bottom" delay={0.4}>
            <div className="dot">
              <div className="content">
                <div className="title">萬達人工智慧公司</div>
                <div className="subtitle">UI設計師</div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="bottom" delay={0.6}>
            <div className="dot">
              <div className="content">
                <div className="title">職業訓練</div>
                <div className="subtitle">網頁實務應用</div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="bottom" delay={0.8}>
            <div className="dot">
              <div className="content">
                <div className="title">中佑資訊公司</div>
                <div className="subtitle">網頁視覺設計師</div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="bottom" delay={0.8}>
            <div className="dot">
              <div className="content">
                <div className="title">職業訓練</div>
                <div className="subtitle">旅遊從業人員</div>
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
