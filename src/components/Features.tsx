import FeatureCard from "./FeatureCard";

const services = [
    {
        title: "AI-Powered Customer Service",
        description: "Automate your support with intelligent agents that handle queries 24/7 with human-like accuracy.",
    },
    {
        title: "Workflow Automation",
        description: "Streamline your business operations with custom AI-driven workflows that save time and reduce errors.",
    },
    {
        title: "Predictive Analytics",
        description: "Harness the power of your data to predict trends, customer behavior, and optimize your strategy.",
    },
    {
        title: "Custom AI Agents",
        description: "Bespoke AI solutions tailored to your unique business needs, from internal tools to client-facing apps.",
    },
];

export default function Features() {
    return (
        <section className="bg-zinc-50 py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-wide">Our Services</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-primary-dark sm:text-4xl">
                        Everything you need to <span className="text-gradient">scale with AI</span>
                    </p>
                    <p className="mt-6 text-lg leading-8 text-secondary">
                        We provide cutting-edge AI solutions that help modern businesses stay ahead of the curve.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4 md:grid-cols-2">
                        {services.map((service, index) => (
                            <FeatureCard
                                key={index}
                                title={service.title}
                                description={service.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
