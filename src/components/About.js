import React from "react";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div
        className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between"
        text-slate-700
      >
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5 text-base">
            Hi, My Name Is Wafaa Hamdaoui everyone calls me Veefa. I am a
            Frontend Developer. I build beautifull websites with React and
            Tailwind CSS.
          </p>
          <p className="pb-5 text-base">
            I am jonior in Frontend skills like JavaScript, React.js, next.js,Tailwind CSS, SaSS and many more.
          </p>

          <p className=" text-base">
          In my spare time, I hone my frontend skills through personal projects, occasionally joining online workshops, and forums to stay updated on industry trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
