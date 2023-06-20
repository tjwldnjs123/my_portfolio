import React, { useEffect, useRef, useState } from "react";
import Scroll from "../../components/layout/Scroll";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { Icon } from "@iconify/react";
import DetailProject from "../../components/project/DetailProject";
import projectData from "../../data/data.json";
import { Box } from "@mui/material";
import MainLayout from "../../components/layout/MainLayout";

function Project() {
  const swiperRef = useRef<any>();
  const [scroll, setScroll] = useState(true);
  const [init, setInit] = useState(true);
  const [prevDisabled, setPrevDisabled] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [detailProject, setDetailProject] = useState<{
    name: string;
    img: string;
    personnal: string;
    period: string;
    githubUrl: string;
    partsOfMe: string[];
  }>({
    name: "",
    img: "",
    personnal: "",
    period: "",
    githubUrl: "",
    partsOfMe: [],
  });
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div id="main_slideY" className="">
      <div className="snap-always snap-center sticky top-0  h-[100vh]  w-full animate-intro  overflow-scroll scrollbar-hide scroll-smooth ">
        <div className="flex flex-col items-center h-[100vh] ">
          <div className="flexColCenter project_font w-full  bg-yellow-200 h-[70%] ">
            <div className="text-4xl sm:text-6xl">WORK & PROJECT</div>
            <p className="mt-3 text-sm sm:text-xl">
              안녕하세요 프론트엔드 개발자로 첫걸음 디딘 서지원 입니다 :)
            </p>
          </div>
        </div>
      </div>

      <div className="snap-always snap-center  w-full z-30 flexColCenter">
        <div className="flex flex-row w-[90%] justify-end mb-2 z-10 ">
          <button
            onClick={() => {
              swiperRef.current?.slidePrev();
              setNextDisabled(false);
            }}
            disabled={init || prevDisabled}
          >
            <Icon
              fontSize={25}
              color={init || prevDisabled ? "gray" : "black"}
              icon="ooui:previous-ltr"
            />
          </button>
          <button
            onClick={() => {
              swiperRef.current?.slideNext();
              setPrevDisabled(false);
            }}
            disabled={nextDisabled}
          >
            <Icon
              fontSize={25}
              color={nextDisabled ? "gray" : "black"}
              icon="ooui:previous-rtl"
            />
          </button>
        </div>
        <Swiper
          className="mySwiper relative w-[90%] mb-10"
          slidesPerView={2}
          spaceBetween={30}
          onBeforeInit={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={() => setInit(false)}
          onReachBeginning={() => setPrevDisabled(true)}
          onReachEnd={() => setNextDisabled(true)}
          modules={[Navigation]}
          breakpoints={{
            375: {
              slidesPerView: 3,
            },
          }}
        >
          {projectData.projects.map((data) => {
            return (
              <SwiperSlide
                key={data.name}
                className="cursor-pointer h-[300px]"
                onClick={() => {
                  setDetailProject(data);
                  setOpen(true);
                }}
              >
                <div className="relative group">
                  <img
                    className=" bg-cover object-fill w-[250px] h-[150px] sm:object-fill sm:h-[300px] sm:w-full brightness-100 group-hover:brightness-50"
                    src={process.env.PUBLIC_URL + data.img}
                  />
                  <div className="swiperHover  md:flex md:flex-col md:justify-center md:items-center invisible group-hover:visible">
                    <p className="invisible md:group-hover:visible text-xl md:text-3xl lg:text-4xl text-slate-50 pb-2">
                      {data.name}
                    </p>
                    <p className="invisible md:group-hover:visible md:text-sm text-center text-slate-50 ">
                      {data.contnet}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          className="h-20 hover:underline z-50"
          onClick={() =>
            window.open("https://tjwldnjs123.github.io/portfolio", "_blank")
          }
        >
          시연영상이 궁금하다면? click me :)
        </button>
      </div>

      <DetailProject open={open} onClose={onClose} project={detailProject} />
    </div>
  );
}

export default Project;
