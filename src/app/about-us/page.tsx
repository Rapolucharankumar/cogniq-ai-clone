import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutUs() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-grow pt-32 pb-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-primary-dark sm:text-6xl">About Us</h1>
                        <p className="mt-6 text-lg leading-8 text-secondary">
                            Cogniq AI is a premier AI and engineering partner focused on building intelligent, scalable software for startups and enterprises.
                        </p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <h2 className="text-2xl font-bold text-primary-dark uppercase tracking-wide">Who We Are</h2>
                            <p className="mt-4 text-secondary leading-relaxed">
                                A specialized division of Cogniq Labs, we combine deep technical expertise with a product-first mindset to deliver high-performance AI solutions.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-primary-dark uppercase tracking-wide">Our Mission</h2>
                            <p className="mt-4 text-secondary leading-relaxed">
                                To empower organizations through intelligent technology, transforming complex challenges into streamlined, automated successes.
                            </p>
                        </div>
                    </div>

                    <div className="mt-24 rounded-3xl bg-zinc-50 p-8 md:p-12 lg:p-16">
                        <h2 className="text-3xl font-bold text-primary-dark text-center">Our Approach</h2>
                        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                            {[
                                { title: "Engineering-First", desc: "We prioritize robust, scalable architecture in every line of code." },
                                { title: "Outcome-Driven", desc: "Every solution is measured by its impact on your bottom line." },
                                { title: "Agile Collaboration", desc: "We work as an extension of your team for rapid delivery." },
                            ].map((item) => (
                                <div key={item.title} className="text-center">
                                    <h3 className="font-bold text-primary">{item.title}</h3>
                                    <p className="mt-2 text-sm text-secondary">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
