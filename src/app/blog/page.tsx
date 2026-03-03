import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const posts = [
    {
        title: "How AI Customer Support Automation Saves Agencies 20+ Hours Every Week",
        date: "March 2, 2026",
        category: "Automation",
        excerpt: "Discover the real-world impact of AI agents on agency workflows and how to reclaim your team's time.",
        image: "/unsplash/aHR0cHM6Ly9pbWFnZXMu.jpg"
    },
    {
        title: "Building Your First AI Agent: A Step-by-Step Guide for 2026",
        date: "February 25, 2026",
        category: "Engineering",
        excerpt: "Everything you need to know about designing, prompt engineering, and deploying custom AI agents.",
        image: "/unsplash/aHR0cHM6Ly9pbWFnZXMu.jpg"
    },
    {
        title: "AI Phone Receptionist: Complete Cost & Features Guide for 2026",
        date: "February 18, 2026",
        category: "AI Tools",
        excerpt: "A deep dive into the technology and ROI of voice AI for modern business reception.",
        image: "/unsplash/aHR0cHM6Ly9pbWFnZXMu.jpg"
    },
];

export default function Blog() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-grow pt-32 pb-20 bg-zinc-50 relative">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-primary-dark sm:text-6xl">Blog & Insights</h1>
                        <p className="mt-6 text-lg leading-8 text-secondary">
                            Latest from Cogniq AI - deep dives into the impact of intelligent automation.
                        </p>
                    </div>

                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) => (
                            <article key={post.title} className="flex flex-col items-start justify-between bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all border border-zinc-100 overflow-hidden group">
                                <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-100">
                                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <time dateTime="2026-03-02" className="text-zinc-500">
                                            {post.date}
                                        </time>
                                        <span className="relative z-10 rounded-full bg-primary/10 px-3 py-1.5 font-medium text-primary">
                                            {post.category}
                                        </span>
                                    </div>
                                    <div className="group relative">
                                        <h3 className="mt-4 text-xl font-bold leading-tight text-primary-dark group-hover:text-primary transition-colors">
                                            <a href="#">
                                                <span className="absolute inset-0" />
                                                {post.title}
                                            </a>
                                        </h3>
                                        <p className="mt-4 line-clamp-3 text-sm leading-6 text-secondary">{post.excerpt}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
