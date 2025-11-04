import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./MorphCardTabs.css";
import { ReactComponent as Arrow } from "../images/arrow.svg";

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
          return (
            <motion.div
              key={tab.id}
              layoutId={`card-${tab.id}`}
              layout
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
              <motion.h3 layout="position">
                {isActive ? (
                  <>
                    <Arrow style={{ rotate: "180deg" }} /> {tab.title}
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
                    <p>{tab.content}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
