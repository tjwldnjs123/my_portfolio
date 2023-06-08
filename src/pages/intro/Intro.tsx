import React from "react";
import { Icon } from "@iconify/react";

function Intro() {
  return (
    <div className="flexRowCenter bg-yellow-200 w-full h-[100vh] mr-4 animate-intro">
      <h1 className="intro_font text-8xl">Hello</h1>
      <div className="flexColCenter fixed bottom-0 mb-10  animate-bounce">
        <Icon fontSize={20} icon="bi:mouse" />
        <p className="scroll_font ">scroll</p>
      </div>
    </div>
  );
}

export default Intro;
