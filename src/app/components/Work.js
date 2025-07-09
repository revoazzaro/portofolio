import React from "react";

const projects = [
  {
    title: "Antasena19",
    year: "2024",
    gradient: "from-[#81b1fb] to-[#ddaffa]",
  },
  {
    title: "Portfolio Design",
    year: "2023",
    gradient: "from-[#7f1d1d] to-[#b91c1c]",
  },
  {
    title: "UI Playground",
    year: "2022",
    gradient: "from-[#155e75] to-[#2dd4bf]",
  },
  {
    title: "CSS Experiments",
    year: "2021",
    gradient: "from-[#ca8a04] to-[#facc15]",
  },
];

export default function Work() {
  return (
    <section className="text-white py-20 lg:max-w-7xl lg:min-w-auto min-w-full mx-auto">
      <h1 className="text-2xl lg:text-3xl font-bold mb-8">Project</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`w-full min-h-[200px] md:min-h-[340px] rounded-xl overflow-hidden p-6 flex flex-col justify-between bg-gradient-to-tl ${project.gradient} hover:-translate-2 transition-transform duration-300 cursor-pointer`}
          >
            <h3 className="font-bold text-lg text-black/80">{project.title}</h3>
            <p className="text-end text-black/80 font-semibold">
              {project.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
