import React from "react";

export default function Button({
    children,
    type,
    icon,
    className,
}: {
    children: React.ReactNode;
    type: string;
    icon?: React.ReactNode;
    className?: string;
}) {
    return type === "primary" ? (
        <button
            className={`flex items-center justify-center min-w-40 py-3 px-4 rounded-xl bg-(--primary) text-sm text-(--button-text) hover:bg-(--primary-hover) cursor-pointer transition-colors duration-200 ${className || ""}`}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </button>
    ) : type === "secondary" ? (
        <button
            className={`flex items-center justify-center min-w-40 py-3 px-4 rounded-xl bg-(--button-bg) border border-(--button-stroke) text-sm text-(--subtext) hover:bg-(--bento-stroke) cursor-pointer transition-colors duration-200 ${className || ""}`}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </button>
    ) : null;
}
