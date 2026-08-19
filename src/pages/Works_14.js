import React, { forwardRef, useState, useEffect, useRef } from "react";
import MorphCardTabs from "../components/MorphCardTabs";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";
import { ReactComponent as Logo } from "../images/product_logo.svg";
import { ReactComponent as Check } from "../images/Check.svg";

const contentImages = ["cover", "flow4", "IA4"];
const mobileContentImages = {};
const desktopContentImages = {};

contentImages.forEach((name) => {
  mobileContentImages[name] = `/asset/product_${name}_M.png`;
  desktopContentImages[name] = `/asset/product_${name}_D.png`;
});

const Analysis = () => (
  <>
    <div style={{ position: "relative" }}>
      <picture>
        <source srcSet={desktopContentImages["flow4"]} media="(min-width:1025px)" />
        <motion.img
          className="defaultCover_2"
          src={mobileContentImages["flow4"]}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.3 }}
        />
      </picture>
      <picture>
        <source srcSet={desktopContentImages["IA4"]} media="(min-width:1025px)" />
        <motion.img
          className="defaultCover_2"
          src={mobileContentImages["IA4"]}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.3 }}
        />
      </picture>
    </div>
  </>
);

const tabs = [
  {
    id: "Analysis_",
    title: "流程/功能/架構",
    content: " 考量將會資訊量龐大，而設計成功能精簡，層級不多，並多面分析",
    component: <Analysis />,
  },
  {
    id: "projectHome",
    title: "專案首頁",
    content: "觀全局整體走勢，快速找到該關注專案，進行下一步查看分析",
    image:
      "https://res.cloudinary.com/dnjebsotq/video/upload/q_auto,f_mp4/v1787129759/product_projectHome_an89dp.mp4",
    card:
      [
        { label: "problem", text: ["如何一進來快速掌握資訊？"] },
        { label: "choice", text: ["列表式", "總覽式"], checked: 2 },
        { label: "reason", text: ["先拿到全局總結分析與分類"] },
      ]

  },
  {
    id: "team",
    title: "團隊成員",
    content: "以團隊組成脈絡視角，快速看到人力分配，著手進度與負載問題",
    image:
      "https://res.cloudinary.com/dnjebsotq/video/upload/q_auto,f_mp4/v1787129757/product_team_n8d6h0.mp4",
    card:
      [
        { label: "problem", text: ["龐大的分工資訊要顯示?"] },
        { label: "choice", text: ["全部任務", "進行任務"], checked: 2 },
        { label: "reason", text: ["點出常看資訊剩餘完整呈現"] },
      ]
  },
  {
    id: "schedule",
    title: "時程總覽",
    content: "以時序緩急為視角，將整體專案和任務時間軸化，進一步掌握未來的時間風險",
    image:
      "https://res.cloudinary.com/dnjebsotq/video/upload/q_auto,f_mp4/v1787129757/product_schedule_cntmf9.mp4",
    card:
      [
        { label: "problem", text: ["時間概念化的呈現方式?"] },
        { label: "choice", text: ["時間軸", "排序清單"], checked: 1 },
        { label: "reason", text: ["雖佔空間，但能直覺看出錯綜"] },
      ]
  },
  {
    id: "AIagent",
    title: "AI智能助理",
    content: "在龐大複雜資訊下，運用AI來24小時把關，提供通知、諮詢與建議",
    image:
      "https://res.cloudinary.com/dnjebsotq/video/upload/q_auto,f_mp4/v1787129756/product_Aiagent_odykpv.mp4",
    card:
      [
        { label: "problem", text: ["要花在什麼成本上?"] },
        { label: "choice", text: ["AI開發", "力氣時間"], checked: 1 },
        { label: "reason", text: ["交給擅長運算的電腦一勞永逸"] },
      ]
  },
  {
    id: "quickLink",
    title: "關鍵字連結",
    content: "看到特定專案、任務、成員等，可快速傳送瀏覽該詳細資訊",
    image:
      "https://res.cloudinary.com/dnjebsotq/video/upload/q_auto,f_mp4/v1787129758/product_quickLink_zsyyhx.mp4",
    card:
      [
        { label: "problem", text: ["如何避免跨頁查找?"] },
        { label: "choice", text: ["全站搜尋", "跳轉連結"], checked: 2 },
        { label: "reason", text: ["資訊是順著路徑脈絡前進"] },
      ]
  },
];

const images = ["leaf1", "leaf1_"];
const mobileImages = {};
const desktopImages = {};

images.forEach((name) => {
  mobileImages[name] = require(`../images/mobile/works/${name}.png`);
  desktopImages[name] = require(`../images/desktop/works/${name}.png`);
});

