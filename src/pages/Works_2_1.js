import React, { forwardRef, useState, useEffect, useRef } from "react";
import MorphCardTabs from "../components/MorphCardTabs_light";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";

const images = ["cover"];
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

const IterationReason = () => (
  <motion.div
    key="iterationReason"
    className="content_motivation"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -40 }}
    transition={{ duration: 0.3 }}
  >
    <div className="context_container">
      <div className="context">
        經運行後，考量起創因適合先以低成本、簡單化去試水溫，以便之後開發者因輕量而更加彈性，不因資源限制和龐大架構而重建困難
        <br />
        <br />
        原產品流於社群網站模式，但設計原意是 地標分享 與 軌跡日誌，所以重新聚焦功能為行程脈絡，將每個點用脈絡線去串連起來
        <br />
        <br />
        故立下此三大重導方針 1.低成本 2.串連化 3.簡單化
      </div>
    </div>
    <div className="framer">
      <picture>
        <source
          srcSet={desktopImages["cover"]}
          media="(min-width:1025px)"
        />
        <img src={mobileImages["cover"]} />
      </picture>
    </div>
  </motion.div>
);
const LowerCost = () => {
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
      key="lowerCost"
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
          <span>1.</span>
        </div>
        <div className="context_container">
          <div className="context">
            因多圖片儲存雲端增加<span>支出</span>：
            所有成員可傳圖→ 限制圖片編輯權
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
            ? { transform: "translateX(-18%)" }
            : { transform: "translateX(0%)", flexDirection: "row-reverse" }
        }
      >
        <div className="title">
          <span>2.</span>
        </div>
        <div className="context_container">
          <div className="context">
            因創作模式，需要企劃<span>人力</span>：活動情境分類→系統演算法排序
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
          <span>3.</span>
        </div>
        <div className="context_container">
          <div className="context">
            因地圖搜尋API為免費<span>資源</span>：較慢速文字搜尋→排名和系統演算為主軸
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
const Linking = () => {
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
      key="linking"
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
          <span>1.</span>
        </div>
        <div className="context_container">
          <div className="context">
            地標過多 <span>零散</span>：無→新增行程模式，串起地標
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
          <span>2.</span>
        </div>
        <div className="context_container">
          <div className="context">
            地標少點 <span>時序感</span>：無→新增 路線圖 和 導覽頁
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
          <span>3.</span>
        </div>
        <div className="context_container">
          <div className="context">
            提供較薄弱的 <span>點子靈感</span>：無→行程分類標籤
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
const Simplification = () => {
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
      key="simplification"
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
          <span>1.</span>
        </div>
        <div className="context_container">
          <div className="context">
            因成員內容過多會偏離<span>主軸</span>：分享貼文 與 回饋留言→ 導覽頁
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
            ? { transform: "translateX(-18%)" }
            : { transform: "translateX(0%)", flexDirection: "row-reverse" }
        }
      >
        <div className="title">
          <span>2.</span>
        </div>
        <div className="context_container">
          <div className="context">
            必要性不夠的模式<span>層級</span>：排行最新→刪掉並化為系統演算排序
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
          <span>3.</span>
        </div>
        <div className="context_container">
          <div className="context">
            貼文串造成資訊和成本過於<span>龐大</span>：貼文串 →行程圖 與 導覽頁
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

const tabs = [
  {
    id: "iterationReason",
    title: "原因",
    component: <IterationReason />,
  },
  {
    id: "lowerCost",
    title: "低成本",
    component: <LowerCost />,
  },
  {
    id: "linking",
    title: "串連化",
    component: <Linking />,
  },
  {
    id: "simplification",
    title: "簡單化",
    component: <Simplification />,
  },
];

const Works_2_1 = forwardRef(({ id }, ref) => {
  const [active, setActive] = useState("iterationReason");
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
                <span>重新定位</span>
                <p>Iteration</p>
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

export default Works_2_1;
