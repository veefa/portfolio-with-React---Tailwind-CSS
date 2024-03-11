import React from "react";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div
        className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between"
        text-slate-700
      >
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-slate-400 pb-2 text-slate-700">
            About Me
          </h2>

          <p className="pb-5 text-slate-600 text-sm">
            Hi, My Name Is Wafae Hamdaoui everyone calls me Vee. I am a
            Frontend Developer. I build beautifull websites with React and
            Tailwind CSS.
          </p>
          <p className="pb-5 text-slate-600 text-sm">
            I am jonior in Frontend skills like React.js, Redux, Redux Tool
            Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.
          </p>

          <p className=" text-slate-600 text-sm">
          In my spare time, I hone my frontend skills through personal projects, occasionally joining online workshops, conferences, and forums to stay updated on industry trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
