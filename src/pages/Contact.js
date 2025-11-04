import React, { forwardRef } from "react";
import Reveal from "../components/Reveal";
import { ReactComponent as Card } from "../images/card.svg";
import { ReactComponent as Icon_phone } from "../images/Icon_phone.svg";
import { ReactComponent as Icon_mail } from "../images/Icon_mail.svg";

const images_content = ["leaf1", "leaf1_4", "flamingo"];
const mobileImages_content = {};
const desktopImages_content = {};

const images = ["leaf1_", "leaf1_2", "leaf1_3", "flower", "flower_"];
const mobileImages = {};
const desktopImages = {};

images_content.forEach((name) => {
  mobileImages_content[name] = require(`../images/mobile/contact/${name}.png`);
  desktopImages_content[
    name
  ] = require(`../images/desktop/contact/${name}.png`);
});

images.forEach((name) => {
  mobileImages[name] = require(`../images/mobile/contact/${name}.png`);
  desktopImages[name] = require(`../images/desktop/contact/${name}.png`);
});

const Contact = forwardRef(({ id }, ref) => {
  return (
    <div id={id} ref={ref}>
      <div className="contactContainer">
        <div className="container">
          <div className="card">
            <Reveal direction="bottom" delay={0}>
              <Card className="cardSvg title-twinkle" />
            </Reveal>
            {images_content.map((name) => (
              <picture key={name}>
                <source
                  srcSet={desktopImages_content[name]}
                  media="(min-width:768px)"
                />
                <img
                  className={`${name} leaf-away`}
                  src={mobileImages_content[name]}
                  alt=""
                />
              </picture>
            ))}
            <Reveal direction="right" delay={0.2}>
              <div className="info title-twinkle">
                <div className="title">
                  <span>羅 明 正</span>
                  <br /> Benjamin Lo
                </div>
                <div className="item">
                  <Icon_phone /> <span>0972-150-278</span>
                </div>
                <div className="item">
                  <Icon_mail /> <span>mingchang969@gmail.com</span>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal direction="right" delay={0.4}>
            <div className="context title-twinkle_" style={{transformOrigin:"right center"}}>
              我是羅明正
              <br />
              期待與您的合作
              <div className="line"></div>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="homeBg">
        <div className="container">
          {images.map((name) => (
            <picture key={name}>
              <source srcSet={desktopImages[name]} media="(min-width:768px)" />
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

export default Contact;
