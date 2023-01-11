import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + " - " + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
        <div className="research-buttons">
          {props.viewPoster && props.viewPaper ? (
            <div>
              <a href={props.viewPoster} download="DY Research Poster.pdf">
                <button className="btn primary-btn">
                  View Poster <i class="fa fa-download"></i>
                </button>
              </a>
              <a href={props.viewPaper} download="DY Research Paper.pdf">
                <button className="btn primary-btn">
                  View Paper <i class="fa fa-download"></i>
                </button>
              </a>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  };
  const ResumeHeading2 = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + " - " + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Experience", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Research", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "C", ratingPercentage: 90 },
    { skill: "Python", ratingPercentage: 85 },
    { skill: "Java", ratingPercentage: 80 },
    { skill: "C++", ratingPercentage: 80 },
    { skill: "HTML/CSS", ratingPercentage: 85 },
    { skill: "JavaScript", ratingPercentage: 70 },
    { skill: "React JS", ratingPercentage: 70 },
    { skill: "SQL", ratingPercentage: 80 },
    { skill: "R", ratingPercentage: 75 },
    { skill: "MATLAB", ratingPercentage: 65 },
  ];

  const projectDetails = [
    {
      title:
        "Implementing and Evaluating the Efficiency of a Quantum Linear Systems Algorithm",
      duration: { fromDate: "June 2020", toDate: "October 2020" },
      description:
        "For this project, I implemented a quantum computing algorithm for solving large systems of linear equations. I then performed an experiment to analyze the algorithm's time complexity and investigate the impact of different factors on solution fidelity. I carried out a similar analysis for one of the fastest classical linear systems algorithms, and demonstrated that the quantum algorithm's runtime scales less rapidly as a function of problem size.",
      viewPoster: "RPhys Poster.pdf",
      viewPaper: "RPhys Paper.pdf",
    },
  ];

  const resumeDetails = [
    <div // Education container
      className="resume-screen-container"
      key="education"
    >
      <ResumeHeading
        heading={"Columbia University, New York, NY"}
        subHeading={
          "BACHELOR OF SCIENCE IN COMPUTER SCIENCE; MINOR IN APPLIED MATHEMATICS"
        }
        description={
          "Relevant Coursework: Advanced Programming in C, Data Structures in Java, Artificial Intelligence, Natural Language Processing, Fundamentals of Computer Systems, Databases, Competitive Programming, Computer Science Theory, Discrete Mathematics, Computational Linear Alebra"
        }
        fromDate={"August 2021"}
        toDate={"May 2025"}
      />
      <ResumeHeading
        heading={"NC School of Science and Mathematics, Durham, NC"}
        subHeading={"HIGH SCHOOL DIPLOMA"}
        description={
          "Relevant Coursework: Graph Theory, Multivariable Calculus, Java, Procedural Programming in Python, Number Theory, AP Computer Science A/Principles"
        }
        fromDate={"August 2019"}
        toDate={"May 2021"}
      />
    </div>,
    <div // Experience container
      className="resume-screen-container"
      key="work-experience"
    >
      <div className="experience-container">
        <ResumeHeading
          heading={"Prakriti Inc."}
          subHeading={"Founder and Director"}
          fromDate={"January 2018"}
          toDate={"Present"}
          description={
            "Launched a non-profit organization that provides educational opportunities such as online classes, webinars, and tutoring services while simultaneously raising funds for various social causes."
          }
        />
        <div className="resume-description-text">
          <ul>
            <li>
              Organized and successfully conducted a six-week summer STEM
              program, offering courses in Java, Python, and more to nearly 200
              middle and high school students.
            </li>
            <li>
              Organized a summer hackathon event to promote interest in computer
              science, receiving over 30 submissions.
            </li>
            <li>Led cybersecurity awareness workshops for 50+ seniors.</li>
          </ul>
        </div>
      </div>
    </div>,
    <div // Programming container
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    <div // Projects container
      className="resume-screen-container"
      key="projects"
    >
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
          viewPoster={projectDetails.viewPoster}
          viewPaper={projectDetails.viewPaper}
        />
      ))}
    </div>,
    <div // Interests container
      className="resume-screen-container"
      key="interests"
    >
      <ResumeHeading2
        heading="Speed Cubing 🏁"
        description="Speed cubing is a race against myself; I love the challenge of constantly learning new algorithms to improve my time ⏲️. My PB for the 3x3 is 9 seconds."
      />
      <ResumeHeading2
        heading="Origami 🦢"
        description="Over the years, I've folded over 2000 origami models ranging from from action pieces like ninja stars ✴ and modular fireworks 🎆 to more aesthetic pieces like roses 🌹 and dragons 🐉."
      />
      <ResumeHeading2
        heading="Badminton 🏸"
        description="I enjoy playing badminton recreationally with friends 🤝, and I'm also part of Columbia Badminton Club."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 460;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="No internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
