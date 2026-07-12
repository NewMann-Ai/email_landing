"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/favicon_black.png";
import Button from "../ui/Button";
import LangSwitcher from "../ui/LangSwitcher";
import GoogleIcon from "../../assets/icons/google-logo.png";
import Gmail from "../../assets/icons/hugeicons/gmail";
import Users from "../../assets/icons/hugeicons/users";
import DropdownArrow from "../../assets/icons/hugeicons/dropdown-arrow";
import LinkArrow from "../../assets/icons/hugeicons/link-arrow";

function MenuIcon({ className }: { className?: string }) {
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
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
            strokeWidth={1.5}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    );
}

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);

    return (
        <nav
            className={`fixed top-0 inset-x-0 md:left-[10vw] md:w-[80vw] z-50 ${
                open ? "h-screen bg-(--light-bg) flex flex-col" : ""
            }`}
        >
            <div className="flex items-center justify-between px-4 py-4 md:p-6">
                <div className="flex items-center gap-10">
                    <Link href="/">
                        <Image src={Logo} alt="Logo" width={40} height={40} />
                    </Link>
                    <div className="hidden md:flex items-center gap-4 text-(--text) text-sm">
                        {/* Prodotti with dropdown */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-(--text) hover:text-(--primary) group-hover:text-(--primary) transition-colors duration-200 cursor-pointer">
                                Prodotti
                                <DropdownArrow
                                    width={12}
                                    height={12}
                                    className="rotate-180 group-hover:rotate-0 transition-transform duration-200"
                                />
                            </button>
                            {/* Invisible bridge to prevent gap-triggered close */}
                            <div className="absolute left-0 top-full h-3 w-full" />
                            <div className="absolute left-0 top-[calc(100%+0.75rem)] hidden group-hover:flex bg-white rounded-3xl shadow-lg p-6 gap-10 min-w-max">
                                {/* AI Email Assistant column */}
                                <div className="flex flex-col gap-3 min-w-90">
                                    <div className="flex items-center gap-4 text-(--text) font-medium text-2xl">
                                        <span className="text-(--primary) bg-(--primary-10) p-2 rounded-lg">
                                            <Gmail width={20} height={20} />
                                        </span>
                                        AI Email Assistant
                                    </div>
                                    <hr className="border-(--bento-stroke)" />
                                    <div className="flex flex-col gap-2 text-md text-(--subtext)">
                                        <Link
                                            href="/newmann-mail"
                                            className="hover:text-(--primary) transition-colors duration-200 flex items-center gap-1"
                                        >
                                            Newmann Mail
                                            <LinkArrow
                                                width={16}
                                                height={16}
                                                className="rotate-180 group-hover:rotate-0 transition-transform duration-200"
                                            />
                                        </Link>
                                        <div className="flex flex-col gap-1 pl-3 border-l border-(--primary)">
                                            <Link
                                                href="/newmann-mail#inbox-organizer"
                                                className="hover:text-(--primary) transition-colors duration-200 flex items-center gap-1"
                                            >
                                                Inbox Organizer
                                                <LinkArrow
                                                    width={16}
                                                    height={16}
                                                    className="rotate-180 group-hover:rotate-0 transition-transform duration-200"
                                                />
                                            </Link>
                                            <Link
                                                href="/newmann-mail#email-draft-writer"
                                                className="hover:text-(--primary) transition-colors duration-200 flex items-center gap-1"
                                            >
                                                Email Draft Writer
                                                <LinkArrow
                                                    width={16}
                                                    height={16}
                                                    className="rotate-180 group-hover:rotate-0 transition-transform duration-200"
                                                />
                                            </Link>
                                        </div>
                                        <Link
                                            href="/team"
                                            className="hover:text-(--primary) transition-colors duration-200 flex items-center gap-1"
                                        >
                                            Team
                                            <LinkArrow
                                                width={16}
                                                height={16}
                                                className="rotate-180 group-hover:rotate-0 transition-transform duration-200"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                {/* Digital Twin column */}
                                <div className="flex flex-col gap-3 min-w-90">
                                    <div className="flex items-center gap-4 text-(--text) font-medium text-2xl">
                                        <span className="text-(--primary) bg-(--primary-10) p-2 rounded-lg">
                                            <Users width={20} height={20} />
                                        </span>
                                        Digital Twin
                                    </div>
                                    <hr className="border-(--bento-stroke)" />
                                    <div className="flex items-center justify-center py-2 mt-4">
                                        <span className="text-(--primary) bg-(--primary-10) rounded-full px-3 py-1 text-xs">
                                            Coming soon
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link
                            className="hover:text-(--primary) transition-colors duration-200 cursor-pointer"
                            href="/security"
                        >
                            Sicurezza
                        </Link>
                        <Link
                            className="hover:text-(--primary) transition-colors duration-200 cursor-pointer"
                            href="/contacts"
                        >
                            Contattaci
                        </Link>
                        <Link
                            className="hover:text-(--primary) transition-colors duration-200 cursor-pointer"
                            href="/faq"
                        >
                            FAQ
                        </Link>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <LangSwitcher />
                    <p className="text-(--subtext) font-thin text-sm">|</p>
                    <Button
                        type="secondary"
                        icon={
                            <Image
                                src={GoogleIcon}
                                alt="Google Logo"
                                width={20}
                                height={20}
                            />
                        }
                    >
                        Inizia con Gmail
                    </Button>
                </div>

                {/* Mobile menu toggle */}
                <button
                    className="md:hidden text-(--text) cursor-pointer"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Menu"
                >
                    {open ? (
                        <CloseIcon className="w-6 h-6" />
                    ) : (
                        <MenuIcon className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile menu panel */}
            {open && (
                <div className="md:hidden flex-1 min-h-0 px-6 py-4 flex flex-col gap-4 text-(--text) text-base overflow-y-auto">
                    <button
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => setProductsOpen((v) => !v)}
                    >
                        Prodotti
                        <DropdownArrow
                            width={12}
                            height={12}
                            className={`transition-transform duration-200 ${
                                productsOpen ? "rotate-0" : "rotate-180"
                            }`}
                        />
                    </button>

                    {productsOpen && (
                        <div className="flex flex-col gap-3 pl-3 border-l border-(--bento-stroke) text-(--subtext)">
                            <Link
                                href="/newmann-mail"
                                onClick={() => setOpen(false)}
                                className="hover:text-(--primary) transition-colors duration-200"
                            >
                                Newmann Mail
                            </Link>
                            <Link
                                href="/newmann-mail#inbox-organizer"
                                onClick={() => setOpen(false)}
                                className="hover:text-(--primary) transition-colors duration-200"
                            >
                                Inbox Organizer
                            </Link>
                            <Link
                                href="/newmann-mail#email-draft-writer"
                                onClick={() => setOpen(false)}
                                className="hover:text-(--primary) transition-colors duration-200"
                            >
                                Email Draft Writer
                            </Link>
                            <Link
                                href="/team"
                                onClick={() => setOpen(false)}
                                className="hover:text-(--primary) transition-colors duration-200"
                            >
                                Team
                            </Link>
                            <Link
                                href=""
                                onClick={() => setOpen(false)}
                                className="hover:text-(--primary) transition-colors duration-200"
                            >
                                Digital Twin
                            </Link>
                        </div>
                    )}

                    <Link
                        href="/contacts"
                        onClick={() => setOpen(false)}
                        className="hover:text-(--primary) transition-colors duration-200"
                    >
                        Contattaci
                    </Link>
                    <Link
                        href="/faq"
                        onClick={() => setOpen(false)}
                        className="hover:text-(--primary) transition-colors duration-200"
                    >
                        FAQ
                    </Link>

                    <LangSwitcher />

                    <div className="mt-auto">
                        <Button
                            type="secondary"
                            className="w-full"
                            icon={
                                <Image
                                    src={GoogleIcon}
                                    alt="Google Logo"
                                    width={20}
                                    height={20}
                                />
                            }
                        >
                            Inizia con Gmail
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
}
