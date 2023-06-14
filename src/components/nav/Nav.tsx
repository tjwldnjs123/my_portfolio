import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const currentUrl = useLocation();

  return (
    <div className="z-20 fixed sm:top-4 sm:right-4 top-6 right-8 w-[10%] flex flex-row justify-around">
      {currentUrl.pathname.includes("main") && (
        <div className="text-3xl sm:text-2xl">
          <Icon
            onClick={() => navigate("/")}
            className=" hover:text-gray-500 cursor-pointer"
            icon="carbon:home"
          />
        </div>
      )}
      <div className="text-3xl sm:text-2xl">
        <Icon
          onClick={() =>
            window.open("https://github.com/tjwldnjs123", "_blank")
          }
          className=" hover:text-gray-500 cursor-pointer"
          icon="mdi:github"
        />
      </div>
      <div className="text-3xl sm:text-2xl">
        <Icon
          onClick={() =>
            window.open("https://velog.io/@tjwldnjs4457", "_blank")
          }
          className=" hover:text-gray-500 cursor-pointer"
          icon="uil:blogger"
        />
      </div>
    </div>
  );
}

export default Nav;
