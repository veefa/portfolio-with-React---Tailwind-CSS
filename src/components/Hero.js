import React from "react";
import HeroImg from "../media/Hero.png";

import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineCodepen,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-slate-700 py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am <span className="text-accent">v</span>eefa <br />
            Frontend Developer
          </h1>

          <p className="py-5">
            I am proficient in JavaScript, React.js and Tailwind CSS
          </p>

          <div className="flex py-5 ">
            <a
              href="https://codepen.io/Veefa-Hamdawy"
              className="pr-4 inline-block text-accent hover:text-gray-300"
            >
              {" "}
              <AiOutlineCodepen size={40} />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/wafae-hamdawy-4420a9181/"
              className="pr-4 inline-block text-accent hover:text-gray-300"
            >
              {" "}
              <AiOutlineLinkedin size={40} />{" "}
            </a>
            <a
              href="https://github.com/veefa"
              className="pr-4 inline-block text-accent hover:text-gray-300"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
          </div>

          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[#7477ff] text-gray-300 px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto opacity-4 py-9"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
