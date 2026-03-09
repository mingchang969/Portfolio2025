import React, { forwardRef, useState, useEffect, useRef } from "react";
import MorphCardTabs from "../components/MorphCardTabs";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";

const images = ["cover", "dashboard", "information", "processing"];
const mobileImages = {};
const desktopImages = {};

images.forEach((name) => {
  mobileImages[name] = `/asset/product_${name}_M.png`;
  desktopImages[name] = `/asset/product_${name}_D.png`;
});

const Dashboard = () => (
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
);

const Information = () => (
  <picture>
    <source srcSet={desktopImages["information"]} media="(min-width:768px)" />
    <motion.img
      className="defaultCover_2"
      src={mobileImages["information"]}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.3 }}
    />
  </picture>
);

const Processing = () => (
  <picture>
    <source srcSet={desktopImages["processing"]} media="(min-width:768px)" />
    <motion.img
      className="defaultCover_2"
      src={mobileImages["processing"]}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.3 }}
    />
  </picture>
);

const tabs = [
  {
    id: "dashboard",
    title: "異動總覽",
    content: "即時彙整所有延誤與取消航班，在最短時間掌握整體狀況與處理優先順序",
    component: <Dashboard />,
  },
  {
    id: "information",
    title: "詳細資訊",
    content: "聚焦單一航班資訊，協助客服在處理旅客前先建立完整情境理解",
    component: <Information />,
  },
  {
    id: "processing",
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

export default Works_1;
