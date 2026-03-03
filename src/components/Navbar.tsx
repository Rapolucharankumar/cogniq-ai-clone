"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white/90 py-4 shadow-sm backdrop-blur-md border-b border-zinc-200/50" : "bg-transparent py-6"
                }`}
        >
            <div className="mx-auto flex max-w-7x1 items-center justify-between px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/HeaderFooter/HeaderCompanyLogo.svg"
                        alt="Cogniq AI Logo"
                        width={178}
                        height={38}
                        className="h-8 w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Links */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link href="/" className="text-sm font-medium text-zinc-600 hover:text-primary transition-colors">
                        Home
                    </Link>
                    <Link href="/about-us" className="text-sm font-medium text-zinc-600 hover:text-primary transition-colors">
                        About Us
                    </Link>
                    <Link href="/services" className="text-sm font-medium text-zinc-600 hover:text-primary transition-colors">
                        Services
                    </Link>
                    <Link href="/our-lab" className="text-sm font-medium text-zinc-600 hover:text-primary transition-colors">
                        Our Lab
                    </Link>
                    <Link href="/blog" className="text-sm font-medium text-zinc-600 hover:text-primary transition-colors">
                        Blogs
                    </Link>
                </div>

                <Link
                    href="/contact"
                    className="rounded-full bg-gradient-primary px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 active:scale-95"
                >
                    Contact Us
                </Link>
            </div>
        </nav>
    );
}
