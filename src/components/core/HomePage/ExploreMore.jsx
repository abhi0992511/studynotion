import React, { useState } from "react";
import { HighlightText } from "./HighlightText";
import { HomePageExplore } from "../../../data/homepage-explore";
import { Card } from "./Card";


export const ExploreMore = () => {
  const tabName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
  ];
  const [currentTab, setcurrentTab] = useState(tabName[0]);
  const [courses, setCourse] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );
  const setMyCard = (value) => {
    setcurrentTab(value);
    const res = HomePageExplore.filter((element) => element.tag === value);
    setCourse(res[0].courses);
    setCurrentCard(res[0].courses[0].heading);
  };
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="text-4xl">
          Unlock The <HighlightText text={"Power of Code"}></HighlightText>
        </div>
        <div className="text-base text-center">
          Learn to code anything you can Imagine.
        </div>
        <div className="flex flex-row gap-4 rounded-full p-2 bg-richblack-700 mb-5">
          {tabName.map((element, index) => {
            return (
              <div
                className={`flex flex-row items-center gap-2 ${
                  currentTab === element
                    ? "bg-richblack-900 text-white"
                    : "text-richblack-200"
                } p-2 rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-white`}
                onClick={() => setMyCard(element)}
                key={index}
              >
                {element}
              </div>
            );
          })}
        </div>
        <div className="h-[150px]"></div>
        <div className="lg:absolute gap-10 justify-center lg:gap-0 flex lg:justify-between flex-wrap w-full lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] text-black lg:mb-0 mb-7 lg:px-0 px-3">
        {courses.map((ele, index) => {
          return (
            <Card
              key={index}
              cardData={ele}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          );
        })}
      </div>
      </div>
    </div>
  );
};
