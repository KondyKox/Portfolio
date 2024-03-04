import "./About.css";

const About = ({ t }) => {
  return (
    <section id="about" className="container about">
      <div className="about__content">
        <h2 className="about__title">{t("about.title")}</h2>
        <p className="about__description">{t("about.description.intro")}</p>
        <p className="about__description">{t("about.description.skills")}</p>
        <p className="about__description">{t("about.description.goals")}</p>
        <p className="about__description">{t("about.description.contact")}</p>
        
        <h3 className="about__subtitle">{t("about.tech")}:</h3>
        <div className="about__ul-container">
          <ul className="about__ul">
            <li className="about__list">JavaScript</li>
            <li className="about__list">ReactJS</li>
            <li className="about__list">Vite</li>
          </ul>
          <ul className="about__ul">
            <li className="about__list">HTML</li>
            <li className="about__list">CSS</li>
          </ul>
        </div>
      </div>
      <div className="about__img">
        <img src="./about.png" alt="Profile picture" />
      </div>
    </section>
  );
};

export default About;
