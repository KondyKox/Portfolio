import "./Hero.css";

const Hero = () => {
  return (
    <section id="Hero" className="container hero">
      <div className="hero__img">
        <img src="./hero.jpg" alt="Me :)" />
      </div>
      <div className="hero__content">
        <h2 className="hero__subtitle">Konrad Ciesielski</h2>
        <h1 className="hero__title">
          WEB / FRONTEND <br /> DEVELOPER
        </h1>
        <div className="hero__links">
          <a
            href="https://github.com/KondyKox"
            target="_blank"
            className="hero__link"
          >
            <img src="./links/github.png" alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/konrad-ciesielski/"
            target="_blank"
            className="hero__link"
          >
            <img src="./links/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
