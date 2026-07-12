"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import DashboardLogo from "@/assets/images/logo_mono_light.png";
import GoogleIcon from "@/assets/icons/google-logo.png";
import DashboardIcon from "@/assets/icons/hugeicons/mini-dashboard/dashboard";
import TagIcon from "@/assets/icons/hugeicons/mini-dashboard/labels";
import DraftsIcon from "@/assets/icons/hugeicons/mini-dashboard/drafts";
import RulesIcon from "@/assets/icons/hugeicons/mini-dashboard/rules";
import AiIcon from "@/assets/icons/hugeicons/mini-dashboard/ai-assistant";
import SupportIcon from "@/assets/icons/hugeicons/mini-dashboard/support";
import MoonIcon from "@/assets/icons/hugeicons/mini-dashboard/dark";

function SettingsIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
        </svg>
    );
}

function SearchIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z"
            />
        </svg>
    );
}

function PlusIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
            />
        </svg>
    );
}

function TrashIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
        </svg>
    );
}

function DotsIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
        </svg>
    );
}

function SortFilterIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
            />
        </svg>
    );
}

function FunnelIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591L15.25 12.5v7.25a.75.75 0 01-.545.721l-4 1.25a.75.75 0 01-.955-.717v-8.504L4.659 7.409A2.25 2.25 0 014 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
            />
        </svg>
    );
}

function ChevronLeftIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
            />
        </svg>
    );
}

function ChevronDownIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
        </svg>
    );
}

function CloseIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    );
}

function InfoIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.021a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8.25h.008v.008H12V8.25z"
            />
        </svg>
    );
}

function CheckIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
            />
        </svg>
    );
}

function ChevronPaginationIcon({
    direction,
    className,
}: {
    direction: "left" | "right";
    className?: string;
}) {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            {direction === "left" ? (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                />
            ) : (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
            )}
        </svg>
    );
}

const LABELS = [
    {
        id: 1,
        name: "Solo lettura",
        isSystem: true,
        hasAutomation: false,
    },
    {
        id: 2,
        name: "Github",
        isSystem: false,
        hasAutomation: true,
    },
    {
        id: 3,
        name: "Da rispondere",
        isSystem: true,
        hasAutomation: false,
    },
    {
        id: 4,
        name: "Read only",
        isSystem: true,
        hasAutomation: false,
    },
];

const AUTOMATED_OPTS = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
    { value: "ai", label: "Let AI Choose" },
] as const;

