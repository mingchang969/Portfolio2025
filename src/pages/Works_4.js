import React, { forwardRef, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";

const Works_4 = forwardRef(({ id }, ref) => {
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
          <div className="titleContainer">
            <Reveal direction="left">
              <motion.div
                className="defaultCover_2"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.3 }}
              />
            </Reveal>
            <Reveal direction="left" delay={0.2}>
              <div className="title">
                II.　<span>旅行嚮導</span> <br /><b>GoTogether</b>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Works_4;
