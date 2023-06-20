import React, { useEffect, useRef, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import Scroll from "../../components/layout/Scroll";
import Project from "../project/Project";

function AboutMe() {
  const [scroll, setScroll] = useState(true);

  function onScroll(e: any) {
    let screenY = e.currentTarget.scrollTop;
    const windowH = e.currentTarget.scrollHeight;
    // console.log(screenY);
    // console.log(windowH * 0.1);
    if (screenY > windowH / 2 + windowH * 0.1) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  }
  useEffect(() => {
    document
      .getElementById("main_slideY")
      ?.addEventListener("scroll", onScroll);
  }, [scroll]);

  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <div
      id="main_slideY"
      className="snap-y snap-mandatory animate-intro h-screen overflow-scroll scrollbar-hide scroll-smooth"
    >
      <div className="snap-always snap-start   ">
        <div className="flex flex-col items-center  h-[100vh]">
          <div className="flexColCenter project_font w-full bg-yellow-200 h-[70%] pt-[7%] sticky top-0">
            <div className="text-4xl sm:text-6xl">About Me</div>
          </div>
        </div>
      </div>

      <div className="md:p-10 h-[100vh] w-full snap-always snap-center  ">
        <div
          className={`${
            // firstScroll &&
            "fade-in  flex flex-col justify-start items-center p-5 lg:p-10 bg-yellow-300 h-full "
          } `}
        >
          <div>
            <div className="flexColCenter">
              <img
                className="w-[25%] h-[30%] pb-2 lg:w-[30%] lg:h-[60%] lg:pb-4 rounded-full"
                src={process.env.PUBLIC_URL + "/assets/증사1.jpg"}
              />
              <div>
                <p className="md:text-lg lg:text-xl text-slate-800 ">
                  전 은행원 현 개발자 코딩하는게 즐거워요:)
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-around pt-5 lg:pt-10 lg:flex lg:flex-row">
            <div className="flexColCenter lg:mr-2 bg-yellow-100 rounded-full text-sm mb-4 w-[350px] h-[200px] md:w-[420px] md:h-[250px] md:mb-2 lg:w-[500px] lg:h-[320px]   ">
              <p>"안녕하십니까 어서오십시오."</p>
              <p>"어떤 업무 도와드릴까요~?"</p>
              <p>저는 경영학과를 나와 금융권에 근무하면서</p>
              <p>
                사람들과 자주 소통하며 고객의 예금을 책임졌던{" "}
                <strong>은행원</strong>입니다.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-5">
                <p className="shadow-lg rounded-full text-center">+친절함</p>
                <p className="shadow-lg rounded-full text-center">+소통능력</p>
                <p className="shadow-lg rounded-full text-center">+책임감</p>
                <p className="col-start-1 col-end-2 shadow-lg rounded-full text-center">
                  +성실함
                </p>
                <p>...</p>
              </div>
            </div>

            <div className="flexColCenter   bg-yellow-100 rounded-full text-sm w-[350px] h-[200px]  md:w-[420px] md:h-[250px] lg:w-[500px] lg:h-[320px]">
              <p>다양한 사람들과 소통하며 </p>
              <p>꾸준히 새로운것을 탐구하고 </p>
              <p>클라이언트입장에서 다시 한번 생각하며 개발하는 </p>
              <p>
                {" "}
                <strong>프론트엔드 개발자</strong>입니다.
              </p>
              <div className="grid grid-cols-3 gap-2 md:gap-4 mt-5 ">
                <p className="shadow-lg rounded-full text-center">+HTML</p>
                <p className="shadow-lg rounded-full text-center">+Css</p>
                <p className="shadow-lg rounded-full text-center">
                  +Javascript
                </p>
                <p className="shadow-lg rounded-full text-center">
                  +Typescript
                </p>
                <p className="shadow-lg rounded-full text-center">+React</p>
                <p className="shadow-lg rounded-full text-center">+Redux</p>
                <p className="shadow-lg rounded-full text-center">+Recoil</p>
                <p className="col-start-2 col-end-4 text-start">...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Project />
      {scroll && <Scroll />}
    </div>
  );
}

export default AboutMe;
