import React from "react";
import { HighlightText } from "../HomePage/HighlightText";

export const Quote = () => {
  return (
    <div className="text-4xl text-center">
      We are passionate about revoulizing the way we learn.Our Innovative
      platforms <HighlightText text={"combines technologies"}></HighlightText>{" "}
      <span className="text-brown-200">experties</span>,{" "} community to create an{" "}
      <span className="text-brown-200">
        unparlleled educational experiences
      </span>{" "}
    </div>
  );
};
