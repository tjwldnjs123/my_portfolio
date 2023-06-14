import { Icon } from "@iconify/react";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const currentUrl = useLocation();

  return (
    <div className="z-20 fixed top-4 right-4  w-[8%] flex flex-row justify-around">
      {currentUrl.pathname.includes("main") && (
        <Icon
          onClick={() => navigate("/")}
          className="sm:w-7 sm:h-7 w-20 h-20 hover:text-gray-500 cursor-pointer"
          icon="carbon:home"
          fontSize={30}
        />
      )}
      <Icon
        onClick={() => window.open("https://github.com/tjwldnjs123", "_blank")}
        className="sm:w-7 sm:h-7 w-20 h-20 hover:text-gray-500 cursor-pointer"
        icon="mdi:github"
        // fontSize={30}
      />
      <Icon
        onClick={() => window.open("https://velog.io/@tjwldnjs4457", "_blank")}
        className="sm:w-7 sm:h-7 w-20 h-20 hover:text-gray-500 cursor-pointer"
        icon="uil:blogger"
        // fontSize={30}
      />
    </div>
  );
}

export default Nav;
