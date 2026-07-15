"use client";

import { useState } from "react";
import DropdownArrow from "@/assets/icons/hugeicons/dropdown-arrow";

export default function FaqItem({
    question,
    answer,
}: {
    question: string;
    answer: string;
}) {
    const [open, setOpen] = useState(false);

    return (
        <details
            className="bg-(--bento-bg) rounded-2xl border border-(--bento-stroke) overflow-hidden group"
            open={open}
        >
            <summary
                onClick={(e) => {
                    e.preventDefault();
                    setOpen((v) => !v);
                }}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer list-none"
            >
                <h3 className="text-(--text) font-semibold text-base m-0">
                    {question}
                </h3>
                <DropdownArrow
                    width={16}
                    height={16}
                    className={`flex-shrink-0 text-(--subtext) transition-transform duration-200 ${
                        open ? "rotate-0" : "rotate-180"
                    }`}
                />
            </summary>

            {open && (
                <p className="text-(--subtext) px-6 pb-5">{answer}</p>
            )}
        </details>
    );
}
