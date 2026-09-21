import Contact from "./components/Contacts";
import ExperienceSection from "./components/ExperienceSection";
import Hero from "./components/Hero";
import JourneyTimeline from "./components/JourneyTimeline";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <main className="bg-surface-0 text-text-primary flex flex-col gap-4 min-h-screen p-4 md:p-6 pb-6 md:pb-18">
      <Hero />
      <SkillsSection />
      <ExperienceSection />
      <JourneyTimeline />
      <ProjectsSection />
      <Contact />
    </main>
  );
}

export default App;
