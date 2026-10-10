interface StatItem {
  value: string;
  label: string;
}

interface TrustBarProps {
  stats?: StatItem[];
}

const defaultStats: StatItem[] = [
  { value: "24/7", label: "Calls answered, every time" },
  { value: "<2hr", label: "Average response time" },
  { value: "100%", label: "Done-for-you setup" },
  { value: "San Antonio", label: "Built & based locally" },
];

export default function TrustBar({ stats = defaultStats }: TrustBarProps) {
  return (
    <div
      className="border-y"
      style={{
        background: "#1A3550",
        borderColor: "rgba(201, 146, 42, 0.15)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap justify-center gap-x-16 gap-y-6">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center">
            <span
              className="font-serif text-2xl font-bold leading-none mb-1"
              style={{ color: "#E8B84B" }}
            >
              {stat.value}
            </span>
            <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
