import {
  Beer,
  Wallet,
  LayoutTemplate,
  Dices,
  Gamepad2,
  PawPrint,
} from "lucide-react";

export const SELECTED_PROJECTS = [
  {
    name: "Flaszkopedia",
    stack: ["Next.js", "MongoDB", "NextAuth"],
    description:
      "Price-comparison app for vodka across Polish retailers, built for SEO with SSR.",
    link: "https://github.com/orgs/Flaszkopedia/repositories",
    icon: Beer,
  },
  {
    name: "Wydatkonator",
    stack: ["React", "TypeScript", "Supabase", "Tailwind"],
    description: "Personal finance and work-shift tracking app.",
    link: "https://wydatkonator.vercel.app/",
    icon: Wallet,
  },
  {
    name: "Roblox Horse Game",
    stack: ["roblox-ts", "Rojo"],
    description: "Ranch/collecting simulation game.",
    link: "https://github.com/KondyDev/roblox-horses-game",
    icon: PawPrint,
  },
  {
    name: "roblox-ts-template",
    stack: ["TypeScript", "Rojo", "Open Source"],
    description:
      "Starter template for Roblox games in TypeScript, used by other developers.",
    link: "https://github.com/KondyDev/roblox-ts-template",
    icon: LayoutTemplate,
  },
];

export const OTHER_PROJECTS = [
  {
    name: "Alkopoly",
    description: "Monopoly meets alcohol, built with TypeScript + React.",
    icon: Dices,
  },
  {
    name: "graboga.pl",
    description: "Card game, JS.",
    icon: Gamepad2,
  },
  {
    name: "Alkopoly",
    description: "Monopoly meets alcohol, built with TypeScript + React.",
    icon: Dices,
  },
  {
    name: "graboga.pl",
    description: "Card game, JS.",
    icon: Gamepad2,
  },
];
