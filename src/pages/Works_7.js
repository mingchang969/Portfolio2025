import React, { forwardRef, useState, useEffect, useRef } from "react";
import MorphCardTabs from "../components/MorphCardTabs_picture";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";
import UserJourneyMap from "../components/UserJourneyMap";

const stages = ["認知", "考慮", "決定", "使用"];

const tabs = [
  {
    id: "single",
    title: "挑戰環島一人行",
    content_1: "想計畫騎車拜訪每個縣市的風景，又能順利環島",
    content_2: "",
    image: "/asset/userMap_single.png",
    rows: [
      {
        label: "行為",
        data: [
          "想穩健目標式的逐一踩點",
          "<span>google Map</span> & 行事曆",
          "網路廣告<span>GoTogether</span>",
          "助理式的引導和提醒小工具",
        ],
      },
      {
        label: "情緒",
        type: "emotion", // 👈 特殊類型：顯示曲線
        data: [50, 30, 40, 80], // 數字代表情緒高低 (0-100)
      },
      {
        label: "痛點",
        data: [
          "",
          "騎車不方便翻找，丟三落四",
          "不確定穩定性和易用性",
          "詳細路況和找路",
        ],
      },
      {
        label: "改善",
        data: [
          "",
          "路線和行程引導，整合資訊",
          "多點概念形象宣傳",
          "提升至導航級專業準度",
        ],
      },
    ],
  },
  {
    id: "couple",
    title: "雙人出國之旅",
    content_1: "想要出去玩能夠輕輕鬆鬆，不因行程緊張和吵架",
    content_2: "",
    image: "/asset/userMap_couple.png",
    rows: [
      {
        label: "行為",
        data: [
          "行程多，想有歸納又方便看",
          "<span>Line</span>筆記本 & <span>ChatGPT</span>",
          "AI推薦<span>GoTogether</span>",
          "行程有變化，快搜新地點",
        ],
      },
      {
        label: "情緒",
        type: "emotion", // 👈 特殊類型：顯示曲線
        data: [60, 40, 50, 80], // 數字代表情緒高低 (0-100)
      },
      {
        label: "痛點",
        data: [
          "",
          "比較不靈活和易忘記",
          "嘗試動機不足",
          "搜尋模式事前要建立標點",
        ],
      },
      {
        label: "改善",
        data: [
          "",
          "統整好查看，自動化好輕鬆",
          "有更多活動和資訊庫",
          "快速套用情境地點包",
        ],
      },
    ],
  },
  {
    id: "group",
    title: "三五朋友來踏青",
    content_1: "人多想要大家跟上行程，保有自由彈性不走散",
    content_2: "",
    image: "/asset/userMap_group.png",
    rows: [
      {
        label: "行為",
        data: [
          "想統整和同步大家資訊",
          "<span>Line</span> & <span>App</span>尋找功能",
          "朋友推薦<span>GoTogether</span>",
          "明瞭定位點，能通話聊天室",
        ],
      },
      {
        label: "情緒",
        type: "emotion", // 👈 特殊類型：顯示曲線
        data: [20, 50, 50, 90], // 數字代表情緒高低 (0-100)
      },
      {
        label: "痛點",
        data: [
          "",
          "一次旅遊就要建立一個新群",
          "要每個人都下載",
          "定位可能會有誤差",
        ],
      },
      {
        label: "改善",
        data: [
          "",
          "簡易拋棄式群組設計",
          "提升通用性，變常用<span>App</span>",
          "<span>GPS</span>搭配藍芽偵測",
        ],
      },
    ],
  },
];

const images = ["leaf1", "leaf1_", "leaf2", "leaf2_", "flower"];
const mobileImages = {};
const desktopImages = {};

images.forEach((name) => {
  mobileImages[name] = require(`../images/mobile/works/userMap/${name}.png`);
  desktopImages[name] = require(`../images/desktop/works/userMap/${name}.png`);
});

const Works_7 = forwardRef(({ id }, ref) => {
  const [active, setActive] = useState(null);
  const activeTab = tabs.find((tab) => tab.id === active);

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1025);

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
          <div className="tabContainer_U">
            <Reveal direction="left" delay={0}>
              <div className="title">
                <span>使用者旅程地圖</span>
                <p>User Journey Map</p>
              </div>
            </Reveal>
            {isDesktop ? (
              <Reveal direction="left" delay={0.2}>
                <div>
                  <MorphCardTabs
                    data={tabs}
                    active={active}
                    setActive={setActive}
                    style={{ flexDirection: "column" }}
                  />
                </div>
              </Reveal>
            ) : null}
          </div>

          <div className="contentContainer_U">
            <Reveal direction="left" delay={0.4}>
              <div>
                {activeTab ? (
                  <motion.div
                    className="userMapContainer"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.3 }}
                  >
                    {images.map((name) => (
                      <picture key={name}>
                        <source
                          srcSet={desktopImages[name]}
                          media="(min-width:1025px)"
                        />
                        <img
                          className={`${name} leaf-away`}
                          src={mobileImages[name]}
                          alt=""
                        />
                      </picture>
                    ))}
                    <UserJourneyMap
                      stages={stages}
                      rows={activeTab.rows}
                      id={activeTab.id}
                    />
                  </motion.div>
                ) : (
                  /* 💤 沒選取時顯示封面照 */
                  <picture>
                    <source
                      srcSet="/asset/userMap_cover_D_2.png"
                      media="(min-width:1025px)"
                    />
                    <motion.img
                      className="defaultCover_1"
                      src="/asset/userMap_cover_M_2.png"
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
                <div className="mobileTabContent">
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

export default Works_7;
