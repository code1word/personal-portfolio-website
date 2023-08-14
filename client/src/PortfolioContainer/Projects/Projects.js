import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="testi-background fade-in screen-container"
      id={props.id || ""}
    >
      <div className="project-section ">
        <ScreenHeading title={"Projects"} />
        <div className="star-description">
          <i class="fa fa-star"></i> <span>-</span>
          <i className="star-description-text"> Notable Project</i>
        </div>
        <div className="container">
          <div className="row">
            <div className="card">
              <div className="ribbon">
                <i class="fa fa-star"></i>
              </div>
              <img
                src={require("../../assets/Projects/Notflix Logo.png")}
                alt="no internet connection"
              />
              <div className="info">
                <h2>Notflix</h2>
                <p className="italic">
                  Technologies used: React JS, Redux, Cloud Firestore, Firebase Authentication
                </p>
                <p>
                   Responsive Netflix clone made using React.js that leverages the TMDB API for real-time movie data; integrates Firebase Authentication and Redux for streamlined user management, while implementing multi-tier subscription model powered by Stripe Checkout and Firestore
                </p>
                <p className="demo-link">
                  <a href="https://netflix-46a6e.firebaseapp.com/">
                    Visit project website
                  </a>
                </p>
                <a
                  href="https://github.com/code1word/notflix"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="git-hub">
                    <i className="fa fa-github icon"></i>
                    <span>View on GitHub</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="card">
              <div className="ribbon">
                <i class="fa fa-star"></i>
              </div>
              <img
                src={require("../../assets/Projects/Chatbot Logo.png")}
                alt="no internet connection"
              />
              <div className="info">
                <h2>Personal Chatbot</h2>
                <p className="italic">
                  Technologies used: PyTorch, NLTK, Flask
                </p>
                <p>
                  A conversational chatbot implemented using a feedforward
                  neural network that can answer general questions about me.
                  It's been integrated into a responsive Flask web application.
                </p>
                <p className="demo-link">
                  <a href="http://dhruv-chatbot.herokuapp.com">
                    Visit project website
                  </a>
                </p>
                <a
                  href="https://github.com/code1word/dhruv-chatbot"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="git-hub">
                    <i className="fa fa-github icon"></i>
                    <span>View on GitHub</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="card">
              <div className="ribbon">
                <i class="fa fa-star"></i>
              </div>
              <img
                src={require("../../assets/Projects/Schmaker Logo.png")}
                alt="no internet connection"
              />
              <div className="info">
                <h2>Schmaker</h2>
                <p className="italic">
                  Technologies used: Flask, Bootstrap, SQL
                </p>
                <p>
                  A convenient platform into which NCSSM students can log in and
                  generate their trimester schedules, see their projected GPA,
                  and check for meeting pattern conflicts.
                </p>
                <p className="demo-link">
                  <a href="https://www.youtube.com/watch?v=MNKOXxwGdDM">
                    Watch demo
                  </a>
                </p>
                <a
                  href="https://github.com/code1word/schmaker"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="git-hub">
                    <i className="fa fa-github icon"></i>
                    <span>View on GitHub</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="card">
              <div className="ribbon">
                <i class="fa fa-star"></i>
              </div>
              <img
                src={require("../../assets/Projects/Web Server.png")}
                alt="no internet connection"
              />
              <div className="info">
                <h2>HTTP Web Server</h2>
                <p className="italic">Technologies used: Sockets API</p>
                <p>
                  An HTTP 1.0 web server that serves not only static HTML and
                  image files but also dynamic contents (specifically a lookup
                  of records from an mdb database file) by communicating with a
                  backend server.
                </p>
                <a
                  href="https://gist.github.com/code1word/49f78efc1657aa19bd9b4d8caff2cecb"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="git-hub">
                    <i className="fa fa-github icon"></i>
                    <span>View on GitHub</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="card">
              <div className="ribbon">
                <i class="fa fa-star"></i>
              </div>
              <img
                src={require("../../assets/Projects/DY Logo2.png")}
                alt="no internet connection"
              />{" "}
              <div className="info">
                <h2>Personal Portfolio</h2>
                <p className="italic">
                  Technologies used: React JS, Node JS, Bootstrap
                </p>
                <p>
                  A fully responsive personal portfolio website with email
                  functionality that showcases some of my latest projects.
                </p>
                <a
                  href="https://github.com/code1word/Personal-Portfolio-Website"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="git-hub">
                    <i className="fa fa-github icon"></i>
                    <span>View on GitHub</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="card">
              <img
                src={require("../../assets/Projects/2048 AI Logo.png")}
                alt="no internet connection"
              />
              <div className="info">
                <h2>2048 AI</h2>
                <p className="italic">Libraries used: Selenium, NumPy</p>
                <p>
                  A program that intelligently plays the number game 2048 by
                  implementing a vanilla minimax algorithm. It interacts with a
                  web app version of the game and plays it live.
                </p>
                <a
                  href="https://github.com/code1word/2048-AI"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="git-hub">
                    <i className="fa fa-github icon"></i>
                    <span>View on GitHub</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="card">
              <img
                src={require("../../assets/Projects/2048 Logo.png")}
                alt="no internet connection"
              />
              <div className="info">
                <h2>2048</h2>
                <p className="italic">Libraries used: Tkinter, NumPy</p>
                <p>
                  A recreation of the classic sliding tile puzzle game. This
                  version of 2048 features an easy-to-use GUI interface that was
                  made using Tkinter.
                </p>
                <a
                  href="https://github.com/code1word/2048"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="git-hub">
                    <i className="fa fa-github icon"></i>
                    <span>View on GitHub</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="card">
              <img
                src={require("../../assets/Projects/DDR Logo.png")}
                alt="no internet connection"
              />
              <div className="info">
                <h2>Dance Dance Revolution</h2>
                <p className="italic">
                  Technologies used: Arduino, Adafruit RGB Matrix Library,
                  LiquidCrystal Library
                </p>
                <p>
                  A recreation of Dance Dance Revolution on Arduino that prompts
                  user input through joystick tilts and button presses,
                  gradually becomes more difficult as the game progresses, plays
                  music, and more!
                </p>
                <a
                  href="https://github.com/code1word/DDR-Arduino-Game"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="git-hub">
                    <i className="fa fa-github icon"></i>
                    <span>View on GitHub</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="card">
              <img
                src={require("../../assets/Projects/CSG Logo.png")}
                alt="no internet connection"
              />
              <div className="info">
                <h2>Cubic Spline Generator</h2>
                <p className="italic">
                  Libraries used: Qiskit, Matplotlib, NumPy
                </p>
                <p>
                  A tool that closely approximates a curve described by a
                  mathematical function via a cubic spline interpolation,
                  leveraging features of Qiskit along the way.
                </p>
                <a
                  href="https://github.com/code1word/nc-qc-hackathon-summer-2020"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="git-hub">
                    <i className="fa fa-github icon"></i>
                    <span>View on GitHub</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
