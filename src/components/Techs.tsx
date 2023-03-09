import { LinkIcon } from "@heroicons/react/24/outline";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const techs: any[] = [
  {
    name: "Next.js",
    description:
      "Next.js enables you to create full-stack web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
    icon: "/assets/techs/next.svg",
    link: "https://nextjs.org/",
  },
  {
    name: "Nest.js",
    description:
      "A progressive Node.js framework for building efficient, reliable and scalable server-side applications.",
    icon: "/assets/techs/nest.svg",
    link: "https://nestjs.com/",
  },
  {
    name: "Redux",
    description: "A predictable state container for JavaScript applications",
    icon: "/assets/techs/redux.svg",
    link: "https://redux.js.org/",
  },
  {
    name: "MongoDB",
    description:
      "MongoDB is a non-relational document database that provides support for JSON-like storage.",
    icon: "/assets/techs/mongodb.svg",
    link: "https://www.mongodb.com/",
  },
  {
    name: "PostgreSQL",
    description:
      "A highly stable database management system, with high levels of resilience, integrity, and correctness.",
    icon: "/assets/techs/postgresql.png",
    link: "https://www.postgresql.org/",
  },
  {
    name: "Typescript",
    description:
      "It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript.",
    icon: "/assets/techs/typescript.svg",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Git",
    description: "An open source distributed version control system.",
    icon: "/assets/techs/git.png",
    link: "https://git-scm.com/",
  },
];

const Techs = () => {
  const [selectedTech, setSelectedTech] = useState(0);
  const isSm = useMediaQuery("(min-width: 640px)");
  const isMd = useMediaQuery("(min-width: 768px)");

  return (
    <article
      className="w-1/2 flex justify-center absolute bottom-0 overflow-hidden border-slate-400"
      style={{
        borderBottomWidth: "1px",
        height: isMd ? "20em" : "15em",
        width: isMd ? "43em" : isSm ? "37em" : "33em",
        paddingTop: "3.5em",
      }}
    >
      <div
        className="rounded-full relative border border-slate-400 backdrop-blur-md"
        style={{
          width: isMd ? "35em" : isSm ? "25em" : "20em",
          height: isMd ? "35em" : isSm ? "25em" : "20em",
          transform: `rotate(-${selectedTech * (360 / techs.length)}deg)`,
          transition: "all 1s",
        }}
      >
        {techs.map((tech: any, i: number) => {
          return (
            <div
              className="rounded-full absolute"
              key={`tech-number-${i}`}
              style={{
                width: isMd ? "35em" : isSm ? "25em" : "20em",
                height: isMd ? "35em" : isSm ? "25em" : "20em",
                transform: `rotate(${(i * 360) / techs.length}deg)`,
              }}
            >
              <div
                onClick={() => setSelectedTech(i)}
                className="absolute bg-neutral-900 border border-slate-400 rounded-full cursor-pointer z-40"
                style={{
                  width: isMd ? "6em" : "5em",
                  height: isMd ? "6em" : "5em",
                  top: isMd ? "calc(-3em)" : "calc(-2.5em)",
                  left: isMd ? "calc(50% - 3em)" : "calc(50% - 2.5em)",
                }}
              >
                <div className="w-full flex items-center justify-center h-full">
                  <Image
                    className="drop-shadow-[0_0_5px_rgba(52,211,153,.8)]"
                    src={tech.icon}
                    width={isMd ? 50 : 40}
                    height={50}
                    alt={tech.name}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <article className="absolute top-40 w-1/2 flex flex-col items-center">
        <h3 className="text-2xl font-bold text-emerald-400 underline">
          <a
            href={techs[selectedTech].link}
            target="_blank"
            className="flex gap-2 items-center justify-center"
            rel="noopener noreferrer"
          >
            {techs[selectedTech].name} <LinkIcon className="w-5" />
          </a>
        </h3>
        <p className="hidden md:block text-md indent-6">
          {techs[selectedTech].description}
        </p>
      </article>
    </article>
  );
};

export default Techs;
