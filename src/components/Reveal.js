import React, { isValidElement, cloneElement } from "react";
import useReveal from "./useReveal";
import "./reveal.css";

/**
 * Reveal 元件
 * @param children - 可以是 HTML 元素或 forwardRef 的 React component
 * @param direction - 動畫方向 (top, bottom, left, right)
 * @param delay - 動畫延遲 (秒)
 */
function Reveal({ children, direction = "bottom", delay = 0 }) {
  const [ref, isVisible] = useReveal();

  if (!isValidElement(children)) return null; // 確保有有效元素

  // 使用 cloneElement 注入 props
  return cloneElement(children, {
    ref,
    className: `${children.props.className || ""} reveal ${direction} ${
      isVisible ? "active" : ""
    }`,
    style: {
      ...(children.props.style || {}),
      transitionDelay: `${delay}s`,
    },
  });
  // 以上版本 不會新增任何元素在外層，只clone出裡面的內容
  // 以下版本 會新增div在外層，會導致 flex,grid的東西 跑版
  //   return ( 
  //     <div
  //       ref={ref}
  //       className={`reveal ${direction} ${isVisible ? "active" : ""}`}
  //       style={{ transitionDelay: `${delay}s` }}
  //     >
  //       {children}
  //     </div>
  //   );
}

export default Reveal;