const Works_14 = forwardRef(({ id }, ref) => {
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

  const videoRef = useRef(null);
  const posterRef = useRef(null);
  const loadingRef = useRef(null);
  const loadingFillRef = useRef(null);

  return (
    <div id={id} ref={ref}>
      <div className="worksContainer">
        <div className="container">
          <div className="tabContainer_">
            <Reveal direction="left" delay={0}>
              <div className="title">
                {!activeTab || activeTab.id === "Analysis_" || isDesktop ?
                  <>
                    <span>產品與特色</span>
                    <p>Product Feature</p>
                  </> :
                  null}
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

          <div className="contentContainer" style={(isDesktop && activeTab && activeTab.image) ? { paddingRight: "8rem" } : null}>
            <Reveal direction="left" delay={0.4}>
              <div>
                {activeTab ? activeTab.image ? (
                  <div className="frame">

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
                    ))
                    }
                    < div className="infoCardContainer">
                      {activeTab?.card?.map((item, index) => (
                        <Reveal key={item.label} direction="left" delay={index * 0.2}>
                          <div className="card">
                            <div className="title">{item.label === "problem" ? "問題" : item.label === "choice" ? "抉擇" : "原因"}</div>
                            <div className="contents">{item.text.map((t, index) =>
                              <div key={index} style={{ opacity: (item.label === "choice" && item.checked !== index + 1) ? 0.5 : 1 }} className="content">
                                {t}{item.checked === index + 1 ? <Check style={{ position: "absolute" }} /> : ""}
                              </div>
                            )}</div>
                          </div>
                        </Reveal>
                      )
                      )}
                    </div >

                    <div className="frameMask_">
                      {/* 🔥 螢幕亮起動畫層 */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeTab.id + "_fade"}
                          className="screenTransition"
                          initial={{ opacity: 1, scale: 1.05 }}
                          animate={{
                            opacity: 0,
                            scale: 1,
                            transition: {
                              opacity: { duration: 0.8, ease: "easeInOut" },
                              scale: { duration: 0.8, ease: "easeOut" },
                            },
                          }}
                          exit={{ opacity: 1 }}
                        />
                      </AnimatePresence>

                      {/* 🎬 影片層 */}
                      <AnimatePresence mode="wait">
                        <motion.video
                          ref={videoRef}
                          key={activeTab.id}
                          src={activeTab.image}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="video"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          onCanPlay={() => {
                            // 影片可以播放後淡出 poster/loading
                            if (loadingRef.current && posterRef.current) {
                              loadingRef.current.style.opacity = "0";
                              posterRef.current.style.opacity = "0";
                              setTimeout(() => {
                                if (loadingRef.current && posterRef.current) {
                                  loadingRef.current.style.display = "none";
                                  posterRef.current.style.display = "none";
                                }
                              }, 500);
                            }
                          }}
                          onLoadStart={() => {
                            if (loadingRef.current && posterRef.current) {
                              loadingRef.current.style.opacity = "1";
                              posterRef.current.style.opacity = "1";
                            }
                          }}
                          onProgress={() => {
                            if (
                              videoRef.current &&
                              videoRef.current.buffered.length > 0 &&
                              loadingFillRef.current
                            ) {
                              const bufferedEnd = videoRef.current.buffered.end(
                                videoRef.current.buffered.length - 1
                              );
                              const duration = videoRef.current.duration;
                              if (duration > 0) {
                                const percent = (bufferedEnd / duration) * 100;
                                loadingFillRef.current.style.width =
                                  percent + "%";
                              }
                            }
                          }}
                        />
                      </AnimatePresence>

                      {/* loading備圖 */}
                      <div className="preloadingContainer">
                        <img
                          ref={posterRef}
                          className="poster"
                          src={`/asset/product_${activeTab.id}.png`}
                        />
                        <div ref={loadingRef} className="loading">
                          <Logo />
                          <div className="loadingBar">
                            <div
                              ref={loadingFillRef}
                              className="loadingFill"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 手機外框 */}
                    <img
                      className="frame_overlay"
                      src="/asset/frame.png"
                      alt="frame overlay"
                    />
                  </div>
                ) : (
                  activeTab.component
                ) : (
                  /* 💤 沒選取時顯示封面照 */
                  <motion.img
                    key="defaultCover"
                    style={{ maxWidth: "393px" }}
                    src="/asset/product_cover_4.png"
                    className="defaultCover_2"
                    alt="defaultCover"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.3 }}
                  />
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
      </div >
    </div >
  );
});

export default Works_14;
