import React from "react";

const Experience = () => {
  const qualifications = [
    {
      type: "Education",
      title: "Computer Science",
      institution: "Rajasthan technical university",
      year: "📅 2023-Present",
      isLeft: true,
    },
    {
      type: "Experience",
      title: "Frontend Developer",
      institution: "Oasis infobyte",
      year: "📅 2025-Present",
      isLeft: false,
    },
    {
      type: "Education",
      title: "React Developer",
      institution: "freelance",
      year: "📅 2025",
      isLeft: true,
    },
    {
      type: "Experience",
      title: "Web developer",
      institution: "IBM SkillsBuild",
      year: "📅 2025-Present",
      isLeft: false,
    },
  ];

  const exp = qualifications.filter((q) => q.type === "Experience");
  const edu = qualifications.filter((q) => q.type === "Education");
  return (
    <section className=" bg-[#0F172A] md:p-8 p-0 py-12 mb-auto flex flex-col items-center justify-center ">
      <h2 className="text-3xl text-white">Qualification</h2>
      <p className="text-sm p-1 text-gray-500">My journey</p>
     

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-0 relative mt-28 mb-20">
        <div classname="flex flex-col items-end space-">
          <div class=" p-4 rounded-lg w-72 text-white text-center ">💼 Work </div>
          {exp.map((item, idx) => {
            return (
              <div
                key={idx}
                className="bg-gray-800 p-4 rounded-lg w-72 md:mb-30 mb-10"
              >
                <h3 className="text-white text-2xl">{item.title}</h3>
                <p className="text-gray-400">{item.institution}</p>
                <p className="text-purple-400 text-sm py-5">{item.year}</p>
              </div>
            );
          })}
        </div>

        {/* <!-- Center Line --> */}
        <div class=" hidden md:flex flex-col items-center">
          <div class="w-3 h-3 bg-cyan-400 rounded-full"></div>
          <div class="w-3 h-3 absolute top-36 bg-cyan-400 rounded-full"></div>
          <div class="w-3 h-3 absolute top-80 bg-cyan-400 rounded-full"></div>

          <div class="h-full w-1 bg-gradient-to-b from-purple-500 to-cyan-500"></div>
          <div class="w-3 h-3 bg-cyan-400 rounded-full"></div>
        </div>

        {/* <!-- Right Column --> */}
        <div className="flex flex-col items-end space-">
          <div class=" p-4 rounded-lg w-72 text-white text-center">🏆 Qualification</div>
          {edu.map((item, idx) => {
            return (
              <div
                key={idx}
                className="bg-gray-800 p-4 rounded-lg w-72 mt-10 md:mt-30"
              >
                <h3 className="text-white text-2xl">{item.title}</h3>
                <p className="text-gray-400">{item.institution}</p>
                <p className="text-purple-400 text-sm py-5">{item.year}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
