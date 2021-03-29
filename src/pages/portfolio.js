import React from "react";
import Card from "../components/Card";
import Container from "../components/Container";
import dayPlanner from "../../src/images/dayPlanner";
import weatherdashboard from "../images/ ";

import "../components/Container/projects.css";
import "./style.css";

function portfolio() {
  return (
    <div>
      <Container
        className={`container-projects`}
        main={
          <Card
            classes={`project-1`}
            name={"dayPlanner"}
            image={dayPlanner}
            url={""}
            github={``}
            desc={" An app that helps plants grow"}
          />
        }
        main2={
          <Card
            classes={`project-2`}
            name={"weatherdashboard"}
            url={""}
            github={``}
            image={}
            desc={"check the weather "}
          />
        }
        main3={
          <Card
            classes={`project-3`}
            name={""}
            url={"fitnesstracker"}
            image={}
            github={``}
            desc={"lets get fit"}
          />
        }
        main4={
          <Card
            classes={`project-4`}
            name={"Feederology"}
            url={""}
            github={``}
            image={one}
            desc={"feed your mood based on weather "}
          />
        }
        main5={
          <Card
            classes={`project-5`}
            name={"Inventory Management system"}
            url={""}
            github={``}
            image={}
            desc={" "}
          />
        }
      />
    </div>
  );
}

export default portfolio;
