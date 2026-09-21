import { SKILLS } from "../constants/skills";

const GROUP_STYLES: Record<
  keyof typeof SKILLS,
  { label: string; classes: string }
> = {
  frontend: {
    label: "Frontend",
    classes: "bg-bg-tint-blue text-text-tint-blue",
  },
  backend: {
    label: "Backend",
    classes: "bg-bg-tint-green text-text-tint-green",
  },
  game_dev: {
    label: "Game dev",
    classes: "bg-bg-tint-violet text-text-tint-violet",
  },
};

const SkillsSection = () => {
  return (
    <section className="border-section" id="skills">
      <h3 className="font-bold mb-4 text-2xl">Skills</h3>

      <div className="space-y-3">
        {Object.entries(SKILLS).map(([group, skills]) => {
          const { label, classes } = GROUP_STYLES[group as keyof typeof SKILLS];
          return (
            <div key={group}>
              <p className="text-sm text-text-secondary mb-1.5">{label}</p>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-sm px-2.5 py-1 rounded-md ${classes}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
