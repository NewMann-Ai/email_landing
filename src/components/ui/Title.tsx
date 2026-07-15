import React from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export default function Title({
  children,
  className,
  as = 2,
}: {
  children: React.ReactNode;
  className?: string;
  as?: HeadingLevel;
}) {
  const Tag = `h${as}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  return (
    <Tag className={`text-3xl md:text-6xl text-(--text) ${className || ""}`}>
      {children}
    </Tag>
  );
}
