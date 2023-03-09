import { useEffect, useState } from "react";
import {
  BeakerIcon,
  EnvelopeIcon,
  HomeIcon,
  UserIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  const [left, setLeft] = useState(0);

  const handleGetRect = () => {
    const home = document.getElementById("home")?.getBoundingClientRect();
    const about = document.getElementById("about")?.getBoundingClientRect();
    const projects = document
      .getElementById("projects")
      ?.getBoundingClientRect();
    const contact = document.getElementById("contact")?.getBoundingClientRect();

    const navigation = document
      .getElementById("navigation")
      ?.getBoundingClientRect();

    const homeButton = document
      .getElementById("home-btn")
      ?.getBoundingClientRect();
    const aboutButton = document
      .getElementById("about-btn")
      ?.getBoundingClientRect();
    const projectsButton = document
      .getElementById("projects-btn")
      ?.getBoundingClientRect();
    const contactButton = document
      .getElementById("contact-btn")
      ?.getBoundingClientRect();

    if (navigation) {
      if (home && homeButton && home?.top <= 50 && home?.top >= 0) {
        setLeft(homeButton.left - navigation.left + homeButton.width / 3);
      } else if (about && aboutButton && about?.top <= 50 && about?.top >= 0) {
        setLeft(aboutButton.left - navigation.left + aboutButton.width / 3);
      } else if (
        projects &&
        projectsButton &&
        projects?.top <= 50 &&
        projects?.top >= 0
      ) {
        setLeft(
          projectsButton.left - navigation.left + projectsButton.width / 3
        );
      } else if (
        contact &&
        contactButton &&
        contact?.top <= 50 &&
        contact?.top >= 0
      ) {
        setLeft(contactButton.left - navigation.left + contactButton.width / 3);
      }
    }
  };

  useEffect(() => {
    handleGetRect();
    window.addEventListener("scroll", handleGetRect, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleGetRect);
    };
  }, []);

  return (
    <div className="p-2 w-full fixed z-50">
      <header className="w-full border border-slate-400 py-3 px-4 backdrop-blur-lg flex items-center justify-between">
        <a href="#home">
          <div className="flex gap-4">
            <div className="-rotate-45 ">
              <div className="bg-emerald-400 w-6 h-6">
                <div className="bg-emerald-400 w-6 h-6 animate-[ping_2s_ease-out_infinite]" />
              </div>
            </div>
            <h1 className="text-emerald-500 font-bold text-xl">
              <span className="hidden md:inline">Angel</span> Martinez
            </h1>
          </div>
        </a>
        <nav className="relative">
          <ul className="flex gap-2" id="navigation">
            <div
              className={"absolute w-2 h-2 -rotate-45 bg-emerald-500 -bottom-2"}
              style={{ left: `${left}px`, transition: "all .7s" }}
            />
            <li>
              <a href="#home" id="home-btn">
                <button className="hidden md:block text-emerald-500 font-bold">
                  Home
                </button>
                <HomeIcon className="w-6 block md:hidden text-emerald-500" />
              </a>
            </li>
            <li>
              <a href="#about" id="about-btn">
                <button className="hidden md:block text-emerald-500 font-bold">
                  About
                </button>
                <UserIcon className="w-6 block md:hidden text-emerald-500" />
              </a>
            </li>
            <li>
              <a href="#projects" id="projects-btn">
                <button className="hidden md:block text-emerald-500 font-bold">
                  Projects
                </button>
                <WrenchScrewdriverIcon className="w-6 block md:hidden text-emerald-500" />
              </a>
            </li>
            <li>
              <a href="#contact" id="contact-btn">
                <button className="hidden md:block text-emerald-500 font-bold">
                  Contact
                </button>
                <EnvelopeIcon className="w-6 block md:hidden text-emerald-500" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
