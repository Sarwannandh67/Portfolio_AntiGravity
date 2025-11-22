"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"
import { GlassCard } from "@/components/ui/GlassCard"
import { Code, Cpu, Globe, Brain } from "lucide-react"

const competencies = [
    {
        icon: <Brain className="h-8 w-8 text-gold" />,
        title: "AI & Machine Learning",
        description: "Developing intelligent models and data-driven solutions using Python, TensorFlow, and PyTorch.",
    },
    {
        icon: <Cpu className="h-8 w-8 text-gold" />,
        title: "IoT & Embedded Systems",
        description: "Building smart hardware solutions with Arduino, ESP32, and custom PCB designs.",
    },
    {
        icon: <Globe className="h-8 w-8 text-gold" />,
        title: "Web Development",
        description: "Creating responsive, high-performance web applications with Next.js, React, and Node.js.",
    },
    {
        icon: <Code className="h-8 w-8 text-gold" />,
        title: "Software Architecture",
        description: "Designing scalable and maintainable software systems for complex business needs.",
    },
]

export function About() {
    return (
        <Section id="about" className="bg-black/50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        About <span className="text-gold">Me</span>
                    </h2>
                    <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                        I am a passionate AI Engineer and Entrepreneur dedicated to solving real-world problems through technology.
                        With a strong foundation in Machine Learning, IoT, and Full-Stack Development, I bridge the gap between
                        hardware and software to create cohesive ecosystems.
                    </p>
                    <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                        As the founder of <span className="text-white font-medium">Sarwagyna Pvt Ltd</span>, I lead a team
                        focused on delivering cutting-edge tech solutions. My journey also includes venturing into e-commerce
                        with <span className="text-white font-medium">Wolvra Clothin</span> and digital marketing with <span className="text-white font-medium">CreatorNex</span>.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {competencies.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <GlassCard className="h-full flex flex-col items-start p-6">
                                <div className="mb-4 p-3 bg-gold/10 rounded-lg">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                                <p className="text-sm text-zinc-400">{item.description}</p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
