export function BrickDivider() {
  return (
    <div
      aria-hidden
      className="h-5 w-full"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 10px,
            rgba(100,55,20,0.28) 10px,
            rgba(100,55,20,0.28) 11px
          ),
          repeating-linear-gradient(
            90deg,
            rgba(180,110,60,0.22) 0px,
            rgba(180,110,60,0.22) 40px,
            rgba(140,80,40,0.16) 40px,
            rgba(140,80,40,0.16) 42px,
            rgba(180,110,60,0.22) 42px,
            rgba(180,110,60,0.22) 82px,
            rgba(120,65,30,0.18) 82px,
            rgba(120,65,30,0.18) 84px
          )
        `,
        opacity: 0.9,
      }}
    />
  );
}
