import { Icon } from "@iconify/react";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  secondFadeIn: boolean;
};

function SecondIntroduce({ secondFadeIn }: Props) {
  const navigate = useNavigate();
  return (
    <div className="snap-always snap-center h-[100vh] flex flex-col justify-center items-center md:flex md:flex-row md:justify-center md:items-center">
      {secondFadeIn && (
        <>
          <img
            className={`${
              secondFadeIn &&
              // "fade-in w-[50%] h-[60%] rounded-full object-cover sm:pr-8 sm:rounded-full  md:w-[50%] md:h-[70%] lg:w-[40%] lg:h-[75%]  2xl:w-[30%] 2xl:h-[55%] "
              "fade-in w-[50%] h-[30%] rounded-full object-cover sm:pr-8 sm:rounded-full sm:w-[45%] sm:h-[40%] md:w-[37%] md:h-[60%]  2xl:w-[30%] 2xl:h-[40%] "
            }`}
            src={process.env.PUBLIC_URL + "/assets/me.jpeg"}
          />
          <div className="relative">
            <p
              className={`${
                secondFadeIn &&
                "fade-in intro_more_font text-2xl mt-6 md:text-6xl "
              }`}
            >
              Do you <br />
              want to
              <br /> see more?
            </p>
            <div
              className="absolute bottom-[-100px] right-[-20px] 2xl:text-3xl cursor-pointer animate-bounce"
              onClick={() => navigate("/about-me")}
            >
              <Icon
                fontSize={40}
                icon="icon-park-outline:winking-face-with-open-eyes"
              />
              <span>click me!</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SecondIntroduce;
