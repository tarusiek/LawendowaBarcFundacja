type VisualPanelProps = {
  tone?: "honey" | "lavender" | "leaf" | "earth";
  label: string;
};

const toneGradients = {
  honey:
    "radial-gradient(ellipse at 28% 22%, rgba(255,220,80,0.65) 0%, transparent 52%), linear-gradient(150deg, #d4880a 0%, #8a5010 40%, #2e3a10 100%)",
  lavender:
    "radial-gradient(ellipse at 25% 25%, rgba(220,200,255,0.55) 0%, transparent 52%), linear-gradient(150deg, #b89fce 0%, #7b5fa3 40%, #2c3820 100%)",
  leaf:
    "radial-gradient(ellipse at 28% 22%, rgba(190,240,150,0.5) 0%, transparent 52%), linear-gradient(150deg, #9dbf7a 0%, #4a7830 40%, #1e2d14 100%)",
  earth:
    "radial-gradient(ellipse at 30% 25%, rgba(230,200,150,0.5) 0%, transparent 55%), linear-gradient(150deg, #c0a070 0%, #8c6840 40%, #2a3228 100%)",
};

function HoneycombOverlay() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
      style={{ opacity: 0.11 }}
    >
      <defs>
        <pattern
          id="hc-panel"
          x="0"
          y="0"
          width="44"
          height="50.8"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M22 2.5L41.5 13.6V35.8L22 46.9L2.5 35.8V13.6Z"
            fill="none"
            stroke="white"
            strokeWidth="0.9"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hc-panel)" />
    </svg>
  );
}

function ForestSilhouette() {
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 bottom-0 w-full"
      aria-hidden
      viewBox="0 0 800 120"
      preserveAspectRatio="none"
      style={{ height: "110px", opacity: 0.55 }}
    >
      <path
        d="M0,120 L0,72 L18,52 L36,70 L52,38 L70,66 L85,28 L102,62 L118,44 L135,68 L155,50 L172,70 L190,32 L208,64 L228,50 L248,70 L265,40 L285,68 L300,54 L320,72 L340,46 L360,68 L378,52 L398,74 L418,48 L438,70 L455,40 L475,66 L492,52 L512,76 L530,50 L550,70 L568,44 L588,68 L605,55 L625,74 L642,50 L662,68 L680,54 L698,74 L718,50 L738,68 L758,56 L778,72 L800,60 L800,120Z"
        fill="#1a2a0e"
      />
      <path
        d="M0,120 L0,90 L40,80 L80,92 L120,82 L160,94 L200,84 L240,94 L280,86 L320,96 L360,86 L400,96 L440,86 L480,96 L520,84 L560,94 L600,86 L640,96 L680,88 L720,96 L760,88 L800,94 L800,120Z"
        fill="#0e1c08"
        style={{ opacity: 0.75 }}
      />
    </svg>
  );
}

function LavenderDecor() {
  return (
    <svg
      className="pointer-events-none absolute bottom-0 right-6 h-64 w-24"
      aria-hidden
      viewBox="0 0 80 200"
      preserveAspectRatio="xMaxYMax meet"
      style={{ opacity: 0.24 }}
    >
      <line x1="40" y1="200" x2="40" y2="65" stroke="white" strokeWidth="1.5" />
      <ellipse cx="40" cy="65" rx="5" ry="10" fill="white" />
      <ellipse cx="32" cy="77" rx="4" ry="8" fill="white" transform="rotate(-22 32 77)" />
      <ellipse cx="48" cy="77" rx="4" ry="8" fill="white" transform="rotate(22 48 77)" />
      <ellipse cx="35" cy="90" rx="3.5" ry="7" fill="white" transform="rotate(-22 35 90)" />
      <ellipse cx="45" cy="90" rx="3.5" ry="7" fill="white" transform="rotate(22 45 90)" />
      <ellipse cx="40" cy="103" rx="3" ry="6" fill="white" />
      <line x1="16" y1="200" x2="18" y2="88" stroke="white" strokeWidth="1.2" />
      <ellipse cx="18" cy="88" rx="4" ry="7.5" fill="white" />
      <ellipse cx="11" cy="98" rx="3" ry="6" fill="white" transform="rotate(-22 11 98)" />
      <ellipse cx="25" cy="98" rx="3" ry="6" fill="white" transform="rotate(22 25 98)" />
      <line x1="64" y1="200" x2="62" y2="95" stroke="white" strokeWidth="1.2" />
      <ellipse cx="62" cy="95" rx="4" ry="7.5" fill="white" />
      <ellipse cx="55" cy="105" rx="3" ry="6" fill="white" transform="rotate(-22 55 105)" />
      <ellipse cx="69" cy="105" rx="3" ry="6" fill="white" transform="rotate(22 69 105)" />
    </svg>
  );
}

const toneDecors: Record<string, React.ReactNode> = {
  honey: null,
  lavender: <LavenderDecor />,
  leaf: null,
  earth: null,
};

export function VisualPanel({ tone = "leaf", label }: VisualPanelProps) {
  return (
    <div className="relative min-h-[340px] overflow-hidden rounded-2xl shadow-[0_32px_80px_rgba(20,10,0,0.22)]">
      <div
        className="absolute inset-0"
        style={{ background: toneGradients[tone] }}
      />
      <HoneycombOverlay />
      {toneDecors[tone]}
      <ForestSilhouette />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[rgba(10,6,0,0.72)] to-transparent" />
      <p className="absolute bottom-5 left-6 right-6 max-w-sm font-display text-sm font-medium italic leading-6 text-[rgba(255,242,200,0.92)] drop-shadow-sm">
        {label}
      </p>
    </div>
  );
}
