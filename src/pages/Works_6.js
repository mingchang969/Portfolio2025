import React, { forwardRef, useState, useEffect, useRef } from "react";
import MorphCardTabs from "../components/MorphCardTabs";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";
import { ReactComponent as Logo } from "../images/product_logo.svg";
//
const tabs = [
  {
    id: "guide",
    title: "導覽",
    content: "化身小導遊，隨時追蹤目前行程，並提供路線指引和行程導覽",
    image:
      "https://res.cloudinary.com/dnjebsotq/video/upload/q_auto,f_mp4/product_guide_lq5wwe.mp4",
  },
  {
    id: "find",
    title: "探索",
    content: "根據該行程的景點包，顯示食衣住行育樂等地標，可加入最愛",
    image:
      "https://res.cloudinary.com/dnjebsotq/video/upload/q_auto,f_mp4/product_find_alzgz9.mp4",
  },
  {
    id: "team",
    title: "團隊",
    content: "顯示每個旅友目前位置，可以查看彼此資訊、使用通話和聊天室",
    image:
      "https://res.cloudinary.com/dnjebsotq/video/upload/q_auto,f_mp4/product_team_qcyamu.mp4",
  },
  {
    id: "note",
    title: "提醒",
    content: "可根據不同條件觸發提醒功能，作為出發前或旅途中的隨身筆記",
    image:
      "https://res.cloudinary.com/dnjebsotq/video/upload/q_auto,f_mp4/product_note_oeebvm.mp4",
  },
  {
    id: "timeline",
    title: "時間軸",
    content: "透過拖曳時間軸顯示行進時序，以簡易操作來時間視覺化",
    image:
      "https://res.cloudinary.com/dnjebsotq/video/upload/q_auto,f_mp4/product_timeline_fakdp5.mp4",
  },
];

const images = ["leaf1", "leaf1_"];
const mobileImages = {};
const desktopImages = {};

images.forEach((name) => {
  mobileImages[name] = require(`../images/mobile/works/${name}.png`);
  desktopImages[name] = require(`../images/desktop/works/${name}.png`);
});

const Works_6 = forwardRef(({ id }, ref) => {
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
                {activeTab ? (
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
                          style={{
                            marginLeft: "2px",
                            marginTop: "-4.6px",
                            scale: "1.017",
                          }}
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
                  /* 💤 沒選取時顯示封面照 */
                  <motion.img
                    key="defaultCover"
                    src="/asset/product_cover_2.png"
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

export default Works_6;
