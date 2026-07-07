import Lottie from "lottie-react";

// Free Lottie JSON from LottieFiles (AI/Tech themed)
// Using a simple inline animation data so no external fetch needed
const aiAnimationData = {
  v: "5.5.7",
  fr: 30,
  ip: 0,
  op: 90,
  w: 200,
  h: 200,
  nm: "AI Pulse",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Circle 1",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 0, s: [80], e: [20] }, { t: 45, s: [20], e: [80] }, { t: 90, s: [80] }] },
        r: { a: 1, k: [{ t: 0, s: [0] }, { t: 90, s: [360] }] },
        p: { a: 0, k: [100, 100, 0] },
        s: { a: 1, k: [{ t: 0, s: [100, 100] }, { t: 45, s: [130, 130] }, { t: 90, s: [100, 100] }] },
      },
      shapes: [
        {
          ty: "el",
          s: { a: 0, k: [80, 80] },
          p: { a: 0, k: [0, 0] },
        },
        {
          ty: "st",
          c: { a: 0, k: [0.388, 0.4, 0.945, 1] },
          o: { a: 0, k: 100 },
          w: { a: 0, k: 3 },
        },
        { ty: "tr", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] } },
      ],
      ip: 0,
      op: 90,
    },
  ],
};

export default function LottieAnimation({ className = "" }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Lottie
        animationData={aiAnimationData}
        loop={true}
        autoplay={true}
        style={{ width: 120, height: 120 }}
        aria-label="AI animation"
      />
    </div>
  );
}