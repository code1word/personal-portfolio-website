import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import load1 from "../../assets/ContactMe/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Bottom from "../../PortfolioContainer/Bottom/Bottom";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading title={"Contact Me"} />
      <div className="central-form">
        <div className="back-form">
          <div className="img-back">
            <div className="col">
              <h3 className="title">
                Get In Touch<span className="bluedot">.</span>
              </h3>{" "}
            </div>

            <h5>
              Feel free to reach out about anything! Prefer email instead? You
              can reach me{" "}
              <a href="mailto:dy2444@columbia.edu" title="dy2444@columbia.edu">
                <i className="cu-email">here</i>
              </a>
              :
            </h5>
            <div className="mail">
              <div className="cover"></div>
              <div className="letter">
                <h1>dy2444@columbia.edu</h1>
              </div>
            </div>
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <div className="name-email">
              <div className="name-or-email">
                <label htmlFor="name">
                  Name<i className="blue-ast">*</i>
                </label>
                <input type="text" onChange={handleName} value={name} />
              </div>

              <div>
                <label htmlFor="email">
                  Email Address<i className="blue-ast">*</i>
                </label>
                <input type="email" onChange={handleEmail} value={email} />
              </div>
            </div>

            <label htmlFor="message">
              Message<i className="blue-ast">*</i>
            </label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                Send Message <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Bottom />
    </div>
  );
}
