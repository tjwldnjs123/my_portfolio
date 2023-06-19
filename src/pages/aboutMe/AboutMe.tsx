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
    <MainLayout isScroll={true} title="About Me">
      <div id="main_slideY" className="px-10 h-[100vh] ">
        <p></p>
        <div
          className={`${firstScroll && "fade-in flexRowCenter p-10 h-[60%] "} `}
        >
          <img
            className="w-[10%] h-[50%] pr-2"
            src={process.env.PUBLIC_URL + "/assets/job.png"}
          />
          <img
            className="w-[10%] h-[50%] pr-2"
            src={process.env.PUBLIC_URL + "/assets/cake.jpeg"}
          />
        </div>

        <div
          className={`${secondScroll && "fade-in-second flexRowCenter p-10 "} `}
        >
          <div className="border-2 w-[60%] h-[200px] border-yellow-200">
            drag & drop!!
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default AboutMe;
