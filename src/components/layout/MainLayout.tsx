import React, { useEffect, useState } from "react";
import Scroll from "./Scroll";

type Props = {
  children: React.ReactChild[] | React.ReactChild;
  title: string;
  subTitle: string;
};

function MainLayout({ children, title, subTitle }: Props) {
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  useEffect(() => {
    document
      .getElementById("main_slideY")
      ?.addEventListener("scroll", onScroll);
  }, [scroll]);

  const onScroll = (e: any) => {
    let screenY = e.currentTarget.scrollTop;

    if (screenY > 150) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  };
  return (
    <div
      id="main_slideY"
      className="animate-intro h-screen overflow-scroll scrollbar-hide "
    >
      <div className="flex flex-col items-center  h-[100vh] sticky top-0 ">
        <div className="flexColCenter project_font w-full   bg-yellow-200 h-[70%]">
          <div className="text-4xl sm:text-6xl">{title}</div>
          <p className="mt-3 text-sm sm:text-xl">{subTitle}</p>
        </div>
        {scroll && <Scroll />}
      </div>
      {children}
    </div>
  );
}

export default MainLayout;
