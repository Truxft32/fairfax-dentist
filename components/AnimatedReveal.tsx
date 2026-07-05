import type { CSSProperties, ReactNode } from "react";

type AnimatedRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function AnimatedReveal({
  children,
  className = "",
  delay = 0,
  y = 32,
}: AnimatedRevealProps) {
  const style = {
    "--reveal-y": `${y}px`,
    transitionDelay: `${delay}ms`,
  } as CSSProperties;

  return (
    <div style={style} className={`${className} reveal-motion is-visible`}>
      {children}
    </div>
  );
}
