import { LinkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import TurnableCard from "./TurnableCard";

const projects: any[] = [
  {
    name: "Pandago Market",
    description: [
      "E-bikes and e-cars rental market for clients, customers, companies and more in Spain!",
      "In this project I worked with React.js, Redux, Styled Components, Express.js and PostgreSQL to bring a beautiful face and experience.",
      "This was one of my first projects in this world.",
      "In collaboration with the Akimad agency, of which I was fortunate to be a part.",
    ],
    href: "https://pandago.eco/market",
    image: "/assets/projects/pandago.png",
  },
  {
    name: "EZ Dump Trucks",
    description: [
      "To connect contractors with truck's owners.",
      "Working with Next.js, Nest.js, React Native, MUI, PostgreSQL and a lot of other things, we made a landing page, an administration portal and a mobile application.",
      "The team was great!",
    ],
    href: "https://www.ezdumptruck.com",
    image: "/assets/projects/ezdump.png",
  },
  {
    name: "GDI",
    description: [
      "Web application to manage all the information of Print Services.",
      "Next.js, Express, MongoDB, MUI and a lot of integrations to fill all the required features.",
      "Currently working on it!",
    ],
    href: "https://graficainteligente.com",
    image: "/assets/projects/gdi.png",
  },
  {
    name: "Icaro",
    description: [
      "For this association I worked as a Fullstack Development Teacher.",
      "I was able to teach about Javascript, Node.js, HTML5, CSS3, Express, Sessions, EJS and some more technologies.",
      "The best students and a great professional team!",
    ],
    href: "https://icaro.org.ar/",
    image: "/assets/projects/icaro.png",
  },
];
const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen flex flex-col items-center pt-24"
    >
      <h2 className="font-bold uppercase text-2xl mb-4">
        My <span className="text-emerald-400">work</span>
      </h2>
      <div className="w-full flex flex-wrap justify-center">
        {projects.map((project: any, i: number) => (
          <TurnableCard
            key={`project-n-${i}`}
            frontContent={
              <div className="p-2 w-full flex flex-col items-center gap-1">
                <Image
                  className="shadow-lg"
                  src={project.image}
                  width={205}
                  height={0}
                  alt={project.name}
                />
              </div>
            }
            backContent={
              <div className="w-full py-2 px-4 flex flex-col items-center gap-1">
                {project?.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="font-bold text-lg underline text-emerald-400 flex gap-2">
                      {project.name} <LinkIcon className="w-5" />
                    </h3>
                  </a>
                ) : (
                  <h3 className="font-bold text-lg">{project.name}</h3>
                )}
                {project.description.map((desc: any, j: number) => (
                  <p key={`project-desc-${i}-${j}`}>{desc}</p>
                ))}
              </div>
            }
          />
        ))}
      </div>
      <div className="w-full flex justify-center items-center my-4">
        <ButtonLink
          href="https://github.com/letoor1234"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>See more on My GitHub!</span>
        </ButtonLink>
      </div>
    </section>
  );
};

export default Projects;
