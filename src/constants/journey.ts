type TimelineItem = {
  title: string;
  description: string;
  current?: boolean;
};

export const journey: TimelineItem[] = [
  { title: "First websites", description: "HTML, CSS, JavaScript, jQuery" },
  {
    title: "First own projects",
    description:
      "Alkopoly and graboga.pl — games built for fun, first game logic in JS/TS",
  },
  {
    title: "React and more serious products",
    description:
      "Wydatkonator and FlaszkoPedia — own database, auth, and backend",
  },
  {
    title: "Entering game dev",
    description: "Roblox-ts, a public starter template for other game creators",
  },
  {
    title: "Today",
    description: "Unity, Mirror, and working on a real project at Tosto Studio",
    current: true,
  },
];
