import Image from "next/image";

const projects = [
  {
    title: "Antasena19",
    image: "/images/antasena19.webp",
    description:
      "This is a yearbook website for the graduating class of SMKN 5 Tangerang Regency, developed with WordPress and Elementor through close team collaboration. The site was created to celebrate the class’s identity and diversity across various study programs, presented through a clean, informative, and easily navigable design.",
    tech: ["Wordpress", "Elementor", "Git"],
    link: "https://antasena19.com",
  },
  {
    title: "Rev-Ai",
    image: "/images/revai.webp",
    description:
      "Rev-Ai is a conversational AI web app built with Vite and Tailwind CSS, integrating DeepInfra’s API to provide access to multiple advanced language models through a clean and responsive interface. The platform emphasizes accessibility and flexibility, allowing users to explore different models seamlessly while enjoying a modern, intuitive design.",
    tech: ["Vite", "Tailwind", "DeepInfra"],
    link: "",
  },
];

export default function Project() {
  return (
    <section className="py-10 md:px-6 max-w-7xl mx-auto">
      <h1 className="text-2xl lg:text-4xl font-bold mb-8 bg-gradient-to-r from-[#3fffbf] to-[#10B981] bg-clip-text text-transparent inline-block">
        Project
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group hover:bg-white/5 backdrop-blur-sm border hover:border-white/10 border-none duration-300 rounded-lg md:p-4 p-0"
          >
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={281}
                draggable={false}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 gap-2 flex flex-col">
              <a
                className="flex items-center cursor-pointer gap-1 group-hover:text-teal-300 transition-colors w-fit"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="font-bold text-xl text-[#E2E8f0] group-hover:text-teal-300 transition-colors">
                  {project.title}
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <p className="font-bold text-sm text-[#94A3B8]">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 mt-1">
                {project.tech.map((tech, index) => (
                  <li key={index}>
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      {tech}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
