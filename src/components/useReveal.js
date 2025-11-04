import { useEffect, useRef, useState } from "react";

function useReveal(options = { threshold: 0.5 }) {
  const ref = useRef(null);
  //ref 之後會綁到我們要偵測的 DOM 元素（例如 <div>）
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);// 只觸發一次
        }
      });
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);//只要 options 改變，就會重新執行這個 useEffect

  return [ref, isVisible];
  //回傳一個陣列 [ref, isVisible]。
  //用法就像 React 官方 Hook
}

export default useReveal;
