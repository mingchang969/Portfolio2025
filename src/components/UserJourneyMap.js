import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, delay } from "framer-motion";
import "./UserJourneyMap.css";

export default function UserJourneyMap({ stages, rows, id, style }) {
  return (
    <div className="journey-map" style={style}>
      {/* 表頭 */}
      <div className="header empty"></div>
      {stages.map((stage) => (
        <div key={stage} className="header">
          {stage}
        </div>
      ))}

      {/* 各行 */}
      {rows.map((row) => (
        <React.Fragment key={row.label}>
          <div className="row-label">{row.label}</div>
          {row.type === "emotion" ? (
            // 🎢 情緒曲線行
            <AnimatePresence mode="wait">
              <motion.div
                key={JSON.stringify(row.data)}
                className="emotion-line"
                initial={{ opacity: 0, y: 7 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 7 }}
                transition={{ duration: 0.2 }}
                style={{ gridColumn: "span 4" }}
              >
                <EmotionLine values={row.data} colorId={id} />
              </motion.div>
            </AnimatePresence>
          ) : (
            // 其他一般行
            row.data.map((cell, i) => (
              <div key={i} className="cell">
                <FadingCell content={cell} sequence={i} />
              </div>
            ))
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

/* 子元件：帶淡入淡出效果的文字 */
function FadingCell({ content, sequence }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={content} // key 變化時觸發動畫
        initial={{ opacity: 0, y: 7 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 7 }}
        transition={{ duration: 0.2, delay: 0.1 * sequence }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </AnimatePresence>
  );
}

/* ✅ 子元件：繪製情緒折線圖 */

function EmotionLine({ values = [], padding = 20, colorId }) {
  const containerRef = useRef(null);
  const [coords, setCoords] = useState([]);
  const [pathLength, setPathLength] = useState(0);

  // 設定顏色
  let color = "#fff";
  if (colorId) {
    switch (colorId) {
      case "dessert":
        color = "#fc868cff";
        break;
      case "nightMarket":
        color = "#ffc75eff";
        break;
      case "nightAnimal":
        color = "#5DC2F4";
        break;
      case "chillCamping":
        color = "#ee8866ff";
        break;
      case "mountainClimbing":
        color = "#f0ff9bff";
        break;
      case "single":
        color = "#f0ff9bff";
        break;
      case "couple":
        color = "#fc868cff";
        break;
      case "group":
        color = "#5DC2F4";
        break;
      case "dashboard":
        color = "#fc868cff";
        break;
      case "information":
        color = "#ffc75eff";
        break;
      case "processing":
        color = "#5DC2F4";
        break;
      default:
        color = "#fff";
    }
  }

  // 計算座標與 path 長度
  useEffect(() => {
    if (!containerRef.current || !values.length) return;

    const calculate = () => {
      const { clientWidth: width, clientHeight: height } = containerRef.current;
      const step = (width - padding) / Math.max(values.length - 1, 1);

      const newCoords = values.map((v, i) => ({
        x: i * step + padding / 2,
        y: height - (v / 100) * height,
      }));
      setCoords(newCoords);

      const pathD = newCoords
        .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
        .join(" ");

      const tempPath = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path",
      );
      tempPath.setAttribute("d", pathD);
      setPathLength(tempPath.getTotalLength());
    };

    calculate(); // 初次計算

    window.addEventListener("resize", calculate); // 監聽 resize
    return () => window.removeEventListener("resize", calculate);
  }, [values, padding]);

  if (!coords.length)
    return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;

  // 生成 path D
  const pathD = coords
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <svg style={{ width: "100%", height: "100%" }}>
        {/* 底線 */}
        <path
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          d={pathD}
        />

        {/* 動畫線條 */}
        <motion.path
          d={pathD}
          fill="none"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeDasharray={pathLength}
          strokeDashoffset={pathLength}
          initial={{ strokeDashoffset: pathLength }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />

        {/* 圓點依序出現 */}
        {coords.map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={5}
            fill="#fff"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: (i / (coords.length - 1)) * 0.7, // 跟線條動畫同步
              duration: 0.2,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
