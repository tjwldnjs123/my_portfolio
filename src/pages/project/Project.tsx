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
import { Icon } from "@iconify/react";
import DetailProject from "../../components/project/DetailProject";
import projectData from "../../data/data.json";

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
    partsOfMe: string[];
  }>({ name: "", img: "", personnal: "", period: "", partsOfMe: [] });
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  const handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 200) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  };

  return (
    <div className="flexColCenter relative animate-intro">
      <div className=" flexColCenter h-[100vh]    ">
        <div className="flexColCenter project_font fixed top-0  w-full bg-yellow-200 h-[70%]">
          <div className=" text-6xl">WORK & PROJECT</div>
          <p className="mt-3 ">
            안녕하세요 프론트엔드 개발자로 첫걸음 디딘 서지원 입니다 :)
          </p>
          <p></p>
        </div>
        {scroll && <Scroll />}
      </div>
      <div className="flex flex-row justify-end w-[90%] mb-2 z-10">
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
        onReachBeginning={(e) => setPrevDisabled(true)}
        onReachEnd={(e) => setNextDisabled(true)}
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
                className="h-[200px] bg-cover w-full"
                src={process.env.PUBLIC_URL + data.img}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <DetailProject open={open} onClose={onClose} project={detailProject} />
    </div>
  );
}

export default Project;