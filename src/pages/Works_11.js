import React, { forwardRef, useState, useEffect, useRef } from "react";
import MorphCardTabs from "../components/MorphCardTabs_picture";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";
import UserJourneyMap from "../components/UserJourneyMap";

const stages = ["認知", "考慮", "決定", "使用"];

const tabs = [
  {
    id: "dashboard",
    title: "隨時追蹤異動",
    content_1: "如何在零散資訊中輕鬆明瞭地發現狀況?",
    image: "/asset/userMap_dashboard.png",
    rows: [
      {
        label: "行為",
        data: [
          "查看 異動航班總覽",
          "觀察 時間軸和異動變化",
          "判斷 優先處理航班",
          "持續 追蹤航班狀態",
        ],
      },
      {
        label: "情緒",
        type: "emotion", // 👈 特殊類型：顯示曲線
        data: [40, 30, 60, 70], // 數字代表情緒高低 (0-100)
      },
      {
        label: "痛點",
        data: ["異動資訊零散", "無優先順序", "判斷耗時間", "更新不即時"],
      },
      {
        label: "改善",
        data: ["圖像化時間軸", "緊急程度排序", "顏色提示處理", "即時狀態更新"],
      },
    ],
  },
  {
    id: "information",
    title: "釐清航班狀況",
    content_1: "如何快速組織狀況和決策下一步?",
    image: "/asset/userMap_information.png",
    rows: [
      {
        label: "行為",
        data: ["開啟 航班詳細資訊", "查看 系統任務清單", "確認 後續處理方式", "持續追蹤 處理進度"],
      },
      {
        label: "情緒",
        type: "emotion", // 👈 特殊類型：顯示曲線
        data: [40, 30, 50, 60], // 數字代表情緒高低 (0-100)
      },
      {
        label: "痛點",
        data: ["資訊散落系統", "任務來源不明", "人工狀態不清", "進度難掌握"],
      },
      {
        label: "改善",
        data: ["整合航班資訊", "系統任務排序", "人工狀態標示", "處理進度可視"],
      },
    ],
  },
  {
    id: "processing",
    title: "操作旅客介面",
    content_1: "如何簡易高效穩定地處理龐大旅客?",
    image: "/asset/userMap_processing.png",
    rows: [
      {
        label: "行為",
        data: [
          "開啟 受影響旅客清單",
          "查看 可執行處理方式",
          "選擇 批次處理",
          "完成 旅客批次處理",
        ],
      },
      {
        label: "情緒",
        type: "emotion", // 👈 特殊類型：顯示曲線
        data: [30, 40, 50, 80], // 數字代表情緒高低 (0-100)
      },
      {
        label: "痛點",
        data: ["旅客數量龐大", "規則難記憶", "操作怕出錯", "批次流程複雜"],
      },
      {
        label: "改善",
        data: ["清楚旅客分類", "自動建議操作", "警示規則衝突", "一鍵批次處理"],
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
                      style={{ width: "100%" }}
                    />
                  </motion.div>
                ) : (
                  /* 💤 沒選取時顯示封面照 */
                  <picture>
                    <source
                      srcSet="/asset/userMap_cover_D_3.png"
                      media="(min-width:1025px)"
                    />
                    <motion.img
                      className="defaultCover_1"
                      src="/asset/userMap_cover_M_3.png"
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
