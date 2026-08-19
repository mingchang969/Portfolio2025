import React, { forwardRef, useState, useEffect, useRef } from "react";
import MorphCardTabs from "../components/MorphCardTabs_picture";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";
import UserJourneyMap from "../components/UserJourneyMap";

const stages = ["認知", "考慮", "決定", "使用"];

const tabs = [
  {
    id: "home",
    title: "專案追蹤",
    content_1: "讓不確定從哪開始，到快速找到需關注的專案",
    image: "/asset/userMap_home.png",
    rows: [
      {
        label: "行為",
        data: [
          "了解目前專案分布",
          "依專案狀態、進度查看",
          "找問題去調整策略",
          "依問題著手調整",
        ],
      },
      {
        label: "情緒",
        type: "emotion", // 👈 特殊類型：顯示曲線
        data: [30, 30, 90, 80], // 數字代表情緒高低 (0-100)
      },
      {
        label: "痛點",
        data: ["資訊量太多", "專案輕重緩急", "問題被藏太深", "缺少不同分析視角"],
      },
      {
        label: "改善",
        data: ["重點化 圖表化", "語意顏色與排序", "AI全面資料庫分析", "團隊與排程模式"],
      },
    ],
  },
  {
    id: "team",
    title: "分配人力",
    content_1: "發現部分人員工作量過高，找到問題並做調整",
    image: "/asset/userMap_team.png",
    rows: [
      {
        label: "行為",
        data: ["查看團隊負責工作", "審視每人的任務量與進度", "找出須調整的人員", "重新調度人力支援"],
      },
      {
        label: "情緒",
        type: "emotion", // 👈 特殊類型：顯示曲線
        data: [20, 40, 50, 70], // 數字代表情緒高低 (0-100)
      },
      {
        label: "痛點",
        data: ["任務分散沒有歸納", "太多文字不直覺", "不顯眼", "不清楚繁忙度"],
      },
      {
        label: "改善",
        data: ["依脈絡重點分類", "視覺圖表階段化", "紅字亮燈", "繁忙刻度"],
      },
    ],
  },
  {
    id: "schedule",
    title: "估算排程",
    content_1: "發現任務重疊或延遲，能提前掌握風險與進度",
    image: "/asset/userMap_schedule.png",
    rows: [
      {
        label: "行為",
        data: [
          "查看近期專案排程",
          "比較任務時間交錯狀況",
          "依衝突來調整時程",
          "重新調配時程",
        ],
      },
      {
        label: "情緒",
        type: "emotion", // 👈 特殊類型：顯示曲線
        data: [50, 20, 30, 70], // 數字代表情緒高低 (0-100)
      },
      {
        label: "痛點",
        data: ["重點資訊不清", "時間錯綜關係很亂", "多層面的衝突", "專案緊繃度不清"],
      },
      {
        label: "改善",
        data: ["將近專案先列出", "時間軸與顏色分布", "總.單專案與成員排程表", "緊繃刻度"],
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

const Works_15 = forwardRef(({ id }, ref) => {
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
                <span>使用者旅程分析</span>
                <p>User Journey Analysis</p>
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
                      style={{ width: "100%" }}
                    />
                  </motion.div>
                ) : (
                  /* 💤 沒選取時顯示封面照 */
                  <picture>
                    <source
                      srcSet="/asset/userMap_cover_D_4.png"
                      media="(min-width:1025px)"
                    />
                    <motion.img
                      className="defaultCover_1"
                      src="/asset/userMap_cover_M_4.png"
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

export default Works_15;
