import type { Metadata, Viewport } from "next";
import "../styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Newmann",
    description: "Newmann Website",
    icons: {
        icon: {
            url: "/favicon.png",
            type: "image/png",
        },
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1.0,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className="scroll-smooth"
            data-scroll-behavior="smooth"
        >
            <head>
                <meta charSet="UTF-8" />
            </head>
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
