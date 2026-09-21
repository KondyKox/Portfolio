import { SquareArrowOutUpRight } from "lucide-react";
import { OTHER_PROJECTS, SELECTED_PROJECTS } from "../constants/projects";

const ProjectsSection = () => {
  return (
    <>
      <section className="border-section" id="projects">
        <h3 className="section-header">Selected projects</h3>

        <div className="flex flex-col gap-2 lg:max-w-2/3">
          {SELECTED_PROJECTS.map((project) => {
            const Icon = project.icon;

            return (
              <div className="bg-surface-2 p-4 rounded-2xl flex flex-col gap-2">
                <div key={project.name}>
                  <h4 className="flex items-center gap-2 font-bold text-lg">
                    <Icon size={16} className="text-text-accent" />
                    {project.name}
                  </h4>
                  <span className="text-xs">{project.stack.join(" · ")}</span>
                </div>
                <p className="text-sm">{project.description}</p>
                <a
                  href={project.link}
                  aria-label={project.name}
                  className="flex items-center gap-2 text-xs text-text-accent"
                >
                  See project here <SquareArrowOutUpRight size={12} />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-section">
        <h3 className="section-header">Other projects</h3>

        <div className="grid grid-cols-2 gap-3 lg:max-w-2/3">
          {OTHER_PROJECTS.map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.name}
                className="bg-surface-2 p-4 rounded-2xl flex flex-col gap-2"
              >
                <h4 className="flex items-center gap-2 font-bold text-lg">
                  <Icon size={16} className="text-text-accent" />
                  {project.name}
                </h4>
                <p className="text-sm">{project.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
