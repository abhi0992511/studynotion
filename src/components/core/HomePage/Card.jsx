import React from "react";

export const Card = ({ cardData, currentCard, setCurrentCard }) => {
  return (
    
      <div
      className={`w-[360px] lg:w-[30%] ${
        currentCard === cardData?.heading
          ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50 text-richblack-800"
          : "bg-richblack-800"
      }  text-richblack-25 h-[300px] box-border cursor-pointer`}
      onClick={() => setCurrentCard(cardData?.heading)}
      >
        <div className="font-bold text-xl mt-2 p-2">{cardData.heading}</div>
        <div className="mt-2 p-2">{cardData.description}</div>
        <div className="flex flex-row justify-between p-5">
          <div>{cardData.level}</div>
          <div>{cardData.lessionNumber}</div>
        </div>
      </div>
  );
};
