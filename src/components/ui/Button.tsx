import React from "react";
import NextLink from "next/link";

export default function Button({
    children,
    type,
    icon,
    className,
    href,
}: {
    children: React.ReactNode;
    type: string;
    icon?: React.ReactNode;
    className?: string;
    href?: string;
}) {
    const isExternal = href?.startsWith("http");
    const Tag: React.ElementType = href
        ? isExternal
            ? "a"
            : NextLink
        : "button";
    const linkProps = href
        ? {
              href,
              ...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {}),
          }
        : {};

    return type === "primary" ? (
        <Tag
            {...linkProps}
            className={`inline-flex items-center justify-center min-w-40 py-3 px-4 rounded-xl bg-(--primary) text-sm text-(--button-text) hover:bg-(--primary-hover) cursor-pointer transition-colors duration-200 ${className || ""}`}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </Tag>
    ) : type === "secondary" ? (
        <Tag
            {...linkProps}
            className={`inline-flex items-center justify-center min-w-40 py-3 px-4 rounded-xl bg-(--button-bg) border border-(--button-stroke) text-sm text-(--subtext) hover:bg-(--bento-stroke) cursor-pointer transition-colors duration-200 ${className || ""}`}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </Tag>
    ) : null;
}
