import { GraduationCap } from "lucide-react";

const EDUCATION = {
  primary: {
    school: "Zespół Szkół Politechnicznych, Technikum nr 3",
    location: "Głogów, Poland",
    field: "Technik programista",
    graduated: "2023",
    subjects: ["English", "Mathematics"],
    certifications: [
      { name: "INF.03", score: "88%" },
      { name: "INF.04", score: "86%" },
    ],
  },
  current: {
    school: "Akademia Nauk Stosowanych w Wałbrzychu",
    field: "Graphic Design",
    status: "In progress",
  },
};

const Education = () => {
  return (
    <section className="border-section" id="education">
      <h3 className="section-header">Education</h3>

      <div className="bg-surface-2 p-4 rounded-2xl flex flex-col gap-2 lg:max-w-2/3 border-border border-2">
        <div className="flex justify-between items-baseline gap-2">
          <p className="font-bold text-lg">{EDUCATION.primary.school}</p>
          <span className="text-xs text-text-muted whitespace-nowrap">
            {EDUCATION.primary.graduated}
          </span>
        </div>

        <p className="text-sm text-text-secondary">
          {EDUCATION.primary.field} · {EDUCATION.primary.location}
        </p>

        <p className="text-sm text-text-secondary">
          Extended subjects: {EDUCATION.primary.subjects.join(", ")}
        </p>

        <div className="flex gap-2 mt-2 flex-wrap">
          {EDUCATION.primary.certifications.map((cert) => (
            <span
              key={cert.name}
              className="text-xs px-2.5 py-1 rounded-md bg-surface-1 border border-border text-text-secondary"
            >
              {cert.name} · {cert.score}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-baseline gap-2 mt-3 px-1 lg:max-w-2/3">
        <p className="text-sm text-text-secondary flex items-center gap-1.5">
          <GraduationCap size={14} className="text-text-muted" />
          {EDUCATION.current.school} — {EDUCATION.current.field}
        </p>
        <span className="text-xs text-text-muted whitespace-nowrap">
          {EDUCATION.current.status}
        </span>
      </div>
    </section>
  );
};

export default Education;
