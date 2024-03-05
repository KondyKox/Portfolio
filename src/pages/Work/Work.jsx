import { useState } from "react";
import Title from "../../components/Title/Title";
import projectsData from "../../data/projects.json";
import "./Work.css";
import Button from "../../components/Button/Button";

const Work = ({ t }) => {
  const projects = projectsData;
  const [mainProject, setMainProject] = useState(projects[0]);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle next image
  const handleNextImage = () => {
    setCurrentImgIndex(
      (prevIndex) => (prevIndex + 1) % mainProject.images.length
    );
  };

  // Handle previous image
  const handlePrevImage = () => {
    setCurrentImgIndex((prevIndex) =>
      prevIndex === 0 ? mainProject.images.length - 1 : prevIndex - 1
    );
  };

  // Change main project
  const handleMainProjectChange = (index) => {
    setMainProject(projects[index]);
    setActiveIndex(index);
    setCurrentImgIndex(0);
  };

  return (
    <section id="work" className="work container">
      <Title text={t("work.title")} parentClass="work" />
      <div className="work__projects-container">
        <div className="main__project">
          <div className="main__project-content">
            <Title
              text={mainProject.name}
              parentClass="work"
              isSubtitle={true}
            />
            <p className="main__project__description">
              {t(`work.projects.${mainProject.name}`)}
            </p>
            <ul className="main__project__ul">
              {mainProject.techstack.map((tech, index) => (
                <li key={index} className="main__project__list">
                  {tech}
                </li>
              ))}
            </ul>
            <ul className="main__project__links">
              {Object.entries(mainProject.links).map(([key, link], index) => (
                <li key={index} className="main__project__links-list">
                  <a href={link} target="_blank" className="main__project__link">
                    {key === "github" ? (
                      <img src="./links/github.png" alt="GitHub" />
                    ) : (
                      <img src="./links/web.png" alt="Website" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="main__project-img">
            <img
              src={mainProject.images[currentImgIndex]}
              alt={mainProject.name}
              key={currentImgIndex}
              loading="lazy"
            />
            <Button
              text={"▶️"}
              className={"project__btn next-btn"}
              onClick={handleNextImage}
            />
            <Button
              text={"◀️"}
              className={"project__btn prev-btn"}
              onClick={handlePrevImage}
            />
          </div>
        </div>
        <div className="work__projects-list">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project__logo ${
                activeIndex === index ? "active" : ""
              } ${project.name === "Alkopoly" ? "alkopoly" : ""}`}
            >
              <img
                src={project.logo}
                alt={project.name}
                onClick={() => handleMainProjectChange(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
