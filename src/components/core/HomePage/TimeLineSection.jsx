import React from "react";
import logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimelineImage.png";
export const TimeLineSection = () => {
  const timeline = [
    {
      logo: logo1,
      heading: "Leadership",
      Description: "Fully Committed to the success for the Company.",
    },
    {
      logo: logo2,
      heading: "Responsibity",
      Description: "Students will be our top Priority.",
    },
    {
      logo: logo3,
      heading: "Flexibility",
      Description: "The ability to switch an important Skills.",
    },
    {
      logo: logo4,
      heading: "Solve the Problem",
      Description: "Code your way to a Solution.",
    },
  ];
  return (
    <div>
      <div className=" flex flex-row gap-15 items-center mb-20">
        <div className="w-[45%] flex flex-col gap-5">
          {timeline.map((element, index) => {
            return (
              <div key={index} className="flex flex-row gap-3">
                <div className="w-[50px] h-[50px] flex items-center">
                  <img src={element.logo} alt="loading failed"></img>
                </div>
                <div className="flex flex-col">
                  <h2 className="font-semibold text-[18px]">
                    {" "}
                    {element.heading}
                  </h2>
                  <p>{element.Description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="relative shadow-blue-220">
          <img
            src={timelineImage}
            alt="TimelineImage"
            className="shadow-white object-cover h-fit"
          ></img>
           <div className=" absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-7 left-[50%] translate-x-[-50%] translate-y-[-70%] rounded-md">
          <div className="flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7">
            <p className="text-3xl font-bold">10</p>
            <p className="text-caribbeangreen-300 text-sm">
              Years of Experience
            </p>
          </div>
          <div className="flex gap-5 items-center px-7">
            <p className="text-3xl font-bold">250</p>
            <p className="text-caribbeangreen-300 text-sm">Types of Courses</p>
          </div>
        </div>
        </div>
       
      </div>
    </div>
  );
};
