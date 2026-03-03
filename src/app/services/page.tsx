import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";

export default function Services() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-grow pt-32 pb-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-primary-dark sm:text-6xl">AI Solutions Partner</h1>
                        <p className="mt-6 text-lg leading-8 text-secondary">
                            Engineering excellence focused on measurable outcomes. We partner with you from strategy to deployment.
                        </p>
                    </div>

                    <div className="mt-24">
                        <h2 className="text-3xl font-bold text-primary-dark text-center mb-16 uppercase tracking-widest text-sm">What We Build</h2>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
                            {[
                                {
                                    title: "Generative AI & LLMs",
                                    description: "Custom RAG pipelines and fine-tuned models tailored to your specific domain and data.",
                                },
                                {
                                    title: "Vision & Signal AI",
                                    description: "Advanced object detection and sensor data interpretation for real-time monitoring.",
                                },
                                {
                                    title: "Predictive Intelligence",
                                    description: "Turning historic data into high-accuracy revenue and inventory forecasting models.",
                                },
                                {
                                    title: "Voice & Audio Tech",
                                    description: "Natural Language Processing and real-time audio analysis for next-gen interfaces.",
                                },
                            ].map((service, index) => (
                                <FeatureCard
                                    key={index}
                                    title={service.title}
                                    description={service.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
