import React, { forwardRef, useState, useEffect, useRef } from "react";
import MorphCardTabs from "../components/MorphCardTabs";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";

const images = ["cover", "flow","IA","dashboard", "information", "processing"];
const mobileImages = {};
const desktopImages = {};

images.forEach((name) => {
  mobileImages[name] = `/asset/product_${name}_M.png`;
  desktopImages[name] = `/asset/product_${name}_D.png`;
});

const tagData_1 = [
  {
    id: "emergencyState",
    bottom: "75%",
    left: "1.5%",
    context: "緊急度評分：透過系統評斷，來顯示和排序，減少人工負擔",
  },
  {
    id: "departureState",
    bottom: "78%",
    left: "6.5%",
    context: "航班行進狀態：以樣式區別，能直覺反應是否已進行",
  },
  {
    id: "changedTag",
    bottom: "78%",
    left: "14.5%",
    context: "異動標籤：以顏色和icon，快速分辨異動等級和原因",
  },
  {
    id: "timeLine",
    bottom: "78%",
    left: "45.5%",
    context: "時間軸：將輕重緩急圖像概念化，能夠直覺地概觀和比較",
  },
  {
    id: "taskState",
    bottom: "78%",
    left: "72.5%",
    context: "任務狀態：系統自動分發任務，並顯示類別和是否完成",
  },
  {
    id: "influenceState",
    bottom: "78%",
    left: "78.5%",
    context: "影響程度：長條圖來直覺比較是多是少，預估人力與時間成本",
  },
  {
    id: "summary",
    bottom: "16%",
    left: "85.5%",
    context: "總覽框：總結目前累積的多寡，有警示和協助概估的作用",
  },
];

const tagData_2 = [
  {
    id: "systemSummary",
    bottom: "80%",
    left: "17.5%",
    context: "系統總結：第一資訊一律置左或上，先概觀再決定下一步",
  },
  {
    id: "newOldCompare",
    bottom: "73%",
    left: "1.5%",
    context: "新舊比較：對齊比較，以顏色顯示已異動",
  },
  {
    id: "changedInfo",
    bottom: "56%",
    left: "1.5%",
    context: "異動資訊：隨時參考詳細的異動細節",
  },
  {
    id: "customerDetail",
    bottom: "44%",
    left: "1.5%",
    context: "顧客分布：評估顧客類型和數量，能全局掌握準備客服",
  },
  {
    id: "taskDetail",
    bottom: "32%",
    left: "1.5%",
    context: "任務總覽：列出所有處理方式的數據，並隨時更新進度條",
  },
  {
    id: "memo",
    bottom: "73%",
    left: "82.5%",
    context: "備註區：操作區一律置右或下，最後來備注方便交接",
  },
];

const tagData_3 = [
  {
    id: "operationWarming",
    bottom: "83%",
    left: "17.5%",
    context: "操作警告：重要資訊一律置左或上，第一線的提前告知",
  },
  {
    id: "batchSelected",
    bottom: "78%",
    left: "1.5%",
    context: "批次選取：可減少多次重複操作，節省時間和精力",
  },
  {
    id: "operationState",
    bottom: "78%",
    left: "57.5%",
    context: "處理狀態：顯示該旅客可操作的項目，並可直接操作",
  },
  {
    id: "seatMap",
    bottom: "78%",
    left: "82.5%",
    context: "座位分布：有圖像化分布，有助於只靠文字判斷而誤認",
  },
  {
    id: "finalCheck",
    bottom: "62%",
    left: "82.5%",
    context: "最終確認：操作前 FinalCheck 避免遺漏與誤按項目",
  },
  {
    id: "history",
    bottom: "27%",
    left: "82.5%",
    context: "紀錄區：最終資訊一律置右或下，來check已成功執行",
  },
];

const Analysis = () => (
  <>
    <div style={{ position: "relative" }}>
      <picture>
        <source srcSet={desktopImages["flow"]} media="(min-width:768px)" />
        <motion.img
          className="defaultCover_2"
          src={mobileImages["flow"]}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.3 }}
        />
      </picture>
      <picture>
        <source srcSet={desktopImages["IA"]} media="(min-width:768px)" />
        <motion.img
          className="defaultCover_2"
          src={mobileImages["IA"]}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.3 }}
        />
      </picture>
    </div>
  </>
);

