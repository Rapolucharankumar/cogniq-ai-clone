import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function OurLab() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-grow pt-32 pb-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-primary-dark sm:text-6xl">Our Lab</h1>
                        <p className="mt-6 text-lg leading-8 text-secondary">
                            Our In-House AI Development Lab where we experiment with tomorrow&apos;s technologies today.
                        </p>
                    </div>

                    <section className="mt-24 border border-zinc-200 rounded-[32px] p-8 md:p-16 overflow-hidden relative">
                        <div className="absolute top-0 right-0 -z-10 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"></div>

                        <div className="max-w-xl">
                            <span className="text-primary font-bold uppercase tracking-widest text-sm">Featured Project</span>
                            <h2 className="mt-4 text-4xl font-bold text-primary-dark">PostGenius</h2>
                            <p className="mt-6 text-secondary leading-relaxed">
                                A multi-modal AI content engine that automates your entire social media and content strategy with human-like precision.
                            </p>

                            <div className="mt-12 grid grid-cols-1 gap-6">
                                {[
                                    "AI-Personalized Outreach",
                                    "Seamless Extension Integration",
                                    "Context-Aware Generation",
                                ].map((cap) => (
                                    <div key={cap} className="flex items-center gap-3">
                                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                                        <span className="text-sm font-medium text-primary-dark">{cap}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12">
                                <Link
                                    href="#"
                                    className="rounded-full bg-primary-dark px-8 py-4 text-sm font-semibold text-white shadow-xl hover:bg-black transition-all"
                                >
                                    <span className="flex items-center gap-2">Explore PostGenius <Image src="/OurLabPage/Arrow 1.svg" alt="Arrow" width={16} height={16} /></span>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
