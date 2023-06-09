import React from "react";

type Props = {
  content: string;
};

function Title({ content }: Props) {
  return (
    <p className="project_font text-6xl font-bold bg-yellow-200 h-[100px] mb-10 flex flex-row items-center pl-4 ">
      {content}
    </p>
  );
}

export default Title;
