import React, { useRef, useState } from "react";
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

function Project() {
  const swiperRef = useRef<any>();
  const [init, setInit] = useState(true);
  const [prevDisabled, setPrevDisabled] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);

  console.log(nextDisabled);

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
        <Scroll />
      </div>
      <div className="flex flex-row justify-end w-[90%] mb-2">
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
        className="mySwiper relative w-[90%] "
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
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + "/assets/bodit1.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + "/assets/bodit1.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + "/assets/bodit1.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + "/assets/bodit1.png"} />
        </SwiperSlide>
      </Swiper>
      {/* <div className="projectImg mb-0 z-10 w-[30%] h-[500px] rounded-full"></div> */}
    </div>
  );
}

export default Project;
