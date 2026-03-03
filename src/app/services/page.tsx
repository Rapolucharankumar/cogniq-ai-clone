import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 relative">
                <div className="absolute inset-0 top-0 -z-10 bg-[url('/ServicesPage/HeroSectionBG.svg')] bg-cover bg-center opacity-30 mt-20 h-[600px]"></div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-primary-dark sm:text-6xl">AI Solutions Partner</h1>
                        <p className="mt-6 text-lg leading-8 text-secondary">
                            Engineering excellence focused on measurable outcomes. We partner with you from strategy to deployment.
                        </p>
                    </div>

                    <div className="mt-24">
                        <h2 className="text-3xl font-bold text-primary-dark text-center mb-16 uppercase tracking-widest text-sm">What We Build</h2>

                        <div className="space-y-24">
                            {/* Service 1 */}
                            <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-3xl p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-zinc-100">
                                <div className="lg:w-1/2">
                                    <h3 className="text-3xl font-bold text-primary-dark tracking-tight">AI-Powered Customer Support</h3>
                                    <p className="mt-6 text-lg text-secondary leading-relaxed">
                                        Automate 80% of routine queries and turn your support center into a revenue driver. Custom RAG pipelines and fine-tuned models tailored to your specific domain and data.
                                    </p>
                                    <ul className="mt-8 space-y-4">
                                        {['24/7 Availability', 'Human-like Interactions', 'Seamless Handoff'].map((feature) => (
                                            <li key={feature} className="flex items-center gap-3">
                                                <div className="h-2 w-2 rounded-full bg-primary"></div>
                                                <span className="font-medium text-primary-dark">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="lg:w-1/2 w-full">
                                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-100">
                                        <Image src="/ServicesPage/AICustomerSupport.png" alt="AI Customer Support" fill className="object-cover" />
                                    </div>
                                </div>
                            </div>

                            {/* Service 2 */}
                            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 bg-white rounded-3xl p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-zinc-100">
                                <div className="lg:w-1/2">
                                    <h3 className="text-3xl font-bold text-primary-dark tracking-tight">Automated Scheduling</h3>
                                    <p className="mt-6 text-lg text-secondary leading-relaxed">
                                        Eliminate no-shows and recover thousands in lost revenue with intelligent automation. We build systems that understand context and priority.
                                    </p>
                                    <ul className="mt-8 space-y-4">
                                        {['Smart Routing', 'Conflict Resolution', 'Multi-timezone Support'].map((feature) => (
                                            <li key={feature} className="flex items-center gap-3">
                                                <div className="h-2 w-2 rounded-full bg-primary"></div>
                                                <span className="font-medium text-primary-dark">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="lg:w-1/2 w-full">
                                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-100">
                                        <Image src="/ServicesPage/AutoScheduling.png" alt="Automated Scheduling" fill className="object-cover" />
                                    </div>
                                </div>
                            </div>

                            {/* Service 3 */}
                            <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-3xl p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-zinc-100">
                                <div className="lg:w-1/2">
                                    <h3 className="text-3xl font-bold text-primary-dark tracking-tight">Intelligent Inventory</h3>
                                    <p className="mt-6 text-lg text-secondary leading-relaxed">
                                        Prevent stockouts and make data-driven decisions with predictive forecasting. Turning historic data into high-accuracy revenue and inventory models.
                                    </p>
                                    <ul className="mt-8 space-y-4">
                                        {['Demand Forecasting', 'Supplier Integration', 'Real-time Alerts'].map((feature) => (
                                            <li key={feature} className="flex items-center gap-3">
                                                <div className="h-2 w-2 rounded-full bg-primary"></div>
                                                <span className="font-medium text-primary-dark">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="lg:w-1/2 w-full">
                                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-100">
                                        <Image src="/ServicesPage/InventoryManagement.png" alt="Inventory Management" fill className="object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-32 relative rounded-3xl overflow-hidden bg-zinc-900 px-6 py-20 text-center shadow-xl sm:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="absolute inset-0 -z-10 bg-zinc-900"></div>
                        <div className="absolute inset-0 -z-10 mix-blend-overlay opacity-40">
                            <Image src="/ServicesPage/CustomProjectCTA.jpg" alt="Custom Project Background" fill className="object-cover object-center" />
                        </div>
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-transparent"></div>

                        <div className="text-left max-w-xl z-10">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Have a Custom Project?</h2>
                            <p className="mt-4 text-lg leading-8 text-zinc-300">
                                From deep learning models to complete software ecosystems, let's build something exceptional.
                            </p>
                        </div>
                        <div className="z-10 flex-shrink-0">
                            <Link
                                href="/contact"
                                className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary-dark shadow-sm hover:bg-zinc-100 transition-all"
                            >
                                Let's Discuss
                            </Link>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}
