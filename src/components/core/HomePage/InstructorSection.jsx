import React from "react";
import InstructorImage from "../../../assets/Images/Instructor.png";
import CTaButton from "../HomePage/Button";
import { HighlightText } from "./HighlightText";
import { FaArrowRight } from "react-icons/fa";
export const InstructorSection = () => {
  return (
    <div>
      <div className="flex flex-row gap-14 items-center">
        <div className="w-[50%] mt-16">
          <img
            src={InstructorImage}
            className="shadow-white"
            alt="Instructor"
          ></img>
        </div>
        <div className=" w-[50%] flex flex-col gap-5">
          <div className="text-4xl font-semibold w-[50%]">
            Become an <HighlightText text={"Instructor"}></HighlightText>
          </div>
          <div className="w-[70%]">
            Instructor from around the world teach millions of Students on
            StudyNotion. We proud the tools and skills to teach what you love.
          </div>
        <div className="w-fit"> 
        <CTaButton active={true} linkto={"/signup"}>
            <div className="flex flex-row items-center gap-2">
              Start learning Today
              <FaArrowRight></FaArrowRight>
            </div>
          </CTaButton>
        </div>
        </div>
      </div>
    </div>
  );
};
