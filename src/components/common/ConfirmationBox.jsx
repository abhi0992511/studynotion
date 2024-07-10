import React from "react";
import { Cbtn } from "./Cbtn";

export const ConfirmationBox = ({ modalData }) => {
  return (
    <div className="text-white bg-richblack-600 rounded-md p-5 w-[20%] items-center justify-between">
      <div className="flex flex-col gap-5 p-5">
        <p className="text-4xl text-blue-400">{modalData.text1}</p>
        <p className="text-xl">{modalData.text2}</p>
        <div className="flex gap-x-5">
          <Cbtn onclick={modalData.btn1Handler} text={modalData.btnText1}>
            logout
          </Cbtn>
          <button onClick={modalData.btn2Handler}>{modalData.btn2Text}</button>
        </div>
      </div>
    </div>
  );
};
