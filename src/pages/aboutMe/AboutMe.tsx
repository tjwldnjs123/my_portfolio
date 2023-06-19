import React, { useEffect, useRef, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";

function AboutMe() {
  const [firstScroll, setFirstScroll] = useState(false);
  const [secondScroll, setSecondScroll] = useState(false);
  const [thirdScroll, setThirdScroll] = useState(false);

  const onScroll = (e: any) => {
    let screenY = e.currentTarget.scrollTop;
    const windowH = window.innerHeight;
    console.log({ screenY, windowH });
    // screenY > 30 ? setFirstScroll(true) : setFirstScroll(false);

    if (screenY > 30) {
      setFirstScroll(true);
      setSecondScroll(false);

      if (screenY > 550) {
        setSecondScroll(true);
      } else {
        setSecondScroll(false);
      }
    } else {
      setFirstScroll(false);
    }
  };
  useEffect(() => {
    document
      .getElementById("main_slideY")
      ?.addEventListener("scroll", onScroll);
  }, [firstScroll, secondScroll]);

  return (
    <MainLayout isScroll={true} title="About Me" subTitle="hiii">
      <div id="main_slideY" className="px-10 ">
        <p></p>
        <div className={`${firstScroll && "fade-in flexRowCenter p-10"} `}>
          <img
            className="w-[10%] h-[50%]"
            src={process.env.PUBLIC_URL + "/assets/job.png"}
          />
          <div className="flexColCenter">
            <p>"안녕하십니까 어서오십시오."</p>
            <p>"어떤 업무 보러 오셨을까요~?"</p>
            <p>저는 경영학과를 나와 금융권에 근무하면서</p>
            <p>
              사람들과 자주 소통하며 고객의 예금을 책임졌던{" "}
              <strong>은행원</strong> 입니다.
            </p>
          </div>
        </div>

        <div
          className={`${secondScroll && "fade-in-second flexRowCenter p-10"} `}
        >
          <img
            className="w-[10%] h-[50%]"
            src={process.env.PUBLIC_URL + "/assets/job.png"}
          />
          <div className="flexColCenter">
            <p>"안녕하십니까 어서오십시오."</p>
            <p>"어떤 업무 보러 오셨을까요~?"</p>
            <p>저는 경영학과를 나와 금융권에 근무하면서</p>
            <p>
              사람들과 자주 소통하며 고객의 예금을 책임졌던{" "}
              <strong>은행원</strong> 입니다.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default AboutMe;
{
  /* <img
            className="w-[200px] h-[200px] rounded-full bg-cover"
            src={process.env.PUBLIC_URL + "/assets/cake.jpeg"}
          /> */
}
