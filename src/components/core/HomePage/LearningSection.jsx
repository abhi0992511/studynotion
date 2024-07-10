import React from "react";
import { HighlightText } from "./HighlightText";
import know_your_progress from "../../../assets/Images/Know_your_progress.svg";
import second from "../../../assets/Images/Plan_your_lessons.svg";
import third from "../../../assets/Images/Compare_with_others.svg";
import CTaButton from "../HomePage/Button";

export const LearningSection = () => {
  return (
    <div className="mt-[120px] mb-32">
      <div className="flex flex-col gap-3 items-center">
        <div className="text-4xl font-semibold text-center">
          Your Swiss Knife for{" "}
          <HighlightText text={"learning any language"}></HighlightText>
        </div>
        <div className="text-center font-medium w-[70%] mx-auto text-base">
          Using Spin Making Multiple languages easy with 20 + languages
          realistic voice-over progress tracking custom schedule and more
        </div>
        <div className=" flex flex-row justify-center mt-5">
          <img
            src={know_your_progress}
            className=" translate-x-[40%] -rotate-45"
            alt="KNOW_YOUR_PROGRESS"
          ></img>
          <img
            src={second}
            className=" translate-x-20"
            alt="PLAN_YOUR_LESSON"
          ></img>
          <img
            src={third}
            className=" translate-x-[-10%]"
            alt="COMPARE_WITH_OTHERS"
          ></img>
        </div>
        <div className="w-fit">
        <CTaButton  active={true} linkto={"/signup"}>
          Learn more
        </CTaButton>
        </div>
      </div>
    </div>
  );
};
