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

                    <div className="mt-[80px] lg:mt-[120px] w-full rounded-3xl overflow-hidden aspect-video relative shadow-2xl">
                        <Image src="/AboutUsPage/OurTeam.png" alt="Our Team" fill className="object-cover" />
                    </div>

                    <div className="mt-[80px] lg:mt-[120px] grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
                        <div>
                            <h2 className="text-[32px] md:text-[40px] font-bold text-primary-dark tracking-tight md:leading-[48px]">Who We Are</h2>
                            <p className="mt-[24px] text-[16px] md:text-[19px] leading-[28px] md:leading-[32.3px] text-[#666666]">
                                A specialized division of Cogniq Labs, we combine deep technical expertise with a product-first mindset to deliver high-performance AI solutions. We don't just develop features, we build full-scale AI systems designed for clarity, transparency, and long-term growth.
                            </p>
                            <div className="mt-8 flex gap-4">
                                <Link
                                    href="/services"
                                    className="rounded-[6px] bg-[#4636B9] px-[48px] py-[16px] text-base font-semibold text-white shadow hover:bg-[#3b2b9e] transition-all duration-300 active:scale-95 text-center"
                                >
                                    Explore Services
                                </Link>
                            </div>
                        </div>
                        <div className="relative aspect-square w-full max-w-lg mx-auto rounded-3xl overflow-hidden shadow-lg border border-zinc-100">
                            <Image src="/AboutUsPage/OurMission.png" alt="Our Mission" fill className="object-cover" />
                        </div>
                    </div>

                    <div className="mt-[80px] lg:mt-[120px]">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold uppercase tracking-[1px] text-sm">Our Approach</span>
                            <h2 className="mt-2 text-[32px] md:text-[40px] font-bold text-primary-dark md:leading-[48px] tracking-tight sm:text-4xl text-gradient">What We Do</h2>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            {[
                                { title: "Engineering First", desc: "We prioritize robust, scalable architecture in every line of code.", img: "/AboutUsPage/WhatWeDo1.png" },
                                { title: "Outcome-Driven", desc: "Every solution is measured by its impact on your bottom line.", img: "/AboutUsPage/WhatWeDo2.png" },
                                { title: "Agile Collaboration", desc: "We work as an extension of your team for rapid delivery.", img: "/AboutUsPage/WhatWeDo3.png" },
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col rounded-3xl bg-zinc-50 overflow-hidden border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                                    <div className="aspect-[4/3] relative w-full overflow-hidden bg-zinc-200">
                                        <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="p-8 flex-grow flex flex-col justify-center text-center bg-white group-hover:bg-zinc-50 transition-colors duration-300">
                                        <h3 className="text-xl font-bold text-primary-dark">{item.title}</h3>
                                        <p className="mt-4 text-[#666666] leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-[80px] lg:mt-[120px] relative rounded-3xl overflow-hidden bg-zinc-900 px-6 py-[80px] lg:py-[100px] text-center shadow-xl sm:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="absolute inset-0 -z-10 mix-blend-overlay opacity-30">
                            <Image src="/AboutUsPage/BookStrategyCall.png" alt="Strategy Call Background" fill className="object-cover" />
                        </div>
                        <div className="text-left w-full md:max-w-xl z-10">
                            <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-white md:leading-[48px]">Ready to transform your operations?</h2>
                            <p className="mt-[24px] text-[16px] md:text-[19px] leading-[28px] md:leading-[32.3px] text-zinc-300">
                                Let's build a clear, actionable roadmap to solve your biggest challenges with AI.
                            </p>
                        </div>
                        <div className="z-10 flex-shrink-0 w-full md:w-auto">
                            <Link
                                href="/contact"
                                className="block w-full text-center rounded-[6px] bg-white px-[48px] py-[16px] text-base font-semibold text-primary-dark shadow-sm hover:bg-zinc-100 transition-all duration-300 active:scale-95"
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
