import { Download, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const BUTTONS_LINKS = [
  {
    text: "Download CV",
    icon: Download,
    link: "/cv-konrad-ciesielski.pdf",
    download: true,
  },
  {
    text: "Contact",
    icon: Mail,
    link: "mailto:your@email.com",
    download: false,
  },
  {
    text: "GitHub",
    icon: FaGithub,
    link: "https://github.com/KondyKox",
    download: false,
  },
];

const Hero = () => {
  return (
    <header className="flex flex-col items-stretch gap-4 border-section">
      <div className="flex flex-col">
        <h1 className="font-bold text-5xl">Konrad Ciesielski</h1>
        <span className="italic text-xl">
          Junior developer - web & game dev
        </span>
      </div>

      <p className="md:max-w-1/2">
        I build products from idea to deployment - web apps and games.
        TypeScript/React on the frontend, Node/SQL on the backend, C# in Unity.
      </p>

      <div className="flex items-stretch gap-2 md:w-1/2">
        {BUTTONS_LINKS.map((btn) => {
          const Icon = btn.icon;
          return (
            <a
              key={btn.text}
              href={btn.link}
              {...(btn.download
                ? { download: true }
                : { target: "_blank", rel: "noopener noreferrer" })}
              className="px-4 py-2 flex-1 flex items-center justify-center gap-2 text-center border-border border-2 rounded-2xl cursor-pointer hover:border-border-strong transition-colors duration-150 active:scale-90"
            >
              <Icon size={16} />
              {btn.text}
            </a>
          );
        })}
      </div>
    </header>
  );
};

export default Hero;
