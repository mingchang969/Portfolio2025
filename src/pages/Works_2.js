import React, { forwardRef, useState, useEffect, useRef } from "react";
import MorphCardTabs from "../components/MorphCardTabs";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";

const tabs = [
  {
    id: "lobby",
    title: "大廳",
    content:
      "提供一個平台，網羅地標的社團，根據分類和關鍵字快速找到自己想找的地標",
    image: "product_lobby.mov",
  },
  {
    id: "createClub",
    title: "創建社團",
    content:
      "可選主題模式來根據這季主題來競賽，或可選一般模式不限主題地自由創作",
    image: "product_createClub.mov",
  },
  {
    id: "exploreMap",
    title: "探索地圖",
    content: "顯示不同分類的地標點，可點擊該類標籤呈現於地圖和列表",
    image: "product_exploreMap.mov",
  },
  {
    id: "label",
    title: "標籤",
    content: "以不同顏色和圖示來客製不同標題的標籤，讓視覺紹上一目瞭然",
    image: "product_label.mov",
  },
  {
    id: "addPin",
    title: "新增標點",
    content:
      "透過關鍵字搜尋或是地圖釘選來快速新增地標，而地標資訊也之後可再編輯",
    image: "product_addPin.mov",
  },
  {
    id: "infoCard",
    title: "資訊卡",
    content: "以圖鑑資訊卡的樣式，網羅大家踩該點分享的照片和心得",
    image: "product_infoCard.mov",
  },
  {
    id: "post",
    title: "貼文串",
    content: "即時瀏覽最近有什麼新貼文或新地標，快速看見大家的活動和分享",
    image: "product_post.mov",
  },
  {
    id: "ranking",
    title: "排行榜",
    content: "透過排行模式參閱最新或最熱門的地點是什麼",
    image: "product_ranking.mov",
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
                          key={activeTab.id}
                          src={`/asset/${activeTab.image}`}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="video"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        />
                      </AnimatePresence>
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
                <div className="mobileTabContent" >
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
