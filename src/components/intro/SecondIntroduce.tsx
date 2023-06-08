import { Icon } from "@iconify/react";
import React from "react";

type Props = {
  secondFadeIn: boolean;
};

function SecondIntroduce({ secondFadeIn }: Props) {
  return (
    <div className="snap-center h-[100vh] flexRowCenter">
      {secondFadeIn && (
        <>
          <img
            className={`${
              secondFadeIn && "fade-in w-[40%] h-[80%] rounded-full pr-8 "
            }`}
            src={process.env.PUBLIC_URL + "/assets/me.jpeg"}
          />
          <div className="relative">
            <p
              className={`${
                secondFadeIn && "fade-in intro_more_font text-7xl "
              }`}
            >
              Do you <br />
              want to
              <br /> see more?
            </p>
            <div className="absolute bottom-[-100px] right-[-20px] cursor-pointer animate-bounce">
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
