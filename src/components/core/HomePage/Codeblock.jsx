import React from "react";
import CTaButton from "./Button";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export const Codeblock = ({
  postion,
  heading,
  subheading,
  btn1,
  btn2,
  codeblock,
  backgroundcolor,
  codecolor,
}) => {
  return (
    <div className={`flex ${postion} my-20 justify-between gap-10`}>
      <div className="flex flex-col gap-8 w-[50%]">
        {heading}
        <div className="text-richblack-300 font-bold">{subheading}</div>
        <div className="flex gap-7 mt-7">
          <CTaButton active={btn1.active} linkto={btn1.linkto}>
            <div className="flex gap-2 items-center">
              {btn1.btnText}
              <FaArrowRight />
            </div>
          </CTaButton>
          <CTaButton active={btn2.active} linkto={btn2.linkto}>
            <div className="flex gap-2 items-center">{btn2.btnText}</div>
          </CTaButton>
        </div>
      </div>
      <div className="flex flex-row h-fit text-[10px] w-[100%] lg:w-[500px] py-4">
        <div
          className={`flex flex-col text-center text-xl font-bold font-mono pr-2 ${codecolor} w-[10%]`}
        >
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
          <p>13</p>
          <p>14</p>
          <p>15</p>
          <p>16</p>
        </div>
        <div
          className={`flex flex-colfont-bold text-xl font-mono pr-2 ${codecolor}`}
        >
          <TypeAnimation
            sequence={[codeblock, 500, ""]}
            repeat={Infinity}
            cursor={true}
            style={{
              whiteSpace: "pre",
              display: "block",
            }}
            omitDeletionAnimation={true}
          ></TypeAnimation>
        </div>
      </div>
    </div>
  );
};
