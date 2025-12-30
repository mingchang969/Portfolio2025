import React, { forwardRef, useState, useEffect, useRef } from "react";
import MorphCardTabs from "../components/MorphCardTabs_light";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";

const images = ["cover", "motivation", "researchA", "researchB"];
const mobileImages = {};
const desktopImages = {};

images.forEach((name) => {
  mobileImages[name] = `/asset/think_${name}_M_2.png`;
  desktopImages[name] = `/asset/think_${name}_D_2.png`;
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
        每當行程排定後多多少少忘了時間和進行順序，甚至可能中途想找點新東西，卻一時想不到？
        <br />
        <br />
        想像有一個導遊，簡化成App的概念，他能帶領何時何地要到哪裡，並提供景點導覽介紹，還能即時推薦附近有什麼好吃好買等等，就可以讓旅途更加安心，不會緊繃地想著等一下去哪或忘了要幹嘛，很適合喜歡自由行的資訊發達時代
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
        一般的行程地圖能提供該順序和路線，但比較缺乏互動感和自動化，且行程都是訂好，沒有額外彈性資訊，想要free一點，且有多點選擇
        <br />
        <br />
        當人多的時候，旅友資訊也顯得重要，也參考了zenly概念，使能分頭行動又不易走散
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
            雖然行程能過一目瞭然的顯現，但加點<span>互動感</span>和
            <span>智慧化</span>
            ，讓旅人不用擔心太多資訊，能夠主動統整和適時提供資訊
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
            當地點人潮較擁擠或地形複雜，旅友較多的情況，較容易<span>走散</span>
            ，能夠提供彼此地理位置或聯絡資訊也是重要一環
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
            當實際旅遊時，難免投入其中不知所措，又不想一直小心翼翼
            <span>無法享受</span>，需考量如何將未來可用資訊妥善統整並設計
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
            結合導遊和<span>智慧助理</span>
            概念，提供如何走行程，並在景點中提供導覽語音資訊，當進行活動給予提醒和額外補充資訊
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
            將旅友彼此<span>位置顯示</span>
            於地圖中，並加入聯絡通話還有聊天室，能讓彼此活動更加安全和彈性，也能即時互動和分享資訊
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
            資訊模組導入行程，將未來可用資訊作準備，提供<span>自動提示</span>和
            <span>景點包</span>，讓旅程轉折中有彈性且能好好地放鬆享受
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

const Works_5 = forwardRef(({ id }, ref) => {
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

export default Works_5;
