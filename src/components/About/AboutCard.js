import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">SEJINJIN </span>
            from <span className="purple"> Busan, Republic of Korean</span>
            <br />
            I am student
            <br />
            I haven't graduated from college yet
            <br />
            <br />
            I have various hobbies besides coding.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing My Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Study New Programm Languages
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "강한자가 살아남는것이 아니라 살아남는자가 강한것이다"{" "}
          </p>
          <footer className="blockquote-footer">김유신 장군(General Kim Yu-shin)</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
