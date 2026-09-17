const ExperienceSection = () => {
  return (
    <section className="border-section">
      <h3 className="section-header">Experience</h3>
      <div className="border-border rounded-2xl border-2 p-4">
        <div className="flex justify-between">
          <h4 className="text-lg font-bold">Software Developer</h4>
          <span className="text-sm text-text-muted">present</span>
        </div>
        <span className="text-text-secondary">
          Tosto Studio - multiplayer RTS in Unity
        </span>
        <ul className="mt-2 ml-8 text-text-secondary">
          <li>
            Designed the game's save system (JSON DTOs) supporting five
            independent save slots
          </li>
          <li>
            Built the slot-selection UI and an info panel synced with live game
            state
          </li>
          <li>
            Working within the team on Mirror-based networking code in a
            production environment
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ExperienceSection;
