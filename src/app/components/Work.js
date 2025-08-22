"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const projects = [
  {
    title: "Antasena19",
    year: "2025",
    gradient: "from-[#81b1fb] to-[#ddaffa]",
    href: "/antasena19",
  },
];

export default function Work() {
  const router = useRouter();
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (href, index) => {
    setClickedIndex(index);
    router.push(href);
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-2xl lg:text-4xl font-bold mb-8 bg-gradient-to-r from-[#3fffbf] to-[#10B981] bg-clip-text text-transparent inline-block">Project</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => handleClick(project.href, index)}
            className={`w-full min-h-[200px] md:min-h-[340px] rounded-xl overflow-hidden p-6 flex flex-col justify-between bg-gradient-to-tl ${project.gradient} hover:-translate-2 transition-transform duration-300 cursor-pointer`}
          >
            <h3 className="font-bold text-lg text-black/80">
              {project.title}
            </h3>
            <p className="text-end text-black/80 font-semibold">
              {project.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
