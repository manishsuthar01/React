import { useState } from "react";

import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { SlArrowLeft ,SlArrowRight} from "react-icons/sl";

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform built with React and Node.js. Features include user authentication, product catalog, shopping cart, and payment integration.",
      image: "",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing modern design principles with smooth animations and optimized performance.",
      image: "",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "",
      technologies: ["Vue.js", "Firebase", "Vuetify"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description:
        "A comprehensive weather dashboard with location-based forecasts, interactive maps, and historical weather data visualization.",
      image: "",
      technologies: ["JavaScript", "Chart.js", "Weather API"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend",
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  return (
    <section id="projects" className="md:py-20 relative overflow-hidden bg-[#0F172A] text-white p-7">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background-secondary"></div>

      <div className="container mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-3xl  text-gradient-hero font-poppins mb-4">
            My Projects
          </h3>
          <p className="text-sm text-gray-500 text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and achievements
          </p>
        </div>

        {/* Project Carousel */} 
        <div className="max-w-6xl mx-auto ">
          <div className="relative">
            {/* Main Project Display */}
            <div className="card-glow overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative overflow-x-hidden group  max-w-dvw m-2">
                  <img
                    src={projects[currentProject].image}
                    alt={projects[currentProject].title}
                    className="w-full h-full object-cover min-h-[270px] lg:min-h-[300px] group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1  text-gray-800 text-sm font-medium rounded-full">
                      {projects[currentProject].category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-foreground mb-4 font-poppins ">
                    {projects[currentProject].title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-gray-600">
                    {projects[currentProject].description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-neon-cyan mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[currentProject].technologies.map(
                        (tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-[#2c6cd3] text-foreground text-sm rounded-full border border-neon-blue/30"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <div
                      className="bg-[#3B82F6] hover:bg-[#2e6fd7] text-primary-foreground flex items-center space-x-2 glow-purple rounded-3xl p-2"
                      asChild
                    >
                      <a
                        href={projects[currentProject].liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View Live</span>
                      </a>
                    </div>
                    <div
                      variant="outline"
                      className="bg-[#3B82F6] hover:bg-[#2e6fd7]  flex items-center space-x-2 p-2 rounded-3xl"
                      asChild
                    >
                      <a
                        href={projects[currentProject].githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div
              variant="ghost"
              size="icon"
              className="absolute left-0 top-64 md:top-28  hover:scale-108 "
              onClick={prevProject}
            >
              <SlArrowLeft className=" text-[#22428b] text-4xl md:text-6xl"/>
            </div>
            <div
              variant="ghost"
              size="icon"
              className="absolute right-0 top-64 md:top-28 hover:scale-108"
              onClick={nextProject}
            >
              <SlArrowRight className=" text-[#22428b] text-4xl md:text-6xl" />
            </div>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? "bg-neon-cyan glow-neon-blue"
                    : "bg-muted hover:bg-neon-blue/50"
                }`}
                onClick={() => goToProject(index)}
              />
            ))}
          </div>  

          {/* Project Counter */}
          <div className="text-center mt-2">
            <span className="text-muted-foreground text-sm">
              {currentProject + 1} of {projects.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
