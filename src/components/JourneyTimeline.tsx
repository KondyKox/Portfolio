import { journey } from "../constants/journey";

const JourneyTimeline = () => {
  return (
    <section>
      <h3 className="section-header">Journey Timeline</h3>

      <div className="relative">
        <div className="absolute left-2 top-2 bottom-2 w-px bg-border-strong" />

        <div className="space-y-5">
          {journey.map((item) => (
            <div key={item.title} className="relative pl-8">
              <span className="absolute left-0 top-0.5 w-4 h-4 flex items-center justify-center">
                <span
                  className={
                    item.current
                      ? "w-3 h-3 rounded-full bg-fill-accent ring-2 ring-fill-accent/30"
                      : "w-2.5 h-2.5 rounded-full bg-surface-1 border-2 border-gray-600"
                  }
                />
              </span>

              <p
                className={`text-sm font-medium ${item.current ? "text-text-accent" : "text-text-primary"}`}
              >
                {item.title}
              </p>
              <p className="text-sm text-text-secondary mt-0.5">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
