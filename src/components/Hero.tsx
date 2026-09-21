import { Download, Mail } from "lucide-react";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
  </svg>
);

const BUTTONS_LINKS = [
  {
    text: "Download CV",
    icon: Download,
    link: "/cv-konrad-ciesielski.pdf", // TODO: REPLACE
    download: true,
  },
  {
    text: "Contact",
    icon: Mail,
    link: "mailto:your@email.com", // TODO: REPLACE
    download: false,
  },
  {
    text: "GitHub",
    icon: GithubIcon,
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
