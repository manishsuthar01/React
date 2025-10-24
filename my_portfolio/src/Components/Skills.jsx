import React from "react";

const Skills = () => {
  const skills = {
    Frontend: [
      { name: "React.js", level: "90%" },
      { name: "JavaScript (ES6+)", level: "85%" },
      { name: "HTML5", level: "95%" },
      { name: "Tailwind CSS", level: "90%" },
    ],
    Tools: [
      { name: "Git & GitHub", level: "85%" },
      { name: "VS Code", level: "90%" },
      { name: "npm/yarn", level: "80%" },
      { name: "Figma (Basic)", level: "70%" },
    ],
    Deployment: [
      { name: "Netlify", level: "90%" },
      { name: "Docker", level: "75%" },
      { name: "CI/CD Basics", level: "70%" },
      { name: "Vercel", level: "85%" },
    ],
  };
  return (
    <section
      id="skills"
      className="bg-[#0F172A]  mb-auto flex flex-col items-center justify-center py-12  "
    >
      <h2 className="font-semibold  text-3xl text-[#CBD5E1]">
       Skills
      </h2>
      <p className="text-gray-500 text-sm ">My technical skills</p>
      <div className=" grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 text-white md:p-1 p-6 mt-18 mb-20 ">
        {Object.entries(skills).map(([category, items]) => {
          return (
            <div key={category} className="bg-gray-800  p-8 rounded-2xl h-80 md:h-80 w-72 md:w-72">
              <h3 className="text-xl font-semibold mb-4 ">{category}</h3>
              <ul className="space-y-4">
                {items.map((skill) => {
                  return (
                    <li key={skill.name}>
                      <div className=" flex justify-between mb-1">
                        <span>{skill.name}</span>
                        <span className="text-sm  text-gray-400 ">
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: skill.level }}
                        ></div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