export default function MiniDashboard() {
    const [hoveredRow, setHoveredRow] = useState<number | null>(null);
    const [automated, setAutomated] = useState<Record<number, string>>({
        2: "no",
    });
    const [showCreateLabel, setShowCreateLabel] = useState(false);
    const [modalAutomated, setModalAutomated] = useState<string>("ai");
    const [includeSignature, setIncludeSignature] = useState(true);

    return (
        <div className="mx-auto mt-20 mb-10 max-w-6xl px-4">
            <div
                className="relative rounded-2xl overflow-hidden border border-[#e0e0e0] shadow-[0_40px_60px_#2297991a]"
                style={{ height: 580 }}
            >
                <div className="flex h-full bg-[#f7f7f7] text-[#333]">
                    {/* ── Sidebar ── */}
                    <aside className="relative w-52 flex-shrink-0 bg-white border-r border-[#e8e8e8] flex flex-col py-5">
                        {/* Logo */}
                        <div className="flex justify-center mb-7">
                            <Image
                                src={DashboardLogo}
                                alt="Newmann logo"
                                width={30}
                                height={30}
                                className="object-contain"
                            />
                        </div>

                        {/* Menu section */}
                        <div className="px-3 mb-4">
                            <p className="text-[10px] text-[#aaaaaa] uppercase tracking-widest px-2 mb-1.5">
                                Menu
                            </p>
                            <nav className="space-y-0.5">
                                {[
                                    { icon: DashboardIcon, label: "Dashboard" },
                                    { icon: DraftsIcon, label: "Drafts" },
                                    { icon: RulesIcon, label: "Rules" },
                                    { icon: AiIcon, label: "Ai Assistant" },
                                ].map(({ icon: Icon, label }) => (
                                    <div
                                        key={label}
                                        className="flex items-center gap-2.5 px-2 py-2 rounded-lg text-[#999] select-none cursor-default"
                                    >
                                        <Icon className="w-4 h-4 flex-shrink-0" />
                                        <span className="text-sm">{label}</span>
                                    </div>
                                ))}

                                {/* Labels — active & only interactive nav item */}
                                <div className="flex items-center gap-2.5 px-2 py-2 rounded-lg bg-[#eef7f7] text-[#229799] select-none cursor-pointer">
                                    <TagIcon className="w-4 h-4 flex-shrink-0" />
                                    <span className="text-sm font-medium">
                                        Labels
                                    </span>
                                </div>
                            </nav>
                        </div>

                        {/* Other section */}
                        <div className="px-3">
                            <p className="text-[10px] text-[#aaaaaa] uppercase tracking-widest px-2 mb-1.5">
                                Other
                            </p>
                            <nav className="space-y-0.5">
                                {[
                                    { icon: SupportIcon, label: "Support" },
                                    { icon: SettingsIcon, label: "Settings" },
                                ].map(({ icon: Icon, label }) => (
                                    <div
                                        key={label}
                                        className="flex items-center gap-2.5 px-2 py-2 rounded-lg text-[#999] select-none cursor-default"
                                    >
                                        <Icon className="w-4 h-4 flex-shrink-0" />
                                        <span className="text-sm">{label}</span>
                                    </div>
                                ))}
                            </nav>
                        </div>

                        {/* Collapse toggle */}
                        <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-5 h-5 bg-white border border-[#e8e8e8] rounded-full flex items-center justify-center text-[#aaa] z-10 cursor-default shadow-sm">
                            <ChevronLeftIcon className="w-2.5 h-2.5" />
                        </button>
                    </aside>

                    {/* ── Main area ── */}
                    <div className="flex-1 flex flex-col min-w-0 bg-[#f7f7f7]">
                        {/* Top bar */}
                        <header className="flex items-center justify-between px-6 py-3 border-b border-[#e8e8e8] bg-white">
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#e6e6e6] text-sm text-[#666]">
                                <Image
                                    src={GoogleIcon}
                                    alt="Google"
                                    width={15}
                                    height={15}
                                />
                                <span className="text-xs">
                                    Connected with Google
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <MoonIcon className="w-4 h-4 text-[#888]" />
                                <div className="flex items-center gap-2 cursor-default select-none">
                                    <div className="w-8 h-8 rounded-full bg-[#e8e8e8] flex items-center justify-center text-md font-semibold text-[#666]">
                                        J
                                    </div>
                                    <div className="flex flex-col leading-tight">
                                        <span className="text-sm text-[#333]">
                                            John Smith
                                        </span>
                                        <span className="text-[10px] text-[#999]">
                                            johnsmith26@gmail.com
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </header>

                        {/* Page content */}
                        <main className="flex-1 p-6 overflow-hidden">
                            <h1 className="text-lg font-semibold text-[#333] mb-5">
                                Labels
                            </h1>

                            {/* Card */}
                            <div className="bg-white rounded-xl border border-[#e8e8e8]">
                                {/* Card header */}
                                <div className="flex items-center justify-between px-4 py-3 border-b border-[#eeeeee]">
                                    <span className="text-sm font-medium text-[#333]">
                                        Your labels
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center">
                                            <input
                                                readOnly
                                                placeholder="Search labels..."
                                                className="px-3 py-1.5 rounded-l-lg border border-r-0 border-[#e6e6e6] text-xs text-[#333] placeholder-[#bbb] outline-none bg-white w-36"
                                            />
                                            <button className="px-2.5 py-1.5 rounded-r-lg bg-[#229799] border border-[#229799] cursor-default">
                                                <SearchIcon className="w-3.5 h-3.5 text-white" />
                                            </button>
                                        </div>
                                        <button
                                            onClick={() =>
                                                setShowCreateLabel(true)
                                            }
                                            className="new-label-btn flex items-center gap-1 px-3 py-1.5 rounded-lg text-white text-xs font-medium cursor-pointer select-none transition-transform duration-200"
                                        >
                                            <PlusIcon className="w-3 h-3" />
                                            New label
                                        </button>
                                    </div>
                                </div>

                                {/* Table */}
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-[#eeeeee]">
                                            <th className="text-left py-2.5 px-4 font-normal">
                                                <span className="inline-flex items-center gap-1 text-xs text-[#999]">
                                                    Title
                                                    <SortFilterIcon className="w-3 h-3" />
                                                    <FunnelIcon className="w-3 h-3" />
                                                </span>
                                            </th>
                                            <th className="text-left py-2.5 px-4 font-normal">
                                                <span className="inline-flex items-center gap-1 text-xs text-[#999]">
                                                    Automated drafts
                                                    <SortFilterIcon className="w-3 h-3" />
                                                    <FunnelIcon className="w-3 h-3" />
                                                </span>
                                            </th>
                                            <th className="text-right py-2.5 px-4 text-xs text-[#999] font-normal">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {LABELS.map((label) => (
                                            <tr
                                                key={label.id}
                                                className="border-b border-[#f2f2f2] last:border-0 transition-colors duration-150"
                                                style={{
                                                    backgroundColor:
                                                        hoveredRow === label.id
                                                            ? "#f9f9f9"
                                                            : "transparent",
                                                }}
                                                onMouseEnter={() =>
                                                    setHoveredRow(label.id)
                                                }
                                                onMouseLeave={() =>
                                                    setHoveredRow(null)
                                                }
                                            >
                                                {/* Title */}
                                                <td className="py-3 px-4">
                                                    <span
                                                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border ${
                                                            label.isSystem
                                                                ? "bg-[#e8f5f5] text-[#229799] border-[#c5e5e5]"
                                                                : "bg-[#eef3f8] text-[#4a90c4] border-[#d0e4f0]"
                                                        }`}
                                                    >
                                                        {label.isSystem && (
                                                            <SettingsIcon className="w-2.5 h-2.5 flex-shrink-0" />
                                                        )}
                                                        {label.name}
                                                    </span>
                                                </td>

                                                {/* Automated drafts */}
                                                <td className="py-3 px-4">
                                                    {label.hasAutomation && (
                                                        <div className="inline-flex items-center gap-1 rounded-lg border border-[#e6e6e6] bg-[#fafafa]">
                                                            {AUTOMATED_OPTS.map(
                                                                (opt) => {
                                                                    const isActive =
                                                                        automated[
                                                                            label
                                                                                .id
                                                                        ] ===
                                                                        opt.value;
                                                                    return (
                                                                        <button
                                                                            key={
                                                                                opt.value
                                                                            }
                                                                            onClick={() =>
                                                                                setAutomated(
                                                                                    (
                                                                                        prev,
                                                                                    ) => ({
                                                                                        ...prev,
                                                                                        [label.id]:
                                                                                            opt.value,
                                                                                    }),
                                                                                )
                                                                            }
                                                                            className={`px-2.5 py-1.5 rounded-md text-xs font-medium select-none transition-colors cursor-pointer ${
                                                                                isActive
                                                                                    ? "bg-(--primary-10) text-(--primary)"
                                                                                    : "text-[#aaa] hover:text-[#666]"
                                                                            }`}
                                                                        >
                                                                            {
                                                                                opt.label
                                                                            }
                                                                        </button>
                                                                    );
                                                                },
                                                            )}
                                                        </div>
                                                    )}
                                                </td>

                                                {/* Actions */}
                                                <td className="py-3 px-4">
                                                    {!label.isSystem && (
                                                        <div className="flex items-center justify-end gap-2">
                                                            <TrashIcon className="w-4 h-4 text-[#e53e3e] cursor-default" />
                                                            <DotsIcon className="w-4 h-4 text-[#232323] cursor-default" />
                                                        </div>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                {/* Pagination */}
                                <div className="flex items-center justify-end gap-1.5 px-4 py-3">
                                    <button className="w-7 h-7 flex items-center justify-center rounded-md text-[#aaa] cursor-default">
                                        <ChevronPaginationIcon
                                            direction="left"
                                            className="w-3.5 h-3.5"
                                        />
                                    </button>
                                    <button className="w-7 h-7 flex items-center justify-center rounded-md border border-[#229799] text-[#333] text-xs cursor-default">
                                        1
                                    </button>
                                    <button className="w-7 h-7 flex items-center justify-center rounded-md text-[#aaa] cursor-default">
                                        <ChevronPaginationIcon
                                            direction="right"
                                            className="w-3.5 h-3.5"
                                        />
                                    </button>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>

            {/* Create label modal */}
            {showCreateLabel &&
                createPortal(
                    <div
                        onClick={() => setShowCreateLabel(false)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-[#eeeeee] flex-shrink-0">
                                <h2 className="text-lg font-semibold text-[#333]">
                                    Create label
                                </h2>
                                <button
                                    onClick={() => setShowCreateLabel(false)}
                                    className="text-[#999] hover:text-[#333] cursor-pointer transition-colors"
                                >
                                    <CloseIcon className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-[#333] mb-1.5">
                                        Label name{" "}
                                        <span className="text-[#e53e3e]">
                                            *
                                        </span>
                                    </label>
                                    <input
                                        placeholder="E.g., 'Support', 'Sales', etc."
                                        className="w-full px-3 py-2.5 rounded-lg border border-[#e0e0e0] text-sm text-[#333] placeholder-[#bbb] outline-none focus:border-(--primary)"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#333] mb-1.5">
                                        Label color
                                    </label>
                                    <div className="flex items-center justify-between px-3 py-2.5 rounded-lg border border-[#e0e0e0] bg-[#f7f7f7] text-sm text-[#999] cursor-default select-none">
                                        No color selected (optional)
                                        <ChevronDownIcon className="w-4 h-4 flex-shrink-0" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-[#333] mb-1.5">
                                            Label visibility
                                        </label>
                                        <div className="flex items-center justify-between gap-1 px-3 py-2.5 rounded-lg border border-[#e0e0e0] text-sm text-[#333] cursor-default select-none">
                                            <span className="truncate">
                                                Always show in label list
                                            </span>
                                            <ChevronDownIcon className="w-4 h-4 flex-shrink-0" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#333] mb-1.5">
                                            Message visibility
                                        </label>
                                        <div className="flex items-center justify-between gap-1 px-3 py-2.5 rounded-lg border border-[#e0e0e0] text-sm text-[#333] cursor-default select-none">
                                            <span className="truncate">
                                                Show messages for inbox
                                            </span>
                                            <ChevronDownIcon className="w-4 h-4 flex-shrink-0" />
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-[#f7f7f7] rounded-xl p-4">
                                    <p className="text-sm font-semibold text-[#333]">
                                        Automated drafts
                                    </p>
                                    <p className="text-sm text-[#888] mt-1">
                                        When enabled, automatic responses will
                                        be generated for emails with this label.
                                    </p>
                                    <div className="inline-flex items-center gap-1 rounded-lg border border-[#e6e6e6] bg-white mt-3">
                                        {AUTOMATED_OPTS.map((opt) => {
                                            const isActive =
                                                modalAutomated === opt.value;
                                            return (
                                                <button
                                                    key={opt.value}
                                                    onClick={() =>
                                                        setModalAutomated(
                                                            opt.value,
                                                        )
                                                    }
                                                    className={`px-2.5 py-1.5 rounded-md text-xs font-medium select-none transition-colors cursor-pointer ${
                                                        isActive
                                                            ? "bg-(--primary-10) text-(--primary)"
                                                            : "text-[#aaa] hover:text-[#666]"
                                                    }`}
                                                >
                                                    {opt.label}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-[#333] mb-1.5">
                                            Response Tone
                                        </label>
                                        <div className="flex items-center justify-between gap-1 px-3 py-2.5 rounded-lg border border-[#e0e0e0] text-sm text-[#333] cursor-default select-none">
                                            <span className="truncate">
                                                Formal - Molto formale,
                                                autorevole
                                            </span>
                                            <ChevronDownIcon className="w-4 h-4 flex-shrink-0" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#333] mb-1.5">
                                            Response Style
                                        </label>
                                        <div className="flex items-center justify-between gap-1 px-3 py-2.5 rounded-lg border border-[#e0e0e0] text-sm text-[#333] cursor-default select-none">
                                            <span className="truncate">
                                                Concise - Breve e al punto
                                            </span>
                                            <ChevronDownIcon className="w-4 h-4 flex-shrink-0" />
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={() =>
                                        setIncludeSignature((v) => !v)
                                    }
                                    className="flex items-center gap-2.5 cursor-pointer select-none w-fit"
                                >
                                    <div
                                        className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 ${
                                            includeSignature
                                                ? "bg-(--primary)"
                                                : "border border-[#ccc] bg-white"
                                        }`}
                                    >
                                        {includeSignature && (
                                            <CheckIcon className="w-3 h-3 text-white" />
                                        )}
                                    </div>
                                    <span className="text-sm text-[#333]">
                                        Include signature in responses
                                    </span>
                                </button>

                                <div>
                                    <label className="flex items-center gap-1.5 text-sm font-medium text-[#333] mb-1.5">
                                        Exclude Senders
                                        <InfoIcon className="w-3.5 h-3.5 text-[#999]" />
                                    </label>
                                    <div className="relative">
                                        <input
                                            placeholder="name@example.com"
                                            className="w-full px-3 py-2.5 pr-9 rounded-lg border border-[#e0e0e0] text-sm text-[#333] placeholder-[#bbb] outline-none focus:border-(--primary)"
                                        />
                                        <CheckIcon className="w-4 h-4 text-(--primary) absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#333] mb-1.5">
                                        Custom Instructions
                                    </label>
                                    <textarea
                                        rows={3}
                                        placeholder="E.g., Always mention our company name, never use emojis, keep responses formal..."
                                        className="w-full px-3 py-2.5 rounded-lg border border-[#e0e0e0] text-sm text-[#333] placeholder-[#bbb] outline-none resize-none focus:border-(--primary)"
                                    />
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="flex items-center gap-3 px-6 py-4 border-t border-[#eeeeee] flex-shrink-0">
                                <button
                                    onClick={() => setShowCreateLabel(false)}
                                    className="flex-1 py-2.5 rounded-lg border border-[#e0e0e0] text-sm font-medium text-[#333] cursor-pointer select-none hover:bg-[#f7f7f7] transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => setShowCreateLabel(false)}
                                    className="flex-1 py-2.5 rounded-lg bg-[#229799] text-white text-sm font-medium cursor-pointer select-none hover:bg-[#1d8385] transition-colors"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>,
                    document.body,
                )}
        </div>
    );
}
