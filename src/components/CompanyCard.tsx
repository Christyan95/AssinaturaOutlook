"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for merging classes
function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

export interface Company {
    name: string;
    slug: string;
    description: string;
    themeColor: string; // Hex code or Tailwind color class
    logo: ReactNode;
}

interface CompanyCardProps {
    company: Company;
    index: number;
}

export function CompanyCard({ company, index }: CompanyCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1, // Staggered entrance
                ease: "easeOut"
            }}
            className="h-full w-full perspective-1000"
        >
            <Link href={`/${company.slug}`} className="block h-full cursor-pointer group relative">
                <motion.div
                    whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.2 }
                    }}
                    className={cn(
                        "relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-colors duration-300",
                        "hover:border-white/20 hover:bg-white/10 dark:bg-black/40 dark:backdrop-blur-xl"
                    )}
                >
                    {/* Glow Effect on Hover */}
                    <div
                        className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl z-0 pointer-events-none"
                        style={{
                            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${company.themeColor}33, transparent 40%)`
                        }}
                    // Note: For true mouse following glow, we need state. simpler approach: centering or using CSS hover
                    />

                    {/* Animated Border Gradient */}
                    <div className={cn(
                        "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                        "bg-gradient-to-br from-transparent via-white/5 to-transparent z-0"
                    )} style={{ borderColor: company.themeColor }}></div>

                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="relative z-20 mb-6"
                        >
                            {company.logo}
                        </motion.div>

                        <p className="text-gray-400 text-sm font-light tracking-wide max-w-[80%] leading-relaxed group-hover:text-white transition-colors duration-300">
                            {company.description}
                        </p>
                    </div>

                    {/* Background Gradient Splash */}
                    <div
                        className="absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                        style={{ backgroundColor: company.themeColor }}
                    />
                </motion.div>
            </Link>
        </motion.div>
    );
}
