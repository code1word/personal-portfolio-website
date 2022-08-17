import React from "react";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Dhruv</span>.
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <div className="slider-wrapper">
                I'm a
                <div className="slider">
                  <div className="slider-text1">
                    College Student<span className="period">.</span>
                  </div>
                  <div className="slider-text2">
                    Developer<span className="period">.</span>
                  </div>
                  <div className="slider-text3">
                    Tech Enthusiast<span className="period">.</span>
                  </div>
                </div>
              </div>
              <span className="profile-role-tagline">
                You can find me here:
              </span>
            </span>
          </div>
          <div className="colz">
            <div className="one">
              <a href="mailto:dy2444@columbia.edu">
                <i className="fa fa-envelope icon"></i>
              </a>
            </div>
            <div className="two">
              <a
                href="https://www.linkedin.com/in/dhruvyalamanchi/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin icon"></i>
              </a>
            </div>
            <div className="three">
              <a
                href="https://github.com/code1word"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github icon"></i>
              </a>
            </div>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Let's Chat&ensp;<i className="fa fa-comment"></i>
            </button>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
