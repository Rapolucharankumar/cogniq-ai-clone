import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 relative">
                <div className="absolute inset-0 top-0 -z-10 bg-[url('/AboutUsPage/HeroSectionBG.svg')] bg-cover bg-center opacity-30 mt-20 h-[600px]"></div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-primary-dark sm:text-6xl">We build custom AI to solve scaling operations</h1>
                        <p className="mt-6 text-lg leading-8 text-secondary">
                            Cogniq AI is a premier AI and engineering partner focused on building intelligent, scalable software for startups and enterprises. We combine deep technical expertise with a product-first mindset.
                        </p>
                    </div>

                    <div className="mt-20 w-full rounded-3xl overflow-hidden aspect-video relative shadow-2xl">
                        <Image src="/AboutUsPage/OurTeam.png" alt="Our Team" fill className="object-cover" />
                    </div>

                    <div className="mt-24 grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-primary-dark tracking-tight">Who We Are</h2>
                            <p className="mt-6 text-lg text-secondary leading-relaxed">
                                A specialized division of Cogniq Labs, we combine deep technical expertise with a product-first mindset to deliver high-performance AI solutions. We don't just develop features, we build full-scale AI systems designed for clarity, transparency, and long-term growth.
                            </p>
                            <div className="mt-8 flex gap-4">
                                <Link
                                    href="/services"
                                    className="rounded-full bg-primary-dark px-6 py-3 text-sm font-semibold text-white shadow hover:bg-black transition-all"
                                >
                                    Explore Services
                                </Link>
                            </div>
                        </div>
                        <div className="relative aspect-square w-full max-w-lg mx-auto rounded-3xl overflow-hidden shadow-lg border border-zinc-100">
                            <Image src="/AboutUsPage/OurMission.png" alt="Our Mission" fill className="object-cover" />
                        </div>
                    </div>

                    <div className="mt-32">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Approach</span>
                            <h2 className="mt-4 text-3xl font-bold text-primary-dark tracking-tight sm:text-4xl text-gradient">What We Do</h2>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            {[
                                { title: "Engineering First", desc: "We prioritize robust, scalable architecture in every line of code.", img: "/AboutUsPage/WhatWeDo1.png" },
                                { title: "Outcome-Driven", desc: "Every solution is measured by its impact on your bottom line.", img: "/AboutUsPage/WhatWeDo2.png" },
                                { title: "Agile Collaboration", desc: "We work as an extension of your team for rapid delivery.", img: "/AboutUsPage/WhatWeDo3.png" },
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col rounded-3xl bg-zinc-50 overflow-hidden border border-zinc-100 shadow-sm hover:shadow-md transition-shadow group">
                                    <div className="aspect-[4/3] relative w-full overflow-hidden bg-zinc-200">
                                        <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="p-8 flex-grow flex flex-col justify-center text-center">
                                        <h3 className="text-xl font-bold text-primary-dark">{item.title}</h3>
                                        <p className="mt-4 text-secondary leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-32 relative rounded-3xl overflow-hidden bg-zinc-900 px-6 py-20 text-center shadow-xl sm:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="absolute inset-0 -z-10 mix-blend-overlay opacity-30">
                            <Image src="/AboutUsPage/BookStrategyCall.png" alt="Strategy Call Background" fill className="object-cover" />
                        </div>
                        <div className="text-left max-w-xl z-10">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to transform your operations?</h2>
                            <p className="mt-4 text-lg leading-8 text-zinc-300">
                                Let's build a clear, actionable roadmap to solve your biggest challenges with AI.
                            </p>
                        </div>
                        <div className="z-10 flex-shrink-0">
                            <Link
                                href="/contact"
                                className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary-dark shadow-sm hover:bg-zinc-100 transition-all"
                            >
                                Book a Strategy Call
                            </Link>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}
