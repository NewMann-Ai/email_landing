import React from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import rehypeSlug from "rehype-slug";

// Renders a legal document body exactly like the public pages of newmann.ai (email_landing
// /privacy, /cookies, /terms): same classes as their Section, SubSection, CheckList and
// DataTable components.
//
// KEEP IN SYNC: NWM-115 copies this file into email_landing so the back office preview and
// the public page are the same component. Change both together.
//
// Security: raw HTML in the markdown is never rendered (no rehype-raw) and the tree is
// sanitized before slugs are added.

function CheckIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
    );
}

const components: Components = {
    h1: ({ children }) => <h2 className="text-2xl font-bold text-(--text) mt-16 first:mt-0">{children}</h2>,
    h2: ({ children, id }) => (
        <h2 id={id} className="text-xl font-semibold text-(--text) mt-12 first:mt-0">
            {children}
        </h2>
    ),
    h3: ({ children, id }) => (
        <h3 id={id} className="text-base font-semibold text-(--text) mt-6">
            {children}
        </h3>
    ),
    h4: ({ children, id }) => (
        <h4 id={id} className="text-sm font-semibold text-(--text) mt-4">
            {children}
        </h4>
    ),
    p: ({ children }) => <p className="text-(--subtext) mt-3">{children}</p>,
    ul: ({ children }) => <ul className="flex flex-col gap-3 mt-3 text-(--subtext)">{children}</ul>,
    ol: ({ children }) => <ol className="flex flex-col gap-3 mt-3 pl-5 list-decimal text-(--subtext)">{children}</ol>,
    li: ({ children }) => (
        <li className="flex items-start gap-2 [ol>&]:list-item">
            <CheckIcon className="w-4 h-4 text-(--primary) mt-1 flex-shrink-0 [ol_&]:hidden" />
            <span>{children}</span>
        </li>
    ),
    strong: ({ children }) => <strong className="text-(--text) font-semibold">{children}</strong>,
    a: ({ children, href }) => {
        const external = href?.startsWith("http");
        return (
            <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="text-(--primary) hover:text-(--primary-hover) transition-colors duration-200"
            >
                {children}
            </a>
        );
    },
    hr: () => <hr className="my-16 border-(--bento-stroke)" />,
    table: ({ children }) => (
        <div className="overflow-x-auto rounded-2xl border border-(--bento-stroke) mt-3">
            <table className="w-full text-left border-collapse">{children}</table>
        </div>
    ),
    thead: ({ children }) => <thead className="bg-(--bento-bg)">{children}</thead>,
    th: ({ children }) => (
        <th className="p-4 text-sm font-semibold text-(--text) border-b border-(--bento-stroke)">{children}</th>
    ),
    td: ({ children }) => (
        <td className="p-4 text-sm text-(--subtext) border-b border-(--bento-stroke) [tr:last-child>&]:border-b-0">
            {children}
        </td>
    ),
};

export default function LegalMarkdown({ markdown }: { markdown: string }) {
    return (
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize, rehypeSlug]} components={components}>
            {markdown}
        </ReactMarkdown>
    );
}
