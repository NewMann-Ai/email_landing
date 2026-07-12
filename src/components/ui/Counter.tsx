"use client";

import { useEffect, useRef, useState } from "react";

const VALUE_PATTERN = /^([+-]?)(\d+(?:\.\d+)?)(.*)$/;

function easeOutQuad(t: number) {
    return 1 - (1 - t) * (1 - t);
}

export default function Counter({
    value,
    duration = 1400,
    className,
}: {
    value: string;
    duration?: number;
    className?: string;
}) {
    const ref = useRef<HTMLSpanElement>(null);

    const [display, setDisplay] = useState(() => {
        const match = value.match(VALUE_PATTERN);
        if (!match) return value;
        const [, prefix, , suffix] = match;
        return `${prefix}0${suffix}`;
    });

    useEffect(() => {
        const el = ref.current;
        const match = value.match(VALUE_PATTERN);
        if (!el || !match) return;

        const [, prefix, numberStr, suffix] = match;
        const target = parseFloat(numberStr);
        const decimals = numberStr.includes(".")
            ? numberStr.split(".")[1].length
            : 0;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                observer.unobserve(el);

                const start = performance.now();
                const tick = (now: number) => {
                    const progress = Math.min((now - start) / duration, 1);
                    const current = target * easeOutQuad(progress);
                    setDisplay(
                        `${prefix}${current.toFixed(decimals)}${suffix}`,
                    );
                    if (progress < 1) {
                        requestAnimationFrame(tick);
                    }
                };
                requestAnimationFrame(tick);
            },
            { threshold: 0.4 },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [value, duration]);

    return (
        <span ref={ref} className={className}>
            {display}
        </span>
    );
}
