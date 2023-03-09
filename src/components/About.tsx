import Techs from "./Techs";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col items-center pt-24 relative"
    >
      <h2 className="font-bold uppercase text-2xl">
        About <span className="text-emerald-400">me</span>
      </h2>
      <article className="p-4 my-2 w-5/6 md:w-2/3 lg:w-1/2 backdrop-blur-md rounded-lg border border-slate-400">
        <p>
          I&apos;m a self taught learner working on this beautiful world since
          some years ago.
          <br />I found in these technologies many challenges and satisfactions
          that led me to be passionate about my work.
          <br />
          My core are in{" "}
          <span className="text-emerald-400 font-bold">Honesty</span>,{" "}
          <span className="text-emerald-400 font-bold">Proactivity</span>,{" "}
          Attention to{" "}
          <span className="text-emerald-400 font-bold">Detail </span> and a lot
          of <span className="text-emerald-400 font-bold">Curiosity!</span>
        </p>
      </article>
      <Techs />
    </section>
  );
};

export default About;
