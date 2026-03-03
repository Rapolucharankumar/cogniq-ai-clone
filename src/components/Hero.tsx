import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-[80px] pb-[80px] lg:pt-[120px] lg:pb-[100px] min-h-[857px] flex items-center">
            {/* Background Grid and Gradients */}
            <div className="grid-bg absolute inset-0 -z-10 opacity-70"></div>
            <div className="hero-radial-gradient absolute inset-0 -z-10"></div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                {/* Floating Icons */}
                <div className="absolute -top-20 left-10 md:left-20 animate-scale-up-visible opacity-0 hidden md:block" style={{ animationDelay: '0.5s' }}>
                    <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-white shadow-[0px_14px_44px_0px_rgba(216,216,216,0.45)] flex items-center justify-center animate-float pointer-events-none">
                        <Image src="/HomePage/IdeaIconHero.svg" alt="Idea" width={42} height={42} className="h-10 w-10" />
                    </div>
                </div>

                <div className="absolute -top-10 right-10 md:right-20 animate-scale-up-visible opacity-0 hidden md:block" style={{ animationDelay: '0.7s' }}>
                    <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-white shadow-[0px_14px_44px_0px_rgba(216,216,216,0.45)] flex items-center justify-center animate-float pointer-events-none" style={{ animationDelay: '0.5s' }}>
                        <Image src="/HomePage/BullsEyeHero.svg" alt="Bulls Eye" width={40} height={40} className="h-10 w-10" />
                    </div>
                </div>

                <div className="absolute -bottom-10 right-20 md:right-40 animate-scale-up-visible opacity-0 hidden md:block" style={{ animationDelay: '0.9s' }}>
                    <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-white shadow-[0px_14px_44px_0px_rgba(216,216,216,0.45)] flex items-center justify-center animate-float pointer-events-none" style={{ animationDelay: '1s' }}>
                        <Image src="/HomePage/MagicSparklesHero.svg" alt="Magic" width={29} height={29} className="h-8 w-8" />
                    </div>
                </div>

                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-[36px] leading-[44px] md:text-[52px] md:leading-[62.4px] font-bold tracking-[1.04px] text-zinc-900 transition-all duration-300">
                        Building <span className="text-gradient">Intelligent, scalable</span> AI solutions for the Next Generation
                    </h1>
                    <p className="mt-[24px] text-[16px] leading-[28px] md:text-[19px] md:leading-[32.3px] text-[#666666] max-w-2xl mx-auto transition-all duration-300">
                        Your premier AI & Software engineering partner - transforming ideas into reliable, high-performance products.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto rounded-[6px] bg-[#4636B9] px-[48px] py-[16px] text-base font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            Book a Strategy Call
                        </Link>
                        <Link
                            href="/services"
                            className="w-full sm:w-auto rounded-[6px] bg-transparent border-[0.8px] border-[#1C2482] px-[48px] py-[16px] text-base font-semibold leading-6 text-[#4636B9] transition-colors duration-150 hover:bg-[#F2F3FF] flex items-center justify-center gap-2"
                        >
                            See Our Services <Image src="/HomePage/Arrow 2.svg" alt="Arrow" width={16} height={16} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Decorative Stars (Grid Intersections) - Simplified emulation */}
            <div className="absolute top-[105px] left-[360px] h-4 w-4 text-[#C5B1FF]/45 -z-10 hidden lg:block">✦</div>
            <div className="absolute top-[105px] right-[360px] h-4 w-4 text-[#C5B1FF]/45 -z-10 hidden lg:block">✦</div>
            <div className="absolute top-[444px] left-[60px] h-4 w-4 text-[#C5B1FF]/45 -z-10 hidden lg:block">✦</div>
            <div className="absolute top-[444px] right-[60px] h-4 w-4 text-[#C5B1FF]/45 -z-10 hidden lg:block">✦</div>
        </section>
    );
}
