import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./MorphCardTabs.css";

export default function MorphCardTabs({ data, active, setActive }) {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".morph-card_L")) setActive(null);
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [setActive]);

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <div
      className="morph-container_L"
      style={{
        padding: isMobile ? "0 0.7rem" : "0",
        flexDirection: isMobile ? "row" : "column",
        justifyContent: isMobile ? "space-between" : null,
        rowGap: isMobile ? "0px" : "16px",
        columnGap: isMobile ? "0px" : "16px",
      }}
    >
      <AnimatePresence mode="popLayout">
        {data.map((tab) => {
          const isActive = active === tab.id;

          return (
            <motion.div
              key={tab.id}
              layoutId={`card-${tab.id}`}
              layout
              className={`morph-card_L ${isActive ? "expanded" : ""}`}
              initial={false}
              onClick={(e) => {
                e.stopPropagation();
                setActive(isActive ? null : tab.id);
              }}
            >
              <motion.h3>{tab.title}</motion.h3>

              {/* <AnimatePresence>
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
              </AnimatePresence> */}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
