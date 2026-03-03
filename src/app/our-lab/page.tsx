import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function OurLab() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 relative">
                <div className="absolute inset-0 top-0 -z-10 bg-[url('/OurLabPage/HeroSectionBG.svg')] bg-cover bg-center opacity-30 mt-20 h-[600px]"></div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-primary-dark sm:text-6xl">Our Lab</h1>
                        <p className="mt-6 text-lg leading-8 text-secondary">
                            Our In-House AI Development Lab where we experiment with tomorrow's technologies today.
                        </p>
                    </div>

                    <div className="mt-20 w-full flex justify-center relative">
                        <div className="relative w-full max-w-3xl aspect-[16/9]">
                            <Image src="/OurLabPage/HeroSectionImage.png" alt="Lab Hero" fill className="object-contain" />
                        </div>
                    </div>

                    {/* PostGenius */}
                    <section id="postgenius" className="mt-32 border border-zinc-200 rounded-[32px] p-8 md:p-12 lg:p-16 overflow-hidden relative bg-white shadow-xl">
                        <div className="absolute top-0 right-0 -z-10 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"></div>

                        <div className="flex flex-col lg:flex-row gap-12 items-center">
                            <div className="lg:w-1/2">
                                <span className="text-primary font-bold uppercase tracking-widest text-sm">Featured Project</span>
                                <h2 className="mt-4 text-4xl font-bold text-primary-dark tracking-tight">PostGenius</h2>
                                <p className="mt-6 text-lg text-secondary leading-relaxed">
                                    A multi-modal AI content engine that automates your entire social media and content strategy with human-like precision. Generate compelling posts, interact with followers, and scale your brand voice.
                                </p>

                                <div className="mt-10 space-y-4">
                                    {[
                                        "Automated Multi-platform Posting",
                                        "Context-Aware Content Generation",
                                        "Brand Voice Fine-tuning",
                                    ].map((cap, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <Image src="/OurLabPage/TickMarkVector.svg" alt="Tick" width={20} height={20} />
                                            <span className="text-base font-medium text-primary-dark">{cap}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 flex gap-4">
                                    <Link
                                        href="#"
                                        className="rounded-full bg-primary-dark px-8 py-4 text-sm font-semibold text-white shadow hover:bg-black transition-all inline-flex items-center gap-2"
                                    >
                                        Explore PostGenius <Image src="/OurLabPage/Arrow 1.svg" alt="Arrow" width={16} height={16} />
                                    </Link>
                                    <Link
                                        href="#"
                                        className="rounded-full bg-zinc-100 px-8 py-4 text-sm font-semibold text-primary-dark shadow-sm hover:bg-zinc-200 transition-all inline-flex items-center"
                                    >
                                        View Demo
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
                                <div className="space-y-4 translate-y-8">
                                    <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-100 relative aspect-square">
                                        <Image src="/OurLabPage/PostGenius1.png" alt="PostGenius 1" fill className="object-cover" />
                                    </div>
                                    <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-100 relative aspect-square">
                                        <Image src="/OurLabPage/PostGenius3.png" alt="PostGenius 3" fill className="object-cover" />
                                    </div>
                                </div>
                                <div className="space-y-4 -translate-y-8">
                                    <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-100 relative aspect-[4/5]">
                                        <Image src="/OurLabPage/PostGenius2.png" alt="PostGenius 2" fill className="object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* JobMail AI */}
                    <section id="jobmail" className="mt-24 border border-zinc-200 rounded-[32px] p-8 md:p-12 lg:p-16 overflow-hidden relative bg-white shadow-xl">
                        <div className="absolute top-0 left-0 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"></div>

                        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
                            <div className="lg:w-1/2">
                                <span className="text-primary font-bold uppercase tracking-widest text-sm">Productivity Tool</span>
                                <h2 className="mt-4 text-4xl font-bold text-primary-dark tracking-tight">JobMail AI</h2>
                                <p className="mt-6 text-lg text-secondary leading-relaxed">
                                    An intelligent recruitment assistant that drafts perfectly tailored cold emails, screens applications, and manages your outreach pipeline automatically.
                                </p>

                                <div className="mt-10 space-y-4">
                                    {[
                                        "Automated Pipeline Management",
                                        "Smart Resume Parsing",
                                        "Hyper-personalized Outreach",
                                    ].map((cap, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <Image src="/OurLabPage/TickMarkVector.svg" alt="Tick" width={20} height={20} />
                                            <span className="text-base font-medium text-primary-dark">{cap}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 flex gap-4">
                                    <Link
                                        href="#"
                                        className="rounded-full bg-primary-dark px-8 py-4 text-sm font-semibold text-white shadow hover:bg-black transition-all inline-flex items-center gap-2"
                                    >
                                        Try JobMail AI <Image src="/OurLabPage/Arrow 1.svg" alt="Arrow" width={16} height={16} />
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
                                <div className="space-y-4 -translate-y-4">
                                    <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-100 relative aspect-square">
                                        <Image src="/OurLabPage/JobMailAI1.png" alt="JobMail 1" fill className="object-cover" />
                                    </div>
                                    <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-100 relative aspect-square">
                                        <Image src="/OurLabPage/JobMailAI3.png" alt="JobMail 3" fill className="object-cover" />
                                    </div>
                                </div>
                                <div className="space-y-4 translate-y-8">
                                    <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-100 relative aspect-[4/5]">
                                        <Image src="/OurLabPage/JobMailAI2.png" alt="JobMail 2" fill className="object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Small Tools */}
                    <div className="mt-32 text-center">
                        <h2 className="text-3xl font-bold text-primary-dark tracking-tight">More Internal Tools</h2>
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="rounded-3xl bg-zinc-50 border border-zinc-100 p-8 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="h-24 w-24 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                                    <Image src="/OurLabPage/AiSalesAgent.png" alt="AI Sales Agent" fill className="object-cover" />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-xl font-bold text-primary-dark">AI Sales Agent</h3>
                                    <p className="mt-2 text-sm text-secondary">Automated outbound lead qualification</p>
                                </div>
                            </div>
                            <div className="rounded-3xl bg-zinc-50 border border-zinc-100 p-8 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="h-24 w-24 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                                    <Image src="/OurLabPage/AiWorkflowEngine.png" alt="AI Workflow Engine" fill className="object-cover" />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-xl font-bold text-primary-dark">Workflow Engine</h3>
                                    <p className="mt-2 text-sm text-secondary">No-code internal pipeline automation</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-32 relative rounded-3xl overflow-hidden bg-zinc-900 px-6 py-20 text-center shadow-xl sm:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="absolute inset-0 -z-10 mix-blend-overlay opacity-30">
                            <Image src="/OurLabPage/AiJournyCTA.png" alt="CTA Background" fill className="object-cover" />
                        </div>
                        <div className="text-left max-w-xl z-10">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Start your AI Journey</h2>
                            <p className="mt-4 text-lg leading-8 text-zinc-300">
                                Want to implement these technologies in your own business? Let's talk.
                            </p>
                        </div>
                        <div className="z-10 flex-shrink-0">
                            <Link
                                href="/contact"
                                className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary-dark shadow-sm hover:bg-zinc-100 transition-all"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}
