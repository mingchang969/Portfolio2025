import React, { useRef, useEffect, useState, forwardRef } from "react";
import MenuIcon from "./components/MenuIcon";
import classNames from "classnames";

function Header({ sectionRefs }) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    //設定觀察條件
    const options = {
      root: null, // 用「視窗」來當觀察範圍
      threshold: 0.5, // 元素至少 50% 出現在視窗中才算「進入」
    };
    // 建立觀察器
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // 如果某個被觀察的元素「進入」了觀察範圍（50% 可見）
        if (entry.isIntersecting) {
          //console.log("現在出現的是區塊：", entry.target.id);
          setActiveSection(entry.target.id);
        }
      });
    }, options);
    // 導入該物件的每個值，觀察該值的ref元素（Home 區塊、About 區塊...）
    // 一定要 observe 該 ref.current(在html裡面插ref的該元素) 才能進到 entries
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
    // 清理函式：元件卸載時停止觀察
    return () => observer.disconnect();
  }, [sectionRefs]);

  const [activeSection_, setActiveSection_] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const logo = document.querySelector(".logo");
      if (!logo) return;

      // 取得 logo 的中心 Y 座標（相對於視窗）
      const logoRect = logo.getBoundingClientRect();
      const logoCenterY = logoRect.top + logoRect.height / 2;

      let currentSection = "";
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          // 取得 ref型態的每張頁面 的座標（相對於視窗）
          if (logoCenterY >= rect.top && logoCenterY <= rect.bottom) {
            // 當 logoCenterY 在頁面的 最上座標 和 最下座標 之間
            currentSection = ref.current.id;
            // 就會傳值 現在是在某某頁
          }
        }
      });

      if (currentSection) {
        setActiveSection_(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // 每當滾動才會觸發跑函式
    handleScroll(); // 初始化先跑一次
    return () =>
      window.removeEventListener("scroll", handleScroll, { passive: true });
  }, [sectionRefs]);

  function movePage(page) {
    const target = document.getElementById(page);
    target?.scrollIntoView({ behavior: "smooth" });
    if (window.innerWidth < 768) setIsOpen(false);
  }

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => {
      const next = !prev;
      console.log(next);
      return next;
    });
  };

  useEffect(() => {
    if (window.innerWidth >= 768) return;
    const handleClickedOutside = (event) => {
      //當執行 addEventListener時
      //都會自動傳入 event值進去函式，handleClickedOutside裡面
      const menu = document.getElementById("menu-list");
      const button = document.querySelector(".MenuButton_Icon");

      if (
        menu &&
        button &&
        !menu.contains(event.target) &&
        !button.contains(event.target)
        //透過contains去比對 現在點擊的 元素 和 該物件 是否包含
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickedOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickedOutside);
    };
  }, [isOpen]);
  return (
    <div id="header">
      <div
        className={classNames("logo", {
          mainLogo: ["home", "skill", "works"].includes(
            activeSection_
          ),
          subLogo: ["about", "experience", "contact"].includes(activeSection_),
        })}
      >
        Portfolio <br />
        <span>Benjamin.</span>
      </div>
      <div className="menu_mobile">
        <button
          type="button"
          className={classNames("MenuButton_Icon", {
            mainIcon: ["home", "skill", "works"].includes(
              activeSection_
            ),
            subIcon: ["about", "experience", "contact"].includes(
              activeSection_
            ),
          })}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="menu-list"
        >
          <MenuIcon isOpen={isOpen} />
        </button>
      </div>
      <div
        id="menu-list"
        className={classNames("menu", {
          open: isOpen || window.innerWidth >= 768,
        })}
      >
        <div className="menuContainer">
          {["home", "about", "skill", "experience", "works", "contact"].map(
            (page) => (
              <button
                key={page}
                className={classNames("MenuButton", {
                  active: activeSection === page,
                  mainMenu: ["home", "skill", "works"].includes(
                    activeSection_
                  ),
                  subMenu: ["about", "experience", "contact"].includes(
                    activeSection_
                  ),
                })}
                onClick={() => movePage(page)}
              >
                {page === "home" && "首頁"}
                {page === "about" && "介紹"}
                {page === "skill" && "技能"}
                {page === "experience" && "經歷"}
                {page === "works" && "作品"}
                {page === "contact" && "聯絡"}
              </button>
            )
          )}
          {/* 
          <button
            className={classNames("MenuButton", {
              active: activeSection === "home",
            })}
            onClick={() => movePage("home")}
          >
            首頁
          </button>
          <button
            className={classNames("MenuButton", {
              active: activeSection === "about",
            })}
            onClick={() => movePage("about")}
          >
            介紹
          </button>
          <button
            className={classNames("MenuButton", {
              active: activeSection === "skill",
            })}
            onClick={() => movePage("skill")}
          >
            技能
          </button>
          <button
            className={classNames("MenuButton", {
              active: activeSection === "experience",
            })}
            onClick={() => movePage("experience")}
          >
            經歷
          </button>

          <button
            className={classNames("MenuButton", {
              active: activeSection === "works",
            })}
            onClick={() => movePage("works")}
          >
            作品
          </button>
          <button
            className={classNames("MenuButton", {
              active: activeSection === "contact",
            })}
            onClick={() => movePage("contact")}
          >
            聯絡
          </button> */}
        </div>
      </div>
    </div>
  );
}
export default Header;
