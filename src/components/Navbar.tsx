import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-surface-0/80 backdrop-blur border-b border-border">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        <a href="#" className="font-bold text-lg text-text-accent">
          KC
        </a>

        <div className="hidden md:flex items-center gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-text-accent transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-border"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="flex flex-col gap-3 px-4 pb-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-text-secondary hover:text-text-accent transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
