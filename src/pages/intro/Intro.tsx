import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import FirstIntroduce from "../../components/intro/FirstIntroduce";
import SecondIntroduce from "../../components/intro/SecondIntroduce";
import Scroll from "../../components/layout/Scroll";

function Intro() {
  const [scroll, setScroll] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const [secondFadeIn, setSecondFadeIn] = useState(false);

  function onScroll(e: any) {
    let screenY = e.currentTarget.scrollTop;
    console.log(screenY);
    if (screenY > 700) {
      setFadeIn(true);
    } else {
      setFadeIn(false);
    }
    if (screenY > 1260) {
      setScroll(false);
    } else {
      setScroll(true);
    }
    if (screenY > 1400) {
      setSecondFadeIn(true);
    } else {
      setSecondFadeIn(false);
    }
  }

  useEffect(() => {
    document
      .getElementById("main_slideY")
      ?.addEventListener("scroll", onScroll);
  }, [scroll, fadeIn, secondFadeIn]);

  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <>
      <div
        id="main_slideY"
        className="snap-y snap-mandatory h-screen overflow-scroll bg-yellow-200 w-full mr-4 animate-intro"
      >
        <div className="snap-always snap-start bg-fixed  flexRowCenter  h-[100vh]">
          <h1 className="intro_font text-8xl">Hello</h1>
          {scroll && <Scroll />}
        </div>
        <FirstIntroduce fadeIn={fadeIn} />
        <SecondIntroduce secondFadeIn={secondFadeIn} />
      </div>
    </>
  );
}

export default Intro;
