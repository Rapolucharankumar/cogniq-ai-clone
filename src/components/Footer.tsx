import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-zinc-950 pt-24 pb-12 text-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-5">
                    {/* Brand Info */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/logo.svg"
                                alt="Cogniq AI Logo"
                                width={178}
                                height={38}
                                className="h-8 w-auto brightness-0 invert"
                            />
                        </Link>
                        <p className="mt-4 text-xs font-bold uppercase tracking-widest text-primary">
                            A Cogniq Labs Division
                        </p>
                        <p className="mt-4 text-sm leading-6 text-zinc-400">
                            Building intelligent AI apps that transform how you interact with technology.
                        </p>
                        <div className="mt-8 flex flex-col gap-2">
                            {[
                                { name: "Instagram", href: "https://www.instagram.com/cogniq_ai" },
                                { name: "X", href: "https://x.com/cogniq_ai" },
                                { name: "LinkedIn", href: "https://www.linkedin.com/company/the-cogniq-ai" },
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-zinc-400 hover:text-primary transition-colors"
                                >
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Company</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            {[
                                { name: "About us", href: "/about-us" },
                                { name: "Our Lab", href: "/our-lab" },
                                { name: "Blogs", href: "/blog" },
                                { name: "Contact Us", href: "/contact" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-sm leading-6 text-zinc-400 hover:text-primary transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* AI Solutions */}
                    <div>
                        <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">AI Solutions</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            {["Custom AI Agents", "Voice AI", "Customer Support AI"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm leading-6 text-zinc-400 hover:text-primary transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Services</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            {[
                                { name: "Workflow Automation", href: "/services" },
                                { name: "Predictive Analytics", href: "/services" },
                                { name: "All Services →", href: "/services" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-sm leading-6 text-zinc-400 hover:text-primary transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Products</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            {["All Products", "JobMail AI", "PostGenius AI"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm leading-6 text-zinc-400 hover:text-primary transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 border-t border-zinc-800 pt-8">
                    <p className="text-xs leading-5 text-zinc-500 text-center lg:text-left">
                        &copy; 2026 Cogniq AI. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