const Dashboard = () => (
  <>
    <div style={{ position: "relative" }}>
      {tagData_1.map((d, i) => (
        <Reveal direction="top" delay={0.2 * i} key={d.id}>
          <div
            className="tagNum"
            style={{ position: "absolute", bottom: d.bottom, left: d.left }}
          >
            {i + 1}
          </div>
        </Reveal>
      ))}
      <picture>
        <source srcSet={desktopImages["dashboard"]} media="(min-width:768px)" />
        <motion.img
          className="defaultCover_2"
          src={mobileImages["dashboard"]}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.3 }}
        />
      </picture>
    </div>
    <div className="introContainer">
      {tagData_1.map((d, i) => (
        <Reveal direction="left" delay={0.2 * i} key={d.id}>
          <div className="tagIntro">
            <div className="tagNum">{i + 1}</div>
            {d.context}
          </div>
        </Reveal>
      ))}
    </div>
  </>
);

const Information = () => (
  <>
    <div style={{ position: "relative" }}>
      {tagData_2.map((d, i) => (
        <Reveal direction="top" delay={0.2 * i} key={d.id}>
          <div
            className="tagNum"
            style={{ position: "absolute", bottom: d.bottom, left: d.left }}
          >
            {i + 1}
          </div>
        </Reveal>
      ))}
      <picture>
        <source
          srcSet={desktopImages["information"]}
          media="(min-width:768px)"
        />
        <motion.img
          className="defaultCover_2"
          src={mobileImages["information"]}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.3 }}
        />
      </picture>
    </div>
    <div className="introContainer">
      {tagData_2.map((d, i) => (
        <Reveal direction="left" delay={0.2 * i} key={d.id}>
          <div className="tagIntro">
            <div className="tagNum">{i + 1}</div>
            {d.context}
          </div>
        </Reveal>
      ))}
    </div>
  </>
);

const Processing = () => (
  <>
    <div style={{ position: "relative" }}>
      {tagData_3.map((d, i) => (
        <Reveal direction="top" delay={0.2 * i} key={d.id}>
          <div
            className="tagNum"
            style={{ position: "absolute", bottom: d.bottom, left: d.left }}
          >
            {i + 1}
          </div>
        </Reveal>
      ))}
      <picture>
        <source
          srcSet={desktopImages["processing"]}
          media="(min-width:768px)"
        />
        <motion.img
          className="defaultCover_2"
          src={mobileImages["processing"]}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.3 }}
        />
      </picture>
    </div>
    <div className="introContainer">
      {tagData_3.map((d, i) => (
        <Reveal direction="left" delay={0.2 * i} key={d.id}>
          <div className="tagIntro">
            <div className="tagNum">{i + 1}</div>
            {d.context}
          </div>
        </Reveal>
      ))}
    </div>
  </>
);

const tabs = [
    {
    id: "Analysis",
    title: "流程/功能/架構",
    content: " 先列出使用者流程，再思考拆解功能需求為何，並整合建立資訊架構",
    component: <Analysis />,
  },
  {
    id: "changDashboard",
    title: "異動總覽",
    content: "即時彙整所有延誤與取消航班，在最短時間掌握整體狀況與處理優先順序",
    component: <Dashboard />,
  },
  {
    id: "detailInformation",
    title: "詳細資訊",
    content: "聚焦單一航班資訊，協助客服在處理旅客前先建立完整情境理解",
    component: <Information />,
  },
  {
    id: "customerProcessing",
    title: "旅客處理",
    content: "系統依據航班狀態與規則，自動標示每位旅客可採取的處理方式",
    component: <Processing />,
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
                <span>產品與特色</span>
                <p>Product Feature</p>
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
                      media="(min-width:768px)"
                    />
                    <motion.img
                      className="defaultCover_2"
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

export default Works_1;
