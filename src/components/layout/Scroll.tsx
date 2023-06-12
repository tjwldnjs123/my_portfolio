import { Icon } from "@iconify/react";
import React from "react";

function Scroll() {
  return (
    <div className="flexColCenter fixed bottom-0 mb-10  animate-bounce">
      <Icon fontSize={20} icon="bi:mouse" />
      <p className="scroll_font ">scroll</p>
    </div>
  );
}

export default Scroll;
