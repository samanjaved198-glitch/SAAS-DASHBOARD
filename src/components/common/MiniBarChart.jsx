import { motion } from "framer-motion";

/**
 * Lightweight animated bar chart built with plain SVG + framer-motion —
 * no charting library dependency needed for a handful of data points.
 *
 * data: [{ label: string, value: number }]
 */
export default function MiniBarChart({ data, color = "var(--color-primary)", height = 180, inView = true }) {
  const max = Math.max(...data.map((d) => d.value));
  const barWidth = 100 / data.length;

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 100 ${height}`}
        preserveAspectRatio="none"
        className="w-full"
        style={{ height }}
        role="img"
        aria-label={`Bar chart showing ${data.map((d) => `${d.label}: ${d.value}`).join(", ")}`}
      >
        {data.map((d, i) => {
          const barHeight = (d.value / max) * (height - 24);
          const x = i * barWidth + barWidth * 0.2;
          const w = barWidth * 0.6;
          return (
            <motion.rect
              key={d.label}
              x={x}
              width={w}
              rx="1.5"
              fill={color}
              initial={{ height: 0, y: height - 20 }}
              animate={
                inView
                  ? { height: barHeight, y: height - 20 - barHeight }
                  : { height: 0, y: height - 20 }
              }
              transition={{ duration: 0.7, delay: i * 0.08, ease: "easeOut" }}
              opacity={0.85}
            />
          );
        })}
      </svg>
      <div className="flex mt-2">
        {data.map((d) => (
          <div key={d.label} style={{ width: `${barWidth}%` }} className="text-center">
            <span className="text-[10px] text-text-secondary">{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}