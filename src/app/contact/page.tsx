import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-grow pt-[80px] pb-[80px] lg:pt-[120px] lg:pb-[120px]">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-[36px] leading-[44px] md:text-[52px] md:leading-[62.4px] font-bold tracking-[1.04px] text-primary-dark transition-all duration-300">Contact Us</h1>
                        <p className="mt-[24px] text-[16px] md:text-[19px] leading-[28px] md:leading-[32.3px] text-[#666666]">
                            Have a project in mind or want to learn more about our AI solutions? We'd love to hear from you.
                        </p>
                    </div>

                    <div className="mt-[80px] lg:mt-[120px] grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
                        {/* Contact Form */}
                        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-200 lg:p-12 transition-all duration-300 hover:shadow-xl">
                            <form action="#" method="POST" className="space-y-6">
                                <div>
                                    <label htmlFor="full-name" className="block text-sm font-semibold leading-6 text-primary-dark">
                                        Full Name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="full-name"
                                            id="full-name"
                                            autoComplete="name"
                                            placeholder="John Doe"
                                            className="block w-full rounded-[6px] border-0 px-[16px] py-[12px] text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-[2px] focus:ring-inset focus:ring-[#4636B9] sm:text-sm sm:leading-6 transition-all"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-primary-dark">
                                        Email Address
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            autoComplete="email"
                                            placeholder="john@example.com"
                                            className="block w-full rounded-[6px] border-0 px-[16px] py-[12px] text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-[2px] focus:ring-inset focus:ring-[#4636B9] sm:text-sm sm:leading-6 transition-all"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-primary-dark">
                                        Message
                                    </label>
                                    <div className="mt-2.5">
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={4}
                                            placeholder="Tell us about your project..."
                                            className="block w-full rounded-[6px] border-0 px-[16px] py-[12px] text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-[2px] focus:ring-inset focus:ring-[#4636B9] sm:text-sm sm:leading-6 transition-all"
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="block w-full rounded-[6px] bg-[#4636B9] px-[48px] py-[16px] text-center text-base font-semibold text-white shadow-sm hover:bg-[#3b2b9e] active:scale-95 transition-all duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="lg:pt-10">
                            <h2 className="text-[24px] md:text-[28px] font-bold text-primary-dark uppercase tracking-[1px] leading-[34px]">Get in touch</h2>
                            <p className="mt-[24px] text-[16px] md:text-[19px] leading-[28px] md:leading-[32.3px] text-[#666666]">
                                Our team of AI experts is ready to help you navigate the future of technology.
                            </p>

                            <dl className="mt-12 space-y-8">
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Email</span>
                                        <div className="h-10 w-10 rounded-full bg-[#f2f3ff] flex items-center justify-center">
                                            <svg className="h-6 w-6 text-[#4636B9]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                            </svg>
                                        </div>
                                    </dt>
                                    <dd>
                                        <p className="font-semibold text-primary-dark uppercase tracking-wider text-xs">Email</p>
                                        <a href="mailto:hello@cogniq.ai" className="text-sm font-medium text-[#666666] hover:text-[#4636B9] transition-colors">
                                            hello@cogniq.ai
                                        </a>
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Social</span>
                                        <div className="h-10 w-10 rounded-full bg-[#f2f3ff] flex items-center justify-center">
                                            <svg className="h-6 w-6 text-[#4636B9]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                            </svg>
                                        </div>
                                    </dt>
                                    <dd>
                                        <p className="font-semibold text-primary-dark uppercase tracking-wider text-xs">Social</p>
                                        <div className="mt-2 flex gap-4">
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
                                                    className="text-xs font-medium text-[#666666] hover:text-[#4636B9] transition-colors"
                                                >
                                                    {social.name}
                                                </a>
                                            ))}
                                        </div>
                                    </dd>
                                </div>
                            </dl>

                            <div className="mt-16 rounded-[32px] bg-zinc-950 p-8 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 -z-10 h-32 w-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4636B9]/30 blur-2xl group-hover:bg-[#4636B9]/50 transition-all duration-500"></div>
                                <h3 className="text-xl font-bold uppercase tracking-wider">A Cogniq Labs Division</h3>
                                <p className="mt-[24px] text-[16px] md:text-[19px] leading-[28px] md:leading-[32.3px] text-zinc-400">
                                    Part of a global ecosystem dedicated to pioneering the next generation of artificial intelligence and machine learning applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
