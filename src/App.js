import "./App.scss";
import Header from "./Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Experience from "./pages/Experience";
import Works_0 from "./pages/Works_0";
import Works_1 from "./pages/Works_1";
import Works_2 from "./pages/Works_2";
import Works_3 from "./pages/Works_3";
import Works_4 from "./pages/Works_4";
import Works_5 from "./pages/Works_5";
import Works_6 from "./pages/Works_6";
import Works_7 from "./pages/Works_7";
import Contact from "./pages/Contact";

import { useRef } from "react";

function App() {
  const sectionRefs = {
    home: useRef(),
    about: useRef(),
    skill: useRef(),
    experience: useRef(),
    works_0: useRef(),
    works_1: useRef(),
    works_2: useRef(),
    works_3: useRef(),
    works_4: useRef(),
    works_5: useRef(),
    works_6: useRef(),
    works_7: useRef(),
    contact: useRef(),
  };

  return (
    <>
      <Header sectionRefs={sectionRefs} />
      {/* ⬆⬆這上面傳進去的只是 prop 
      這裡只需要 prop的值就好 */}
      {/* ⬇⬇這下面傳進去要實現 真ref 
      因prop沒辦法 傳 useRef的功能下去
      所以該元件裡面 要用forwardRef()去接收prop值和實踐抓該標記元素的ref功能 */}
      <Home id="home" ref={sectionRefs.home} />
      <About id="about" ref={sectionRefs.about} />
      <Skill id="skill" ref={sectionRefs.skill} />
      <Experience id="experience" ref={sectionRefs.experience} />
      <Works_0 id="works" ref={sectionRefs.works_0} />
      <Works_1 id="works" ref={sectionRefs.works_1} />
      <Works_2 id="works" ref={sectionRefs.works_2} />
      <Works_3 id="works" ref={sectionRefs.works_3} />
      <Works_4 id="works" ref={sectionRefs.works_4} />
      <Works_5 id="works" ref={sectionRefs.works_5} />
      <Works_6 id="works" ref={sectionRefs.works_6} />
      <Works_7 id="works" ref={sectionRefs.works_7} />
      <Contact id="contact" ref={sectionRefs.contact} />
    </>
  );
}
export default App;
