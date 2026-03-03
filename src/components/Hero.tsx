import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
            <div className="grid-bg absolute inset-0 -z-10 opacity-40"></div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                        Building <span className="text-gradient">Intelligent, scalable</span> AI solutions for the Next Generation
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-secondary">
                        Your premier AI & Software engineering partner - transforming ideas into reliable, high-performance products.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/strategy-call"
                            className="rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-white shadow-xl transition-all hover:scale-105"
                        >
                            Book a Strategy Call
                        </Link>
                        <Link
                            href="/services"
                            className="text-sm font-semibold leading-6 text-primary-dark hover:text-primary"
                        >
                            See Our Services <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Decorative Blur */}
            <div className="absolute top-0 right-0 -z-10 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-primary-dark/20 blur-3xl"></div>
        </section>
    );
}
