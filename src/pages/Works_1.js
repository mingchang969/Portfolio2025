import React, { forwardRef, useState, useEffect, useRef } from "react";
import MorphCardTabs from "../components/MorphCardTabs_light";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";

const images = ["cover", "motivation", "researchA", "researchB"];
const mobileImages = {};
const desktopImages = {};

images.forEach((name) => {
  mobileImages[name] = `/asset/think_${name}_M.png`;
  desktopImages[name] = `/asset/think_${name}_D.png`;
});

const images_ = ["leaf1", "leaf1_", "flower", "flower_"];
const mobileImages_P = {};
const desktopImages_P = {};
const mobileImages_S = {};
const desktopImages_S = {};

images_.forEach((name) => {
  mobileImages_P[
    name
  ] = require(`../images/mobile/works/painPoints/${name}.png`);
  desktopImages_P[
    name
  ] = require(`../images/desktop/works/painPoints/${name}.png`);
});

images_.forEach((name) => {
  mobileImages_S[
    name
  ] = require(`../images/mobile/works/solutions/${name}.png`);
  desktopImages_S[
    name
  ] = require(`../images/desktop/works/solutions/${name}.png`);
});

const Motivation = () => (
  <motion.div
    key="motivation"
    className="content_motivation"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -40 }}
    transition={{ duration: 0.3 }}
  >
    <div className="context_container">
      <div className="context">
        每當空閑不知道去哪裡的時候，打開地圖自己東找西找，最終還是沒有一個結果。
        <br />
        <br />
        如果一個想法，當我打開地圖，就有許多行家都先幫你網羅好的景點，會不會快很多呢？
        <br />
        <br />
        或許還可以創建各種主題的地圖，並統整一個平台，讓大家互相探索和紀錄，創造更多討論和紀念的可能性。
      </div>
    </div>
    <div className="framer">
      <picture>
        <source
          srcSet={desktopImages["motivation"]}
          media="(min-width:1025px)"
        />
        <img src={mobileImages["motivation"]} />
      </picture>
    </div>
  </motion.div>
);
const Research = () => (
  <motion.div
    key="research"
    className="content_research"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -40 }}
    transition={{ duration: 0.3 }}
  >
    <div className="framers">
      <div className="framer">
        <picture>
          <source
            srcSet={desktopImages["researchA"]}
            media="(min-width:1025px)"
          />
          <img src={mobileImages["researchA"]} />
        </picture>
      </div>
      <div className="framer">
        <picture>
          <source
            srcSet={desktopImages["researchB"]}
            media="(min-width:1025px)"
          />
          <img src={mobileImages["researchB"]} />
        </picture>
      </div>
    </div>

    <div className="context_container">
      <div className="context">
        <b>Google Map：</b>
        <br />
        只有一個共同的地圖，可以呈現所有使用者的點，資源內容詳細，但太多雜沒有主題分類
        <br />
        <br />
        <b>My Maps：</b>
        <br />
        有分別獨立的地圖，可以自我創建，有主題性和易讀性，但統合性低和資源零散
      </div>
    </div>
  </motion.div>
);
const PainPoints = () => {
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
    <motion.div
      key="painPoints"
      className="content_painPoints"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="itemContainer"
        style={
          isDesktop
            ? { transform: "translateX(-9%)", gap: "5px" }
            : { transform: "translateX(0%)", gap: "11px" }
        }
      >
        <div className="title">
          <span>Q</span>1
        </div>
        <div className="context_container">
          <div className="context">
            <b>Google Map</b> 匯集任何人的<span>資訊大</span>
            熔爐，可以有最詳盡的資源，但相反地無法快速找出重點，缺少主題性和歸類
          </div>
        </div>
        <picture>
          <source
            srcSet={desktopImages_P["leaf1"]}
            media="(min-width:1025px)"
          />
          <img className="leaf1 leaf-away" src={mobileImages_P["leaf1"]} />
        </picture>
        <picture>
          <source
            srcSet={desktopImages_P["flower"]}
            media="(min-width:1025px)"
          />
          <img className="flower leaf-away" src={mobileImages_P["flower"]} />
        </picture>
      </div>

      <div
        className="itemContainer"
        style={
          isDesktop
            ? { transform: "translateX(-21%)" }
            : { transform: "translateX(0%)", flexDirection: "row-reverse" }
        }
      >
        <div className="title">
          <span>Q</span>2
        </div>
        <div className="context_container">
          <div className="context">
            <b>My Maps</b>{" "}
            有創作性和主題性，但僅透過共同編輯連結，零散於網路各地，缺少一個
            <span>統整</span>和<span>曝光性</span>高的平台{" "}
          </div>
        </div>
        {isDesktop ? (
          <>
            <picture>
              <source
                srcSet={desktopImages_P["leaf1_"]}
                media="(min-width:1025px)"
              />
              <img
                className="leaf1_ leaf-away"
                src={mobileImages_P["leaf1_"]}
              />
            </picture>
            <picture>
              <source
                srcSet={desktopImages_P["flower_"]}
                media="(min-width:1025px)"
              />
              <img
                className="flower_ leaf-away"
                src={mobileImages_P["flower_"]}
              />
            </picture>
          </>
        ) : (
          <img
            className="leaf1_e leaf-away"
            src={require("../images/mobile/works/painPoints/flower_e.png")}
          />
        )}
      </div>

      <div
        className="itemContainer"
        style={
          isDesktop
            ? { transform: "translateX(12%)" }
            : { transform: "translateX(0%)" }
        }
      >
        <div className="title">
          <span>Q</span>3
        </div>
        <div className="context_container">
          <div className="context">
            兩者沒有一個群組圈的感覺，儘管可以共同編輯，以文字和圖片小註解，但還是
            <span>冰冷</span>專注實用性的清單{" "}
          </div>
        </div>
        {!isDesktop ? (
          <>
            <picture>
              <source
                srcSet={desktopImages_P["leaf1_"]}
                media="(min-width:1025px)"
              />
              <img
                className="leaf1_ leaf-away"
                src={mobileImages_P["leaf1_"]}
              />
            </picture>
            <picture>
              <source
                srcSet={desktopImages_P["flower_"]}
                media="(min-width:1025px)"
              />
              <img
                className="flower_ leaf-away"
                src={mobileImages_P["flower_"]}
              />
            </picture>
          </>
        ) : null}
      </div>
    </motion.div>
  );
};
const Solutions = () => {
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
    <motion.div
      key="solutions"
      className="content_solutions"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="itemContainer"
        style={
          isDesktop
            ? { transform: "translateX(-15%)", gap: "5px" }
            : {
                transform: "translateX(0%)",
                gap: "11px",
                flexDirection: "row-reverse",
              }
        }
      >
        <div className="title">
          <span>A</span>1
        </div>
        <div className="context_container">
          <div className="context">
            將核心從發散導向收斂，<span>少即是多</span>
            ，技術性不高，但設計性高，透過群組化、標籤化、主題化，發揮小也是一個市場
          </div>
        </div>
        <picture>
          <source
            srcSet={desktopImages_S["leaf1"]}
            media="(min-width:1025px)"
          />
          <img className="leaf1 leaf-away" src={mobileImages_S["leaf1"]} />
        </picture>
        <picture>
          <source
            srcSet={desktopImages_S["flower"]}
            media="(min-width:1025px)"
          />
          <img className="flower leaf-away" src={mobileImages_S["flower"]} />
        </picture>
      </div>

      <div
        className="itemContainer"
        style={
          isDesktop
            ? { transform: "translateX(7%)" }
            : { transform: "translateX(0%)" }
        }
      >
        <div className="title">
          <span>A</span>2
        </div>
        <div className="context_container">
          <div className="context">
            建立只需要一個連結的網站，讓資訊歸納又透明，吸引人們點閱或是創作，
            <span>激發</span>一些熱情發掘新地點和引起討埨度
          </div>
        </div>
        {isDesktop ? null : (
          <img
            className="leaf1_e leaf-away"
            src={require("../images/mobile/works/solutions/leaf1_e.png")}
          />
        )}
      </div>

      <div
        className="itemContainer"
        style={
          isDesktop
            ? { transform: "translateX(-10%)" }
            : { transform: "translateX(0%)", flexDirection: "row-reverse" }
        }
      >
        <div className="title">
          <span>A</span>3
        </div>
        <div className="context_container">
          <div className="context">
            群組和貼文化，好發言，易分享，同溫性，不單功能地分享地點，還有一起記錄回憶、共同探險發掘的
            <span>歸屬感</span>
          </div>
        </div>
        {!isDesktop ? (
          <>
            <picture>
              <source
                srcSet={desktopImages_S["leaf1_"]}
                media="(min-width:1025px)"
              />
              <img
                className="leaf1_ leaf-away"
                src={mobileImages_S["leaf1_"]}
              />
            </picture>
            <picture>
              <source
                srcSet={desktopImages_S["flower_"]}
                media="(min-width:1025px)"
              />
              <img
                className="flower_ leaf-away"
                src={mobileImages_S["flower_"]}
              />
            </picture>
          </>
        ) : (
          <>
            <picture>
              <source
                srcSet={desktopImages_S["leaf1_"]}
                media="(min-width:1025px)"
              />
              <img
                className="leaf1_ leaf-away"
                src={mobileImages_S["leaf1_"]}
              />
            </picture>
            <picture>
              <source
                srcSet={desktopImages_S["flower_"]}
                media="(min-width:1025px)"
              />
              <img
                className="flower_ leaf-away"
                src={mobileImages_S["flower_"]}
              />
            </picture>
          </>
        )}
      </div>
    </motion.div>
  );
};

