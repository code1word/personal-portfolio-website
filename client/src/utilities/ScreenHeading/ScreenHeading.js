import React from "react";
import "./ScreenHeading.css";

export default function ScreenHeading(props) {
  return (
    <div className="heading-container">
      <div className="screen-heading">
        <span className="dot_one">.</span>
        <span className="blue_text">
          <span>{props.title}</span>
          <span className="dot_two">.</span>
        </span>
      </div>
      {props.subHeading ? (
        <div className="screen-sub-heading">
          <span>{props.subHeading}</span>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
