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

      <div className="p-10 h-[100vh] w-full snap-always snap-center  ">
        <div
          className={`${
            // firstScroll &&
            "fade-in  flex flex-col justify-start items-center p-10 bg-yellow-300 h-full "
          } `}
        >
          <div>
            <div className="flexColCenter">
              <img
                className="w-[30%] h-[60%] pb-4 rounded-full"
                src={process.env.PUBLIC_URL + "/assets/증사1.jpg"}
              />
              <div>
                <p className="text-xl text-slate-800 ">
                  전 은행원 현 개발자 코딩하는게 즐거워요:)
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row pt-10">
            <div className="flexColCenter mr-2 bg-yellow-100 rounded-full w-[500px] h-[320px]">
              <p>"안녕하십니까 어서오십시오."</p>
              <p>"어떤 업무 도와드릴까요~?"</p>
              <p>저는 경영학과를 나와 금융권에 근무하면서</p>
              <p>
                사람들과 자주 소통하며 고객의 예금을 책임졌던{" "}
                <strong>은행원</strong>입니다.
              </p>
              <div className="flexRowCenter">
                <p className=" border border-gray-400 rounded-full">+친절함</p>
                <p className=" border border-gray-400 rounded-full">
                  +소통능력
                </p>
                <p className=" border border-gray-400 rounded-full">+책임감</p>
                <p className=" border border-gray-400 rounded-full">+성실함</p>
              </div>
            </div>

            <div className="flexColCenter   bg-yellow-100 rounded-full w-[500px] h-[320px]">
              <p>다양한 사람들과 소통하며 </p>
              <p>꾸준히 새로운것을 탐구하고 </p>
              <p>클라이언트입장에서 다시 한번 생각하며 개발하는 </p>
              <p>
                {" "}
                <strong>프론트엔드 개발자</strong>입니다.
              </p>
              <div className="flexRowCenter">
                <p className=" border border-gray-400 rounded-full">+HTML</p>
                <p className=" border border-gray-400 rounded-full">+CSS</p>
                <p className=" border border-gray-400 rounded-full">
                  +Javascript
                </p>
                <p className=" border border-gray-400 rounded-full">+React</p>
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
