import Image from "next/image";
import OctopusLogo from "../../../public/favicon_black.png";
import FaviconIcon from "../../../public/favicon.png";
import DashboardIcon from "@/assets/icons/hugeicons/mini-dashboard/dashboard";
import TagIcon from "@/assets/icons/hugeicons/mini-dashboard/labels";
import DraftsIcon from "@/assets/icons/hugeicons/mini-dashboard/drafts";
import RulesIcon from "@/assets/icons/hugeicons/mini-dashboard/rules";
import ShieldCheckIcon from "@/assets/icons/hugeicons/shield-check";
import GridIcon from "@/assets/icons/hugeicons/grid";
import SparklesIcon from "@/assets/icons/hugeicons/sparkles";
import AiAssistantIcon from "@/assets/icons/hugeicons/mini-dashboard/ai-assistant";

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

const PREVIEW_LABELS = [
    { name: "Solo lettura", isSystem: true },
    { name: "Github", isSystem: false },
    { name: "Da rispondere", isSystem: true },
];

export function InboxPreview() {
    return (
        <div className="relative w-full aspect-[490/200] rounded-xl overflow-hidden border border-[#e8e8e8] bg-white flex">
            {/* Sidebar */}
            <div className="w-[42%] shrink-0 border-r border-[#eee] py-4 px-2.5 flex flex-col gap-1">
                <p className="text-[8px] text-[#aaa] uppercase tracking-widest px-2 mb-1">
                    Menu
                </p>

                <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg  text-[#999]">
                    <DashboardIcon className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-[10px] font-medium">Dashboard</span>
                </div>

                <div className="relative z-10 -translate-y-0.5 flex items-center gap-2 px-2 py-1.5 rounded-md bg-(--primary-10) text-(--primary) shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
                    <TagIcon className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-[10px]">Labels</span>
                </div>

                <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-[#999]">
                    <DraftsIcon className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-[10px]">Drafts</span>
                </div>

                <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-[#999]">
                    <RulesIcon className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-[10px]">Rules</span>
                </div>

                <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-[#999]">
                    <AiAssistantIcon className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-[10px]">AI Assistant</span>
                </div>
            </div>

            {/* Content peek */}
            <div className="flex-1 min-w-0 bg-white p-3.5 overflow-hidden">
                <p className="text-[11px] font-medium text-[#333] mb-2.5">
                    Your labels
                </p>

                <div className="flex items-center gap-1 text-[8px] text-[#999] pb-2 border-b border-[#eeeeee]">
                    Title
                    <SortFilterIcon className="w-2.5 h-2.5" />
                    <FunnelIcon className="w-2.5 h-2.5" />
                </div>

                <div className="flex flex-col divide-y divide-[#f2f2f2]">
                    {PREVIEW_LABELS.map((label) => (
                        <div key={label.name} className="py-2.5">
                            <span
                                className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-[9px] font-medium border ${
                                    label.isSystem
                                        ? "bg-[#e8f5f5] text-(--primary) border-[#c5e5e5]"
                                        : "bg-[#eef3f8] text-[#4a90c4] border-[#d0e4f0]"
                                }`}
                            >
                                {label.isSystem && (
                                    <Image
                                        src={FaviconIcon}
                                        alt=""
                                        width={8}
                                        height={8}
                                        className="shrink-0"
                                    />
                                )}
                                {label.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function AziendaPreview() {
    return (
        <div className="relative w-full aspect-[490/200] rounded-xl overflow-hidden border border-[#e8e8e8] bg-[#f9f9f9]">
            <svg
                viewBox="0 0 490 200"
                className="absolute inset-0 w-full h-full"
                fill="none"
            >
                <circle
                    cx="245"
                    cy="100"
                    r="75"
                    stroke="#229799"
                    strokeOpacity="0.45"
                    strokeWidth="1.5"
                    strokeDasharray="4 5"
                />
                <circle
                    cx="245"
                    cy="100"
                    r="45"
                    stroke="#229799"
                    strokeOpacity="0.45"
                    strokeWidth="1.5"
                    strokeDasharray="4 5"
                />
            </svg>

            {/* Shield badge — top */}
            <div
                className="absolute w-6 h-6 md:w-8 md:h-8 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-[#e3f0f0] flex items-center justify-center"
                style={{ left: "50%", top: "12.5%" }}
            >
                <ShieldCheckIcon className="w-4 h-4 text-(--primary)" />
            </div>

            {/* Grid badge — right */}
            <div
                className="absolute w-6 h-6 md:w-8 md:h-8 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-[#e3f0f0] flex items-center justify-center"
                style={{ left: "65.3%", top: "46%" }}
            >
                <GridIcon className="w-4 h-4 text-(--primary)" />
            </div>

            {/* Sparkle badge — bottom left */}
            <div
                className="absolute w-6 h-6 md:w-8 md:h-8 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-[#e3f0f0] flex items-center justify-center"
                style={{ left: "39.2%", top: "72%" }}
            >
                <SparklesIcon className="w-4 h-4 text-(--primary)" />
            </div>

            {/* Center logo */}
            <div
                className="absolute w-11 h-11 -translate-x-1/2 -translate-y-1/2"
                style={{ left: "50%", top: "50%" }}
            >
                <Image
                    src={OctopusLogo}
                    alt="Newmann"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    );
}
