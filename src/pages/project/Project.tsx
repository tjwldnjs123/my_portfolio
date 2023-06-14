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

    if (screenY > 300) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  };

  return (
    <div
      id="main_slideY"
      className="animate-intro h-screen overflow-scroll scrollbar-hide"
    >
      <div className="flexColCenter h-[100vh]">
        <div className="flexColCenter project_font fixed top-0  w-full bg-yellow-200 h-[70%]">
          <div className=" text-6xl">WORK & PROJECT</div>
          <p className="mt-3 ">
            안녕하세요 프론트엔드 개발자로 첫걸음 디딘 서지원 입니다 :)
          </p>
        </div>
        {scroll && <Scroll />}
      </div>
      <div className="w-full z-30 flexColCenter">
        <div className="flex flex-row justify-end w-[90%] mb-2 z-10 ">
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
          slidesPerView={3}
          spaceBetween={30}
          onBeforeInit={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={() => setInit(false)}
          onReachBeginning={() => setPrevDisabled(true)}
          onReachEnd={() => setNextDisabled(true)}
          modules={[Navigation]}

          // breakpoints={{
          //   768: {
          //     slidesPerView: 7,
          //   },
          // }}
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
                <img
                  className="h-[300px] bg-cover w-full"
                  src={process.env.PUBLIC_URL + data.img}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          className="h-20 hover:underline"
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
