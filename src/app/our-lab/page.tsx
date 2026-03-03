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
                        <h1 className="text-[36px] leading-[44px] md:text-[52px] md:leading-[62.4px] font-bold tracking-[1.04px] text-primary-dark transition-all duration-300">Our Lab</h1>
                        <p className="mt-[24px] text-[16px] md:text-[19px] leading-[28px] md:leading-[32.3px] text-[#666666]">
                            Our In-House AI Development Lab where we experiment with tomorrow's technologies today.
                        </p>
                    </div>

                    <div className="mt-[80px] lg:mt-[120px] w-full flex justify-center relative">
                        <div className="relative w-full max-w-3xl aspect-[16/9]">
                            <Image src="/OurLabPage/HeroSectionImage.png" alt="Lab Hero" fill className="object-contain" />
                        </div>
                    </div>

                    {/* PostGenius */}
                    <section id="postgenius" className="mt-[80px] lg:mt-[120px] border border-zinc-200 rounded-[32px] p-8 md:p-12 lg:p-16 overflow-hidden relative bg-white shadow-xl">
                        <div className="absolute top-0 right-0 -z-10 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"></div>

                        <div className="flex flex-col lg:flex-row gap-12 items-center">
                            <div className="lg:w-1/2">
                                <span className="text-[#4636B9] font-bold uppercase tracking-[1px] text-sm">Featured Project</span>
                                <h2 className="mt-2 text-[32px] md:text-[40px] font-bold text-primary-dark md:leading-[48px] tracking-tight">PostGenius</h2>
                                <p className="mt-[24px] text-[16px] md:text-[19px] leading-[28px] md:leading-[32.3px] text-[#666666]">
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

                                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href="#"
                                        className="rounded-[6px] bg-[#4636B9] px-[48px] py-[16px] text-base font-semibold text-white shadow hover:bg-[#3b2b9e] transition-all duration-300 active:scale-95 inline-flex items-center justify-center gap-2"
                                    >
                                        Explore PostGenius <Image src="/OurLabPage/Arrow 1.svg" alt="Arrow" width={16} height={16} />
                                    </Link>
                                    <Link
                                        href="#"
                                        className="rounded-[6px] bg-transparent border-[0.8px] border-[#1C2482] px-[48px] py-[16px] text-base font-semibold text-[#4636B9] shadow-sm hover:bg-[#F2F3FF] transition-all duration-300 inline-flex items-center justify-center"
                                    >
                                        View Demo
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
                                <div className="space-y-4 translate-y-8">
                                    <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-100 relative aspect-square group">
                                        <Image src="/OurLabPage/PostGenius1.png" alt="PostGenius 1" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-100 relative aspect-square group">
                                        <Image src="/OurLabPage/PostGenius3.png" alt="PostGenius 3" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                </div>
                                <div className="space-y-4 -translate-y-8">
                                    <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-100 relative aspect-[4/5] group">
                                        <Image src="/OurLabPage/PostGenius2.png" alt="PostGenius 2" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* JobMail AI */}
                    <section id="jobmail" className="mt-[80px] lg:mt-[120px] border border-zinc-200 rounded-[32px] p-8 md:p-12 lg:p-16 overflow-hidden relative bg-white shadow-xl">
                        <div className="absolute top-0 left-0 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"></div>

                        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
                            <div className="lg:w-1/2">
                                <span className="text-[#4636B9] font-bold uppercase tracking-[1px] text-sm">Productivity Tool</span>
                                <h2 className="mt-2 text-[32px] md:text-[40px] font-bold text-primary-dark md:leading-[48px] tracking-tight">JobMail AI</h2>
                                <p className="mt-[24px] text-[16px] md:text-[19px] leading-[28px] md:leading-[32.3px] text-[#666666]">
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
                                        className="rounded-[6px] bg-[#4636B9] px-[48px] py-[16px] text-base font-semibold text-white shadow hover:bg-[#3b2b9e] transition-all duration-300 active:scale-95 inline-flex items-center justify-center gap-2"
                                    >
                                        Try JobMail AI <Image src="/OurLabPage/Arrow 1.svg" alt="Arrow" width={16} height={16} />
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
                                <div className="space-y-4 -translate-y-4">
                                    <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-100 relative aspect-square group">
                                        <Image src="/OurLabPage/JobMailAI1.png" alt="JobMail 1" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-100 relative aspect-square group">
                                        <Image src="/OurLabPage/JobMailAI3.png" alt="JobMail 3" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                </div>
                                <div className="space-y-4 translate-y-8">
                                    <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-100 relative aspect-[4/5] group">
                                        <Image src="/OurLabPage/JobMailAI2.png" alt="JobMail 2" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Small Tools */}
                    <div className="mt-[80px] lg:mt-[120px] text-center">
                        <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-primary-dark md:leading-[48px]">More Internal Tools</h2>
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="rounded-3xl bg-zinc-50 border border-zinc-100 p-8 flex items-center gap-6 shadow-sm hover:shadow-xl transition-all duration-300 group">
                                <div className="h-24 w-24 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                                    <Image src="/OurLabPage/AiSalesAgent.png" alt="AI Sales Agent" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-xl font-bold text-primary-dark group-hover:text-[#4636B9] transition-colors">AI Sales Agent</h3>
                                    <p className="mt-2 text-sm text-secondary">Automated outbound lead qualification</p>
                                </div>
                            </div>
                            <div className="rounded-3xl bg-zinc-50 border border-zinc-100 p-8 flex items-center gap-6 shadow-sm hover:shadow-xl transition-all duration-300 group">
                                <div className="h-24 w-24 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                                    <Image src="/OurLabPage/AiWorkflowEngine.png" alt="AI Workflow Engine" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-xl font-bold text-primary-dark group-hover:text-[#4636B9] transition-colors">Workflow Engine</h3>
                                    <p className="mt-2 text-sm text-secondary">No-code internal pipeline automation</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-[80px] lg:mt-[120px] relative rounded-3xl overflow-hidden bg-zinc-900 px-6 py-[80px] lg:py-[100px] text-center shadow-xl sm:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="absolute inset-0 -z-10 mix-blend-overlay opacity-30">
                            <Image src="/OurLabPage/AiJournyCTA.png" alt="CTA Background" fill className="object-cover" />
                        </div>
                        <div className="text-left w-full md:max-w-xl z-10">
                            <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-white md:leading-[48px]">Start your AI Journey</h2>
                            <p className="mt-[24px] text-[16px] md:text-[19px] leading-[28px] md:leading-[32.3px] text-zinc-300">
                                Want to implement these technologies in your own business? Let's talk.
                            </p>
                        </div>
                        <div className="z-10 flex-shrink-0 w-full md:w-auto">
                            <Link
                                href="/contact"
                                className="block w-full text-center rounded-[6px] bg-white px-[48px] py-[16px] text-base font-semibold text-primary-dark shadow-sm hover:bg-zinc-100 transition-all duration-300 active:scale-95"
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
