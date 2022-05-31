import React from "react";
import instagram from "../img/ins.png";
import Bahanse from "../img/behance.png";
import Potpis from "../img/potpis.png";
const About = () => {
  return (
    <div>
      <div className="darle">
        <div className="darle-title">
          <h1>Hi, I’m Darlene</h1>
          <p>
            I design beautiful websites & mobile apps that modern trends demand
          </p>

          <button>Contact me</button>
        </div>

        <div className="darle-buttom">
          <ul className="post">
            <li>
              <a href="https://www.instagram.com/">
                <img className="img-1" src={instagram} width={55} height={55} />
              </a>
            </li>
            <li>
              <img src={Bahanse} width={176} height={33} />
            </li>
            <li>
              <img src={Potpis} width={136} height={33} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
