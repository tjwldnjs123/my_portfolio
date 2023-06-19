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
    <MainLayout
      title="WORK & PROJECT"
      subTitle="안녕하세요 프론트엔드 개발자로 첫걸음 디딘 서지원 입니다 :)"
    >
      <div className="snap-always  w-full z-30 flexColCenter">
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
          //     slidesPerView: 4,
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
                  className=" bg-cover object-scale-down sm:object-fill sm:h-[300px] sm:w-full"
                  src={process.env.PUBLIC_URL + data.img}
                />
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
          <br />
          Project click!
        </button>
      </div>

      <DetailProject open={open} onClose={onClose} project={detailProject} />
    </MainLayout>
  );
}

export default Project;
