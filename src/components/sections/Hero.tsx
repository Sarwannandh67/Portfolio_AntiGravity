"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { Section } from "@/components/ui/Section"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"

export function Hero() {
    return (
        <Section className="min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-[80px] animate-pulse delay-1000" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
                        AI Engineer & Entrepreneur
                    </span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Building the <span className="text-gradient-gold">Future</span> with
                    <br />
                    <span className="text-white">Intelligence & Innovation</span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    I craft intelligent systems, scalable web applications, and innovative hardware solutions.
                    Founder of Sarwagyna, Wolvra, and CreatorNex.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Button size="lg" asChild>
                        <Link href="/projects">
                            View My Work <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                        <Link href="/contact">
                            Contact Me
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </Section>
    )
}
