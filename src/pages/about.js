import React from "react";
import Container from "../components/Container";
import Profilepic from "../images";
import "./style.css";
import "../components/Container/about.css";
function about() {
  return (
    <div>
      <Container
        className={`container-about`}
        main={
          <>
            <h1> Stephen Clark, Web Dev </h1>
            <p className={`about-text`}>
              <img className={`about-img`} src={myFace} />
              My Name is Stephen Clark. I am a Developer here in Parker, CO. I
              have spent the past three months learning how to code. I am now
              currently in Denver University's coding bootcamp for full stack
              web developement
            </p>
            <p>Phone: 720-339-4869</p>
            <p>Email: clark7382@hotmail.com</p>
          </>
        }
      />
    </div>
  );
}

export default about;
