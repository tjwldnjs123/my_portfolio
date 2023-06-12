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
      <button
        onClick={() => {
          swiperRef.current?.slidePrev(); // swiper의 slidePrev 실행
          setNextDisabled(false); // 슬라이드 변경 시 비활성화 상태 해제
        }}
        disabled={init || prevDisabled}
      >
        Prev
      </button>
      <button
        onClick={() => {
          swiperRef.current?.slideNext(); // swiper의 slideNext 실행
          setPrevDisabled(false); // 슬라이드 변경 시 비활성화 상태 해제
        }}
        disabled={nextDisabled}
      >
        Next
      </button>
      <Swiper
        className="mySwiper w-[90%] "
        slidesPerView={3}
        spaceBetween={30}
        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={() => setInit(false)} // 슬라이드 변경 시 실행
        onReachBeginning={(e) => setPrevDisabled(true)} // slide가 처음에 닿으면 실행
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
