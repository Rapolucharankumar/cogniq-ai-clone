import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-grow">
        <Hero />

        {/* Unlock AI Potential Banner */}
        <section className="bg-primary/5 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-primary-dark p-8 md:flex-row md:p-12 lg:p-16">
              <div className="max-w-xl">
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Unlock the Power of <span className="text-primary italic">AI for Your Business</span>
                </h2>
                <p className="mt-4 text-zinc-300">
                  Join the next generation of companies leveraging intelligent automation to drive growth and efficiency.
                </p>
              </div>
              <Link
                href="/about"
                className="whitespace-nowrap rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary-dark shadow-sm hover:bg-zinc-100 transition-all"
              >
                Know more about Us
              </Link>
            </div>
          </div>
        </section>

        <Features />

        {/* Ready to Transform Section */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary-dark sm:text-4xl">
                Ready to transform <span className="text-gradient">Your Workflow?</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-secondary">
                Let&apos;s discuss how we can build custom AI solutions that fit your specific business needs and help you scale faster.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/strategy-call"
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
