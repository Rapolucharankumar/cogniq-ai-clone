interface FeatureCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
    return (
        <div className="group relative rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-primary/50 hover:shadow-lg">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                {icon || (
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                    </svg>
                )}
            </div>
            <h3 className="mb-3 text-xl font-bold text-primary-dark">{title}</h3>
            <p className="text-secondary leading-relaxed">{description}</p>

            {/* Decorative Gradient on Hover */}
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
        </div>
    );
}
