import React, { forwardRef, useState, useEffect, useRef } from "react";
import MorphCardTabs from "../components/MorphCardTabs";
import { motion, AnimatePresence, scale } from "framer-motion";
import Reveal from "../components/Reveal";
import { ReactComponent as Logo } from "../images/product_logo.svg";
import { ReactComponent as Check } from "../images/Check.svg";

const contentImages = ["cover", "flow3", "IA3"];
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
        <source srcSet={desktopContentImages["flow3"]} media="(min-width:1025px)" />
        <motion.img
          className="defaultCover_2"
          src={mobileContentImages["flow3"]}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.3 }}
        />
      </picture>
      <picture>
        <source srcSet={desktopContentImages["IA3"]} media="(min-width:1025px)" />
        <motion.img
          className="defaultCover_2"
          src={mobileContentImages["IA3"]}
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
    id: "Analysis_after",
    title: "流程/功能/架構",
    content: " 延續使用者流程，並取捨功能需求，讓其精簡又一體性。 ",
    component: <Analysis />,
  },
  {
    id: "lobby_after",
    title: "大廳",
    content: "為元件方便跨裝置，簡化分類系統面版，並調整為系統演算的分類",
    image:
      "https://res.cloudinary.com/dnjebsotq/video/upload/q_auto,f_mp4/v1784621577/product_lobby2_tm43jw.mp4",

    card:
      [
        { label: "problem", text: ["想給使用者的資訊呈現是"] },
        { label: "choice", text: ["多樣功能", "精簡自動"], checked: 2 },
        { label: "reason", text: ["適用剛起步的網站和使用者"] },
      ]

  },
  {
    id: "marker_after",
    title: "探索地標",
    content: "避免太多的分類，將功能列的貼文串和排行榜拿掉，自然融入內頁裡面",
    image:
      "https://res.cloudinary.com/dnjebsotq/video/upload/q_auto,f_mp4/v1784621576/product_marker2_mrhmga.mp4",
      
    card:
      [
        { label: "problem", text: ["進來地圖第一眼的焦點是"] },
        { label: "choice", text: ["地圖本質", "社群圖文"], checked: 1 },
        { label: "reason", text: ["專注展現作者的創作與傳達"] },
      ]
  },
  {
    id: "trip_after",
    title: "探索行程",
    content: "讓零散標點有故事感，將地標用線串起，淺顯易懂出遊走脈絡",
    image:
      "https://res.cloudinary.com/dnjebsotq/video/upload/q_auto,f_mp4/v1784621577/product_trip2_u0vbyr.mp4",
      
    card:
      [
        { label: "problem", text: ["如何避免流於只是地圖工具"] },
        { label: "choice", text: ["行程脈絡", "專注地標"], checked: 1 },
        { label: "reason", text: ["在競品間做出優勢與故事感"] },
      ]
  },
  {
    id: "edit_after",
    title: "編輯地標",
    content: "新增裁切功能，封面圖也可以從圖庫來選擇，也可個別刪除",
    image:
      "https://res.cloudinary.com/dnjebsotq/video/upload/q_auto,f_mp4/v1784621575/product_edit2_qpa490.mp4",
      
    card:
      [
        { label: "problem", text: ["以技術面最適合剛起步的是"] },
        { label: "choice", text: ["純圖庫", "貼文留言"], checked: 1 },
        { label: "reason", text: ["簡易和可控，讓流量不會過載"] },
      ]
  },
  {
    id: "addPin_after",
    title: "新增地標",
    content: "為增添與別網站的黏著度，新增可以別站地圖連結快速匯入，",
    image:
      "https://res.cloudinary.com/dnjebsotq/video/upload/q_auto,f_mp4/v1784621574/product_addMarker2_s83whc.mp4",
      
    card:
      [
        { label: "problem", text: ["如何方便快速匯入地標"] },
        { label: "choice", text: ["自建系統", "外站導入"], checked: 2 },
        { label: "reason", text: ["減少成本並增加與外站相依性"] },
      ]
  },
  {
    id: "addTrip_after",
    title: "新增行程",
    content: "為讓紀錄和分享更加直覺，以簡單點選即可連線成行",
    image:
      "https://res.cloudinary.com/dnjebsotq/video/upload/q_auto,f_mp4/v1784621575/product_addTrip2_x20t2p.mp4",
      
    card:
      [
        { label: "problem", text: ["如何即時分享當下軌跡"] },
        { label: "choice", text: ["快點式", "列表式"], checked: 1 },
        { label: "reason", text: ["透過地圖的點串起，直覺快速"] },
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

const Works_2_2 = forwardRef(({ id }, ref) => {
  const [active, setActive] = useState("Analysis_after");
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
          <div className="tabContainer">
            <Reveal direction="left" delay={0}>
              <div className="title">
                {!activeTab || activeTab.id === "Analysis_after" || isDesktop ?
                  <>
                    <span>改版後</span>
                    <p>After Feature</p>
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
                    clickOut={false}
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
                          className="poster_"
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
                    style={{scale:isDesktop?"0.8":"1.1"}}
                    src="/asset/product_cover_3.png"
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
                    clickOut={false}
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

export default Works_2_2;
