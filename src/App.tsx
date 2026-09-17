import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <main className="bg-surface-0 text-text-primary flex flex-col gap-4 min-h-screen p-4 md:p-6">
      <SkillsSection />
      <ExperienceSection />
    </main>
  );
}

export default App;
