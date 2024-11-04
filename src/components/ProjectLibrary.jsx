import  { useState } from "react";
import projectImage1 from "../assets/C1-Ableton.png";
import projectImage2 from "../assets/C2-lobe.png";
import projectImage3 from "../assets/C1-Backstage-Talks.png";
import projectImage4 from "../assets/C2-basic.png";
import projectImage5 from "../assets/C3-go-daddy.png";


const projects = [
  {
    id: 1,
    title: "Ableton",
    level: "Level 1",
    image: projectImage1,
  },
  {
    id: 2,
    title: "Abstract",
    level: "Level 2",
    image: projectImage2,
  },
  {
    id: 3,
    title: "Go-Daddy",
    level: "Level 3",
    image: projectImage5,
  },
  {
    id: 4,
    title: "Backstage-Talks",
    level: "Level 1",
    image: projectImage3,
  },
  {
    id: 5,
    title: "Basic",
    level: "Level 2",
    image: projectImage4,
  },
  {
    id: 6,
    title: "Abstract",
    level: "Level 1",
    image: projectImage2,
  },
  {
    id: 7,
    title: "Abstract",
    level: "Level 2",
    image: projectImage2,
  },
  {
    id: 8,
    title: "Abstract",
    level: "Level 3",
    image: projectImage2,
  },
];

const ProjectLibrary = () => {
  const [selectedLevel, setSelectedLevel] = useState("All");

  const filteredProjects = selectedLevel === "All"
    ? projects
    : projects.filter((project) => project.level === selectedLevel);

  const getLevelColor = (level) => {
    switch (level) {
      case "Level 1":
        return "bg-green-300";
      case "Level 2":
        return "bg-yellow-300";
      case "Level 3":
        return "bg-orange-600";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <section className="flex flex-col items-center text-center p-6 md:p-10">
      <h1 className=" text-[72px] font-bold font-dmSerif mb-8 md:mb-10 mt-6 md:mt-10">
        Project Library
      </h1>

      <div className="text-md md:text-lg mb-4 md:mb-6 max-w-2xl">
        <h2 className="font-dmSerif font-bold underline mb-4 md:mb-6 text-[26px]">
          How to get started:
        </h2>
        <ul className="text-left space-y-2 md:space-y-3 text-lg md:text-xl font-archivo">
          <li>→ Choose one of our projects below.</li>
          <li>→ Recreate all or parts of the page.</li>
          <li>→ Improve and test your skills.</li>
          <li className="font-bold">
            ✓ Become a better frontend developer.
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-2 md:flex md:justify-center md:gap-3.5 mb-4 md:mb-6">
        <button
          className={`px-4 md:px-6 py-2 md:py-3 border-2 ${selectedLevel === "All" ? "bg-black text-white" : "border-black"}`}
          onClick={() => setSelectedLevel("All")}
        >
          View All
        </button>
        <button
          className={`px-4 md:px-6 py-2 md:py-3 border-2 ${selectedLevel === "Level 1" ? "bg-green-300 text-black" : "border-black hover:bg-green-300 hover:text-black"}`}
          onClick={() => setSelectedLevel("Level 1")}
        >
          Level 1
        </button>
        <button
          className={`px-4 md:px-6 py-2 md:py-3 border-2 ${selectedLevel === "Level 2" ? "bg-yellow-300 text-black" : "border-black hover:bg-yellow-300 hover:text-black"}`}
          onClick={() => setSelectedLevel("Level 2")}
        >
          Level 2
        </button>
        <button
          className={`px-4 md:px-6 py-2 md:py-3 border-2 ${selectedLevel === "Level 3" ? "bg-orange-600 text-black" : "border-black hover:bg-orange-600 hover:text-black"}`}
          onClick={() => setSelectedLevel("Level 3")}
        >
          Level 3
        </button>
      </div>

      <input
        type="text"
        placeholder="Search for project by name: Nintendo"
        className="border-2 border-black shadow-lg px-3 py-2 md:py-3 mb-4 md:mb-10 w-full max-w-lg"
      />

<p className="font-dmSerif font-bold text-[18px]  text-black mt-2 md:mt-6 max-w-2xl mx-auto">
  There are no rules with these projects. Use any languages, libraries, or
  frameworks you want to recreate and learn from them.
</p>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6x4 w-full mt-8 md:mt-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="border-2 border-black  overflow-hidden shadow-lg relative transform transition-transform duration-300 hover:scale-105"
          >
            <div className="relative bg-[#FAEBD7] h-60 md:h-96 flex items-center justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute top-2 right-2 text-black text-xs md:text-sm font-bold px-3 py-2 border-2 border-black ${getLevelColor(project.level)}`}>
                {project.level}
              </div>
            </div>

            <div className="md:h-16 bg-[#FAEBD7] border-t-2 border-black p-4 text-left">
              <h3 className="text-[24px] font-bold underline text-gray-900 font-dmSerif">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectLibrary;
