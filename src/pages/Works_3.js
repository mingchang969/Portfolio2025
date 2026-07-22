import React, { forwardRef, useState, useEffect, useRef } from "react";
import MorphCardTabs from "../components/MorphCardTabs_picture";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";
import UserJourneyMap from "../components/UserJourneyMap";

const stages = ["認知", "考慮", "決定", "使用"];

const tabs = [
  {
    id: "dessert",
    title: "甜滿第二個胃",
    content_1: "Simona 高中女 １８",
    content_2: "跟姐妹分享話題甜點",
    image: "/asset/userMap_dessert.png",
    rows: [
      {
        label: "行為",
        data: [
          "想要私下分享甜點小店",
          "<span>IG</span> & <span>Line</span>",
          "朋友推薦<span>Pinlogue</span>",
          "私密社團可盡情地貼文和地圖標點",
        ],
      },
      {
        label: "情緒",
        type: "emotion", // 👈 特殊類型：顯示曲線
        data: [70, 40, 60, 90], // 數字代表情緒高低 (0-100)
      },
      {
        label: "痛點",
        data: [
          "",
          "地圖化和統整力不足",
          "缺乏專屬連接碼吸引",
          "價位菜單等資訊不足",
        ],
      },
      {
        label: "改善",
        data: [
          "",
          "群組化的貼文頁和地圖",
          "專屬連結下載<span>App</span>送優惠",
          "<span>googleＭap</span> 開啟該點",
        ],
      },
    ],
  },
  {
    id: "nightMarket",
    title: "夜市人氣王",
    content_1: "Jonas 外國人 ２７",
    content_2: "剛來台灣想找夜市美食",
    image: "/asset/userMap_nightMarket.png",
    rows: [
      {
        label: "行為",
        data: [
          "臨時興起但對此地陌生",
          "<span>google Map</span> & <span>ChatGPT</span>",
          "AI推薦<span>Pinlogue</span>",
          "以熱門排行地圖找到最熱門的美食",
        ],
      },
      {
        label: "情緒",
        type: "emotion", // 👈 特殊類型：顯示曲線
        data: [30, 50, 40, 90], // 數字代表情緒高低 (0-100)
      },
      {
        label: "痛點",
        data: [
          "",
          "太多選擇,缺乏圖像概念",
          "載<span>Ａpp</span>要較大流量",
          "找到想要美食，但不知道路",
        ],
      },
      {
        label: "改善",
        data: [
          "",
          "歸納選擇<br>圖像整合",
          "網頁版",
          "跳<span>googleＭap</span>開啟導航",
        ],
      },
    ],
  },
  {
    id: "nightAnimal",
    title: "夜習性動物",
    content_1: "Gordon 小資男 ３０",
    content_2: "每當星期五夜來個狂歡",
    image: "/asset/userMap_nightAnimal.png",
    rows: [
      {
        label: "行為",
        data: [
          "想來點特別的，但很沒點子",
          "<span>google</span> & <span>ChatGPT</span>",
          "<span>App</span>商店無意看到<span> Pinlogue</span>",
          "參觀公開社團從標籤找點子",
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
          "概念還不夠，想看真實心得",
          "下載是一個關卡",
          "想將所有據點導入 <span>googleMap</span>",
        ],
      },
      {
        label: "改善",
        data: [
          "",
          "標籤化和地圖化，討論串",
          "以網頁版先推知名度",
          "新增導入據點按鈕",
        ],
      },
    ],
  },
  {
    id: "chillCamping",
    title: "來Chill野營",
    content_1: "Martha 女強人 ４２",
    content_2: "想脫離悶感去山林透氣",
    image: "/asset/userMap_chillCamping.png",
    rows: [
      {
        label: "行為",
        data: [
          "想多走走認識新朋友和新事物",
          "FB社團 & 交友軟體",
          "同事聽說<span>Pinlogue</span>",
          "看見許多同好和戶外新景點",
        ],
      },
      {
        label: "情緒",
        type: "emotion", // 👈 特殊類型：顯示曲線
        data: [60, 40, 40, 70], // 數字代表情緒高低 (0-100)
      },
      {
        label: "痛點",
        data: [
          "",
          "目的性多樣，不夠統整具體化",
          "嘗試動機不足",
          "缺使用者資訊和活動化",
        ],
      },
      {
        label: "改善",
        data: [
          "",
          "標籤化和地圖化和透明化",
          "免註冊等過程簡單",
          "自介卡和發起活動功能",
        ],
      },
    ],
  },
  {
    id: "mountainClimbing",
    title: "登山百岳",
    content_1: "Eden 退休大叔 ５５",
    content_2: "找個三五好友挑戰自我",
    image: "/asset/userMap_mountainClimbing.png",
    rows: [
      {
        label: "行為",
        data: [
          "想記錄自己和成就標點化",
          "<span>Google</span> & <span>MyMap</span>",
          "網路廣告 <span>Pinlogue</span>",
          "建立社團，紀錄攻點成就",
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
          "沒辦法用照片紀錄回憶",
          "新穎點，較不確定性",
          "不想操作太繁瑣",
        ],
      },
      {
        label: "改善",
        data: [
          "",
          "新增發文和上傳圖文空間",
          "以網頁版先推概念度",
          "簡易小工具",
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

const Works_3 = forwardRef(({ id }, ref) => {
  const [active, setActive] = useState("dessert");
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
                      srcSet="/asset/userMap_cover_D.png"
                      media="(min-width:1025px)"
                    />
                    <motion.img
                      className="defaultCover_1"
                      src="/asset/userMap_cover_M.png"
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

export default Works_3;
