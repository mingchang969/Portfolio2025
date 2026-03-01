import React, { forwardRef, useState, useEffect, useRef } from "react";
import MorphCardTabs from "../components/MorphCardTabs_light";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";

const images = ["cover", "motivation", "research"];
const mobileImages = {};
const desktopImages = {};

images.forEach((name) => {
  mobileImages[name] = `/asset/think_${name}_M_3.png`;
  desktopImages[name] = `/asset/think_${name}_D_3.png`;
});

const images_ = ["leaf1", "leaf1_", "flower", "flower_"];
const mobileImages_P = {};
const desktopImages_P = {};
const mobileImages_S = {};
const desktopImages_S = {};

images_.forEach((name) => {
  mobileImages_P[name] = require(
    `../images/mobile/works/painPoints/${name}.png`,
  );
  desktopImages_P[name] = require(
    `../images/desktop/works/painPoints/${name}.png`,
  );
});

images_.forEach((name) => {
  mobileImages_S[name] = require(
    `../images/mobile/works/solutions/${name}.png`,
  );
  desktopImages_S[name] = require(
    `../images/desktop/works/solutions/${name}.png`,
  );
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
        航班因天候、機務或航管因素發生延誤或取消時，
        客服人員需要在短時間內完成以下任務：
        <br />
        <br />
        １確認航班狀態
        <br />
        ２查詢受影響旅客
        <br />
        ３協助改票／退票／補償
        <br />
        ４回應旅客來電或櫃檯需求
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
        <b>Persona</b>：客服人員
        <br />
        <b>Scenario</b>：尖峰時段、同時處理多位旅客
        <br />
        <br />
        怕點錯、怕漏掉規則，不確定哪些旅客有補償資格，要一邊安撫情緒、一邊操作系統
        <br />
        <br />
        資訊圖像化+系統自動化+安心感
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
            資訊分散在不同系統，操作流程複雜、步驟多，容易增加
            <span>作業時間</span>和<span>疲勞感</span>
            ，不但容易降低效率和造成失誤
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
            新手客服較不易上手，學習成本提高，當密密麻麻的<span>資訊湧現</span>
            也容易引發<span>緊張感</span>，應避免形成長期高壓環境
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
            數量大漏洞多，如何避免<span>反直覺</span>和<span>誤觸</span>
            ，甚至操作錯誤時，有效防呆和補救方案，使用者真心訴求的是什麼？
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
            以重要性排列頁面層級，常看資訊擺外面，詳細資訊擺裡面，並
            <span>減少層數</span>和多餘<span>步驟</span>，以簡約乾淨降低負擔感
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
            多善用<span>圖像化</span>和<span>直覺性</span>
            引導，甚至當資訊爆量時，系統仍可以自動化代替純手動來引導建議，降低人工誤判
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
            避免按鈕誤觸的設計，重大決策的按鈕有<span>防呆機制</span>和<span>風險聲明</span>，和補救方案提供，建立安心感和可靠度
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
