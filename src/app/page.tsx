import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-grow">
        <Hero />

        {/* Why Choose Us Section */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-primary-dark sm:text-4xl">
                Why Choose <span className="text-gradient">Cogniq AI?</span>
              </h2>
              <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
                We combine deep technical expertise with a product-first mindset to deliver high-performance AI solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Trusted Partnership", icon: "/HomePage/WhyUsHandshake.svg" },
                { title: "Scalable Solutions", icon: "/HomePage/WhyUsScale.svg" },
                { title: "Advanced AI", icon: "/HomePage/WhyUsAI.svg" },
                { title: "Intuitive Design", icon: "/HomePage/WhyUsDesign.svg" },
              ].map((feature, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-16 w-16 mb-4 flex items-center justify-center bg-primary/5 rounded-full">
                    <Image src={feature.icon} alt={feature.title} width={32} height={32} />
                  </div>
                  <h3 className="text-lg font-bold text-primary-dark">{feature.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Unlock AI Potential Banner */}
        <section className="bg-primary/5 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-primary-dark p-8 md:flex-row md:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute right-0 top-0 h-full w-1/2 md:w-1/3 opacity-30 md:opacity-50">
                <Image src="/HomePage/HomeAboutUsRobotHandImage.png" alt="Robot Hand" fill className="object-cover object-right" />
              </div>
              <div className="max-w-xl relative z-10">
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Unlock the Power of <span className="text-primary italic">AI for Your Business</span>
                </h2>
                <p className="mt-4 text-zinc-300">
                  Join the next generation of companies leveraging intelligent automation to drive growth and efficiency.
                </p>
              </div>
              <Link
                href="/about-us"
                className="whitespace-nowrap rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary-dark shadow-sm hover:bg-zinc-100 transition-all relative z-10"
              >
                Know more about Us
              </Link>
            </div>
          </div>
        </section>

        <Features />

        {/* Process Section */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-primary-dark sm:text-4xl">
                Our <span className="text-gradient">Process</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Discovery", img: "/HomePage/ProcessDiscovery.png" },
                { title: "Design", img: "/HomePage/ProcessDesign.png" },
                { title: "Development", img: "/HomePage/ProcessDevelopment.png" },
                { title: "Launch", img: "/HomePage/ProcessLaunch.png" },
              ].map((step, i) => (
                <div key={i} className="relative flex flex-col items-center text-center group">
                  <div className="w-full aspect-square relative mb-6 rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-100 group-hover:border-primary/30 transition-colors">
                    <Image src={step.img} alt={step.title} fill className="object-contain p-6 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark">{step.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ready to Transform Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-20 bg-zinc-900"></div>
          <div className="absolute inset-0 -z-10 opacity-40 mix-blend-overlay">
            <Image src="/HomePage/ReadyToTransform.jpg" alt="Transform Workflow" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent"></div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Ready to transform <span className="text-primary italic">Your Workflow?</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-300">
                Let&apos;s discuss how we can build custom AI solutions that fit your specific business needs and help you scale faster.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/contact"
                  className="rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-white shadow-xl transition-all hover:scale-105"
                >
                  Book a Strategy Call
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
