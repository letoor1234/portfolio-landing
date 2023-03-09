import { classnames } from "@/utils/classnames";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import ButtonLink from "./ButtonLink";
import Clock from "./Clock";

const Main = () => {
  const [initShowText, setInitShowText] = useState(false);

  const particlesInit = useCallback(async (engine: any) => {
    // console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await container; // console.log(container);
  }, []);

  const [minimize, setMinimize] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position >= window.innerHeight / 3) {
      setMinimize(true);
    } else {
      setMinimize(false);
    }
  };

  useEffect(() => {
    handleScroll();
    setInitShowText(true);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="w-full h-screen overflow-hidden flex items-center justify-center"
    >
      <div className="absolute md:left-24 top-32 py-4 px-6 w-auto overflow-hidden sm:overflow-visible">
        <div className="font-bold text-3xl flex flex-col items-center transition">
          <span
            className="text-emerald-400"
            style={{
              transform: `translate(${initShowText ? "0%" : "-500%"}, 0)`,
              transition: "transform 2s",
            }}
          >
            Smart Development
          </span>
          <span
            style={{
              transform: `translate(0, ${initShowText ? "0%" : "-900%"})`,
              transition: "transform 2s",
            }}
          >
            for
          </span>
          <span
            style={{
              transform: `translate(${initShowText ? "0%" : "900%"}, 0)`,
              transition: "transform 2s",
            }}
            className="text-emerald-400"
          >
            Smart Projects
          </span>
          <span className="my-8 text-sm">
            <ButtonLink href="#contact">
              <span className="flex gap-2 items-center justify-center">
                Get in touch!
              </span>
            </ButtonLink>
          </span>
        </div>
      </div>
      <div className="w-32 h-32 -rotate-45 fixed">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 40,
            particles: {
              color: {
                value: "#4ade80",
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                speed: 0.3,
              },
              interactivity: {
                events: {
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              number: {
                density: {
                  enable: true,
                  area: 20,
                },
                value: 200,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 0.5, max: 2.5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      <div
        className={classnames(
          minimize ? "bottom-12 right-12" : "bottom-32 right-32",
          "fixed transition z-50"
        )}
      >
        <Clock minClock={minimize} />
      </div>
    </section>
  );
};

export default Main;
