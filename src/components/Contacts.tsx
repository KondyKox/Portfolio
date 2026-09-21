import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CONTACT_LINKS } from "../constants/contacts";

const ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Email: Mail,
};

const Contact = () => {
  return (
    <section id="contact">
      <h3 className="section-header">Contact</h3>
      <p className="text-sm text-text-secondary mb-3">
        Open to internships and junior roles — feel free to reach out.
      </p>

      <div className="flex gap-3">
        {CONTACT_LINKS.map((link) => {
          const Icon = ICONS[link.name];
          const isExternal = !link.href.startsWith("mailto:");

          return (
            <a
              key={link.name}
              href={link.href}
              aria-label={link.name}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-border text-text-secondary hover:border-border-strong hover:text-text-accent transition-colors duration-150 active:scale-90"
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
