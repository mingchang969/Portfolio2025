import React, { forwardRef } from "react";
import Reveal from "../components/Reveal";
import { ReactComponent as Icon } from "../images/mobile/skill/icon.svg";
import { ReactComponent as Icon_ } from "../images/mobile/skill/icon_.svg";
import { ReactComponent as Icon_2 } from "../images/mobile/skill/icon_2.svg";
import { ReactComponent as Icon_3 } from "../images/mobile/skill/icon_3.svg";
import { ReactComponent as Icon_4 } from "../images/mobile/skill/icon_4.svg";

const images = ["leaf1", "leaf1_"];
const mobileImages = {};
const desktopImages = {};

images.forEach((name) => {
  mobileImages[name] = require(`../images/mobile/skill/${name}.png`);
  desktopImages[name] = require(`../images/desktop/skill/${name}.png`);
});

const Skill = forwardRef(({ id }, ref) => {
  return (
    <div id={id} ref={ref}>
      <div className="skillContainer">
        <div className="itemContainer">
          <div className="item">
            <Reveal direction="left" delay={0}>
              <div className="icon">
                <Icon />
                UX
              </div>
            </Reveal>
            <Reveal direction="left" delay={0.2}>
              <div className="content">User Flow.IA <br />Usability testing</div>
            </Reveal>
          </div>
          <div className="item">
            <Reveal direction="left" delay={0.4}>
              <div className="icon">
                <Icon_ />
                UI
              </div>
            </Reveal>
            <Reveal direction="left" delay={0.6}>
              <div className="content">Wireframe/Prototype <br />Design system.RWD</div>
            </Reveal>
          </div>
          <div className="item">
            <Reveal direction="left" delay={0.8}>
              <div className="icon">
                <Icon_2 />
                協作
              </div>
            </Reveal>
            <Reveal direction="left" delay={1}>
              <div className="content">Figma.React.Html.Css <br />
              Product thinking</div>
            </Reveal>
          </div>
          <div className="item">
            <Reveal direction="left" delay={1.2}>
              <div className="icon">
                <Icon_3 />
                概念
              </div>
            </Reveal>
            <Reveal direction="left" delay={1.4}>
              <div
                className="content"
                style={{ height: "7rem", justifyContent: "space-between" }}
              >
                <div className="outlineText">
                  互<br />動
                </div>
                x
                <div className="outlineText">
                  觀<br />察
                </div>
                x
                <div className="outlineText">
                  設<br />計
                </div>
                x
                <div className="outlineText">
                  邏<br />輯
                </div>
              </div>
            </Reveal>
          </div>
          <div className="item" style={{ height: "10rem" }}>
            <Reveal direction="left" delay={1.6}>
              <div className="icon">
                <Icon_4 />
                戰力
              </div>
            </Reveal>
            <Reveal direction="left" delay={1.8}>
              <div
                className="content"
                style={{ flexDirection: "column", alignItems: "start" }}
              >
                <div className="outlineText_">從0到1可落地產品</div>
                <div className="outlineText_">實地考察的產品思維</div>
                <div className="outlineText_">擅與工程師跨域合作</div>
              </div>
            </Reveal>
          </div>
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

export default Skill;
