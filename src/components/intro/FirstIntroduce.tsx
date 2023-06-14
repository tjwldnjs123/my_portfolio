import React from "react";

type Props = {
  fadeIn: boolean;
};
function FirstIntroduce({ fadeIn }: Props) {
  return (
    <div className="snap-always snap-center h-[100vh] flexRowCenter smileImg">
      <div className=" w-[100%]">
        <div
          className={`${fadeIn && "fade-in"} text-xl flexColCenter sm:text-2xl`}
        >
          <span>
            <strong>배움에</strong> 즐거움을 느끼고
          </span>
          <span>
            <strong>함께하는</strong> 소중함을 아는 개발자
          </span>
          <span>첫발은 더딜 수 있더라도 함께 나아갈 수 있는</span>
          <span>프론트엔드 개발자 서지원입니다.</span>
        </div>
      </div>
    </div>
  );
}

export default FirstIntroduce;
