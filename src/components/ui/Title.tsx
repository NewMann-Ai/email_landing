import React from "react";

export default function Title({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <h1 className={`text-3xl md:text-6xl text-(--text) ${className || ""}`}>
            {children}
        </h1>
    );
}
