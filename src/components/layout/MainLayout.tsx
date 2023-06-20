import React, { useEffect, useState } from "react";
import Scroll from "./Scroll";

type Props = {
  children: React.ReactChild[] | React.ReactChild;
  title: string;
  subTitle?: string;
  isScroll?: boolean;
};

function MainLayout({ children, title, subTitle, isScroll }: Props) {
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <div className="animate-intro h-screen overflow-scroll scrollbar-hide scroll-smooth ">
      <div className="flex flex-col items-center  h-[100vh]">
        <div className="flexColCenter project_font w-full bg-yellow-200 h-[70%] pt-[7%] sticky top-0">
          <div className="text-4xl sm:text-6xl">{title}</div>
          <p className="mt-3 text-sm sm:text-xl">{subTitle}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

export default MainLayout;
