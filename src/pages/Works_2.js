import React, { forwardRef, useState, useEffect, useRef } from "react";
import MorphCardTabs from "../components/MorphCardTabs";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";
import { ReactComponent as Logo } from "../images/product_logo.svg";

const contentImages = ["cover", "flow2","IA2"];
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
        <source srcSet={desktopContentImages["flow2"]} media="(min-width:1025px)" />
        <motion.img
          className="defaultCover_2"
          src={mobileContentImages["flow2"]}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.3 }}
        />
      </picture>
      <picture>
        <source srcSet={desktopContentImages["IA2"]} media="(min-width:1025px)" />
        <motion.img
          className="defaultCover_2"
          src={mobileContentImages["IA2"]}
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
    content: " 先列出使用者流程，再思考拆解功能需求為何，並整合建立資訊架構",
    component: <Analysis />,
  },
  {
    id: "lobby",
    title: "大廳",
    content: "提供一個平台，網羅地標的社團，以分類和關鍵字快速找到喜歡的主題",
    image:
      "https://res.cloudinary.com/dnjebsotq/video/upload/q_auto,f_mp4/product_lobby_uci7si.mp4",
  },
  {
    id: "createClub",
    title: "創建社團",
    content: "選主題模式來根據這季主題來競賽，或選一般模式不限主題自由創作",
    image:
      "https://res.cloudinary.com/dnjebsotq/video/upload/q_auto,f_mp4/product_createClub_phetbp.mp4",
  },
  {
    id: "exploreMap",
    title: "探索地圖",
    content: "顯示不同分類的地標點，可點擊該類標籤呈現於地圖和列表",
    image:
      "https://res.cloudinary.com/dnjebsotq/video/upload/q_auto,f_mp4/product_exploreMap_rgaffz.mp4",
  },
  {
    id: "label",
    title: "標籤",
    content: "以不同顏色和圖示來客製不同標題的標籤，讓視覺紹上一目瞭然",
    image:
      "https://res.cloudinary.com/dnjebsotq/video/upload/q_auto,f_mp4/product_label_mqwskh.mp4",
  },
  {
    id: "addPin",
    title: "新增標點",
    content: "透過關鍵字搜尋或地圖釘選來新增地標，而地標資訊之後也可再編輯",
    image:
      "https://res.cloudinary.com/dnjebsotq/video/upload/q_auto,f_mp4/product_addPin_osz1gs.mp4",
  },
  {
    id: "infoCard",
    title: "資訊卡",
    content: "以圖鑑資訊卡的樣式，網羅大家踩該點分享的照片和心得",
    image:
      "https://res.cloudinary.com/dnjebsotq/video/upload/q_auto,f_mp4/product_infoCard_qqqbc1.mp4",
  },
  {
    id: "post",
    title: "貼文串",
    content: "即時瀏覽最近有什麼新貼文或新地標，快速看見大家的活動和分享",
    image:
      "https://res.cloudinary.com/dnjebsotq/video/upload/q_auto,f_mp4/product_post_c4txj5.mp4",
  },
  {
    id: "ranking",
    title: "排行榜",
    content: "透過排行模式參閱最新或最熱門的地點是什麼",
    image:
      "https://res.cloudinary.com/dnjebsotq/video/upload/q_auto,f_mp4/product_ranking_vadfis.mp4",
  },
];

const images = ["leaf1", "leaf1_"];
const mobileImages = {};
const desktopImages = {};

images.forEach((name) => {
  mobileImages[name] = require(`../images/mobile/works/${name}.png`);
  desktopImages[name] = require(`../images/desktop/works/${name}.png`);
});

const Works_2 = forwardRef(({ id }, ref) => {
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

  const videoRef = useRef(null);
  const posterRef = useRef(null);
  const loadingRef = useRef(null);
  const loadingFillRef = useRef(null);

  return (
    <div id={id} ref={ref}>
      <div className="worksContainer">
        <div className="container">
          <div className="tabContainer">
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
                  />
                </div>
              </Reveal>
            ) : null}
          </div>

          <div className="contentContainer">
            <Reveal direction="left" delay={0.4}>
              <div>
                {activeTab ? activeTab.image?(
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
                    ))}
                    <div className="frameMask">
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
                ) :(
                  activeTab.component
                ) : (
                  /* 💤 沒選取時顯示封面照 */
                  <motion.img
                    key="defaultCover"
                    src="/asset/product_cover.png"
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
      </div>
    </div>
  );
});

export default Works_2;
