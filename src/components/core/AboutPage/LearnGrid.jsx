import React from "react";
import { HighlightText } from "../HomePage/HighlightText";
import CtaButton from "../../core/HomePage/Button";

export const LearnGrid = () => {
  const LearnGridData = [
    {
      order: -1,
      heading: "World-Class Learning for",
      highlistText: "Anyone, Anywhere",
      description:
        "Studynotion partners with more than 250+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
      BtnText: "Learn more",
      BtnLink: "/",
    },
    {
      order: 1,
      heading: "Curriculum Based on Industry Needs",
      description:
        "Save time and money! The Studynotion curriculum is made to be easier to understand and in line with industry needs.",
    },
    {
      order: 2,
      heading: "Our Learning Methods",
      description:
        "Studynotion partners with more than 250+ leading universities and companies to bring innovative learning methods.",
    },
    {
      order: 3,
      heading: "Certification",
      description:
        "Earn certificates from leading universities and companies to showcase your skills and knowledge.",
    },
    {
      order: 4,
      heading: `Rating "Auto Grading"`,
      description:
        "Experience automated grading that provides instant feedback on your progress.",
    },
    {
      order: 5,
      heading: "Ready to Work",
      description:
        "Get job-ready with courses designed to help you develop the skills needed in the industry.",
    },
  ];

  return (
    <div className="grid mx-auto items-center gap-8 p-8 grid-cols-1 lg:grid-cols-4">
      {LearnGridData.map((card, index) => {
        return (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 lg:h-[280px]
            ${index === 0 && "lg:col-span-2"}
            ${card.order % 2 === 1 ? "bg-richblack-500" : "bg-richblack-800"}
            ${card.order === 3 && "lg:col-start-2"}`}
          >
            {card.order === -1 ? (
              <div>
                <h1 className="text-3xl font-bold text-white mb-4">
                  {card.heading} <HighlightText text={card.highlistText} />
                </h1>
                <p className="text-lg text-gray-300 mb-6">{card.description}</p>
              <div className="w-fit mt-5">
              <CtaButton active={true} linkto={card.BtnLink}>
                  <span className="px-3 py-1 text-sm">{card.BtnText}</span>
                </CtaButton>
              </div>
              </div>
            ) : (
              <div>
                <h1 className="text-2xl font-semibold text-white mb-4">
                  {card.heading}
                </h1>
                <p className="text-md text-gray-400">{card.description}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
