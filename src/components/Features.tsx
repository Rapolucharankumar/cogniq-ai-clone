import FeatureCard from "./FeatureCard";
import Image from "next/image";

const services = [
    {
        title: "AI-Powered Customer Service",
        description: "Automate your support with intelligent agents that handle queries 24/7 with human-like accuracy.",
        icon: <Image src="/HomePage/OurServicesCustomer.svg" alt="Customer Service" width={24} height={24} />
    },
    {
        title: "Workflow Automation",
        description: "Streamline your business operations with custom AI-driven workflows that save time and reduce errors.",
        icon: <Image src="/HomePage/OurServicesScheduling.svg" alt="Workflow" width={24} height={24} />
    },
    {
        title: "Predictive Analytics",
        description: "Harness the power of your data to predict trends, customer behavior, and optimize your strategy.",
        icon: <Image src="/HomePage/OurServicesInventory.svg" alt="Analytics" width={24} height={24} />
    },
    {
        title: "Custom AI Agents",
        description: "Bespoke AI solutions tailored to your unique business needs, from internal tools to client-facing apps.",
        icon: <Image src="/HomePage/OurServicesTools.svg" alt="AI Agents" width={24} height={24} />
    },
];

export default function Features() {
    return (
        <section className="bg-zinc-50 pt-[80px] pb-[80px] lg:pt-[120px] lg:pb-[120px]">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-[#4636B9] uppercase tracking-[1px]">Our Services</h2>
                    <p className="mt-2 text-[32px] md:text-[40px] font-bold tracking-tight text-zinc-900 md:leading-[48px]">
                        Everything you need to <span className="text-gradient">scale with AI</span>
                    </p>
                    <p className="mt-[24px] text-[16px] md:text-[19px] leading-[28px] md:leading-[32.3px] text-[#666666]">
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
                                icon={service.icon}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
