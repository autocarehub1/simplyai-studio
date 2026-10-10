interface VoiceWaveformProps {
  color?: string;
  height?: number;
  className?: string;
}

// Decorative animated audio waveform — the one visual motif this site
// keeps reusing to say "voice AI" without another phone/robot emoji.
// Heights are a fixed hand-picked pattern (not Math.random) so server and
// client render identically — no hydration mismatch.
const BAR_HEIGHTS = [0.3, 0.55, 0.8, 0.45, 1, 0.6, 0.35, 0.75, 0.5, 0.9, 0.4, 0.65, 0.3, 0.85, 0.5];

export default function VoiceWaveform({ color = "#E8B84B", height = 40, className = "" }: VoiceWaveformProps) {
  return (
    <div
      className={`flex items-end justify-center gap-[3px] ${className}`}
      style={{ height }}
      aria-hidden="true"
    >
      {BAR_HEIGHTS.map((h, i) => (
        <span
          key={i}
          className="wave-bar"
          style={{
            width: 3,
            height: `${h * 100}%`,
            borderRadius: 2,
            background: color,
            opacity: 0.85,
            animationDelay: `${i * 0.09}s`,
            animationDuration: `${0.9 + h * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
}
