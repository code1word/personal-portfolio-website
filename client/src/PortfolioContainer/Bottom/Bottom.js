import React from "react";
import "./Bottom.css";
import ScrollService from "../../utilities/ScrollService";

export default function Bottom() {
  return (
    <div className="scroll-container">
      <button
        className="btn-scroll"
        onClick={() => ScrollService.scrollHandler.scrollToHome()}
      >
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
}