const tabs = [
  {
    id: "motivation",
    title: "動機",
    component: <Motivation />,
  },
  {
    id: "research",
    title: "資料蒐集",
    component: <Research />,
  },
  {
    id: "painPoints",
    title: "問題點",
    component: <PainPoints />,
  },
  {
    id: "solutions",
    title: "解決點",
    component: <Solutions />,
  },
];

const Works_1 = forwardRef(({ id }, ref) => {
  const [active, setActive] = useState(null);
  const activeTab = tabs.find((tab) => tab.id === active);

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const isDesktopDetect = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", isDesktopDetect);
    return () => {
      window.removeEventListener("resize", isDesktopDetect);
    };
  }, []);

  return (
    <div id={id} ref={ref}>
      <div className="worksContainer">
        <div className="container">
          <div className="tabContainer_">
            <Reveal direction="left" delay={0}>
              <div className="title">
                <span>發想與設計</span>
                <p>Think & Design</p>
              </div>
            </Reveal>
            {isDesktop ? (
              <Reveal direction="left" delay={0.2}>
                <div>
                  <MorphCardTabs
                    data={tabs}
                    active={active}
                    setActive={setActive}
                  />
                </div>
              </Reveal>
            ) : null}
          </div>

          <div className="contentContainer_">
            <Reveal direction="left" delay={0.4}>
              <div>
                {activeTab ? (
                  activeTab.component
                ) : (
                  /* 💤 沒選取時顯示封面照 */
                  <picture>
                    <source
                      srcSet={desktopImages["cover"]}
                      media="(min-width:1025px)"
                    />
                    <motion.img
                      className="defaultCover_1"
                      src={mobileImages["cover"]}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -40 }}
                      transition={{ duration: 0.3 }}
                    />
                  </picture>
                )}
              </div>
            </Reveal>
          </div>

          {!isDesktop ? (
            <div className="mobileTabContainer">
              <Reveal direction="left" delay={0.2}>
                <div
                  className="mobileTabContent"
                  style={{ marginTop: "1.2rem" }}
                >
                  <MorphCardTabs
                    data={tabs}
                    active={active}
                    setActive={setActive}
                  />
                </div>
              </Reveal>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
});

export default Works_1;
