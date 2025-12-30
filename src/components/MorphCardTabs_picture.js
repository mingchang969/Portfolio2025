import React, { useEffect } from "react";
import { motion, AnimatePresence, delay } from "framer-motion";
import "./MorphCardTabs.css";
import { ReactComponent as Arrow } from "../images/arrow.svg";
import { ReactComponent as Ro } from "../images/icon_ro.svg";
import { ReactComponent as Fo } from "../images/icon_fo.svg";
import { ReactComponent as Re } from "../images/icon_re.svg";
import { ReactComponent as Ad } from "../images/icon_ad.svg";
import { ReactComponent as Kn } from "../images/icon_kn.svg";
import { ReactComponent as S } from "../images/icon_single.svg";
import { ReactComponent as C } from "../images/icon_couple.svg";
import { ReactComponent as G } from "../images/icon_group.svg";

export default function MorphCardTabs({ data, active, setActive, style }) {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".morph-card")) setActive(null);
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [setActive]);

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <div
      className="morph-container"
      style={{
        padding: isMobile ? "0 1rem" : "0",
        justifyContent: active && isMobile ? "center" : "flex-start",
        transition: "justify-content 0.35s ease",
        ...style,
      }}
    >
      <AnimatePresence mode="popLayout">
        {data.map((tab) => {
          const isActive = active === tab.id;
          const isHidden = isMobile && active && !isActive;
          let icon;
          if (isActive) {
            switch (active) {
              case "dessert":
                icon = <Ro style={{ fill: "#fc868cff", stroke: "none" }} />;
                break;
              case "nightMarket":
                icon = <Fo style={{ fill: "#ffc75eff", stroke: "none" }} />;
                break;
              case "nightAnimal":
                icon = <Re style={{ fill: "#5DC2F4", stroke: "none" }} />;
                break;
              case "chillCamping":
                icon = <Kn style={{ fill: "#ee8866ff", stroke: "none" }} />;
                break;
              case "mountainClimbing":
                icon = <Ad style={{ fill: "#f0ff9bff", stroke: "none" }} />;
                break;
              case "single":
                icon = <S style={{ fill: "#f0ff9bff", stroke: "none" }} />;
                break;
              case "couple":
                icon = <C style={{ fill: "#fc868cff", stroke: "none" }} />;
                break;
              case "group":
                icon = <G style={{ fill: "#5DC2F4", stroke: "none" }} />;
                break;
            }
          }
          return (
            <motion.div
              key={tab.id}
              layoutId={`card-${tab.id}`}
              layout
              style={{ display: "flex", width: isActive && "100%" }}
              className={`morph-card ${
                isActive ? (!isMobile ? "expanded" : "expanded_M") : ""
              }`}
              initial={false}
              animate={{
                opacity: isHidden ? 0 : 1,
                scale: isHidden ? 0.7 : 1,
                position: isHidden ? "absolute" : "relative",
                pointerEvents: isHidden ? "none" : "auto",
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                position: "absolute",
                pointerEvents: "none",
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={(e) => {
                e.stopPropagation();
                setActive(isActive ? null : tab.id);
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: isActive ? "70%" : "100%",
                }}
              >
                <motion.h3 layout="position">
                  {isActive ? (
                    <>
                      <Arrow style={{ rotate: "180deg" }} /> {tab.title}
                      {icon}
                    </>
                  ) : (
                    <>{tab.title}</>
                  )}
                </motion.h3>

                <AnimatePresence>
                  <motion.div
                    className="morph-content-wrapper"
                    initial={false}
                    animate={{
                      opacity: active === tab.id ? 1 : 0,
                      width: active === tab.id ? "auto" : 0,
                      height: active === tab.id ? "auto" : 0,
                      marginTop: active === tab.id ? "0.5rem" : 0,
                    }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <div className="morph-content">
                      <p>{tab.content_1}</p>
                    </div>
                    <div className="morph-content">
                      <p>{tab.content_2}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              <motion.div
                className="morph-content-wrapper"
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  width: isActive ? "30%" : 0,
                  height: isActive ? "auto" : 0,
                  display: isActive ? "flex" : "none",
                }}
                transition={{ duration: 0.7 }}
                style={{
                  justifyContent: "flex-end",
                  alignItems: "center",
                  paddingRight: "1rem",
                }}
              >
                <img
                  style={{ borderRadius: "12px", border: "solid 2px #D9D9D9" }}
                  src={tab.image}
                  alt=""
                />
              </motion.div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
