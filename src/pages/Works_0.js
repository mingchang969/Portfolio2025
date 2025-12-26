import React, { forwardRef, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";

const Works_0 = forwardRef(({ id }, ref) => {
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
                className="defaultCover"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.3 }}
              />
            </Reveal>
            <Reveal direction="left" delay={0.2}>
              <div className="title">
                <span>地標日誌</span> <br /><b>Pinlogue</b>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Works_0;
