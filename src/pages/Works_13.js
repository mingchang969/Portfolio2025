import React, { forwardRef, useState, useEffect, useRef } from "react";
import MorphCardTabs from "../components/MorphCardTabs_light";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";

const images = ["cover", "motivation", "research"];
const mobileImages = {};
const desktopImages = {};

images.forEach((name) => {
  mobileImages[name] = `/asset/think_${name}_M_4.png`;
  desktopImages[name] = `/asset/think_${name}_D_4.png`;
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
        多專案執行過程中，資訊容易分散於不同工具軟體，導致進度難以掌握、任務責任不清。
        <br />
        <br />
        希望透過整合式專案管理系統，讓團隊快速掌握專案狀態、任務進度與協作資訊，提升整體工作效率。
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
      <div className="framer_">
        <picture>
          <source
            srcSet={desktopImages["research"]}
            media="(min-width:1025px)"
          />
          <img src={mobileImages["research"]} />
        </picture>
      </div>
    </div>

    <div className="context_container">
      <div className="context">
        <b>Persona：</b>
        <br />
        老闆、主管、員工
        <br />
        <br />
        <b>Scenario：</b>
        <br />
        追蹤專案、估算排程、分配人力
        當專案多了會讓資訊雜亂，因此依情境分成三個模式，顯示對應分析資訊，並選擇以下風格：
        <br />
        <br />
        長條圖+乾淨簡約+語意顏色
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
            專案當爆多時，需要及時追蹤和統合資訊，會是一大負擔，尤其臨頭<span>開天窗</span>，如何隨時隨刻的提醒和自動化的安排？
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
            當密密麻麻數據和圖表，學習成本提高，也容易<span>麻痹敏銳度</span>，哪些是首要焦點資訊，並降低使用者負擔，而不會迷路？
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
            任務分配不明確可能導致重工或漏工，排程脈絡不明確可能導致撞期或落後，<span>不透明化</span>的工作資訊要如何淺顯易懂？
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
            追隨科技引用AI模組，擔任隨時監控所有專案任務的<span>智能助理</span>，有什麼提問和處理的事項，24小時能隨call隨到不漏接
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
            盡量實現不用文字也能說話，<span>語意</span>顏色和簡單的<span>圖表</span>就能傳達意思，而什麼該情境動作就在什麼該畫面，少點層級
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
            以同樣的資料庫，去實現三種不同情境要看的資訊分析，漸少<span>畫面切換率</span>，省去來回比對心力，實現透明度與易用性
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

const Works_13 = forwardRef(({ id }, ref) => {
  const [active, setActive] = useState("motivation");
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
                <span>發想與定義</span>
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
                    clickOut={false}
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
                    clickOut={false}
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

export default Works_13;
