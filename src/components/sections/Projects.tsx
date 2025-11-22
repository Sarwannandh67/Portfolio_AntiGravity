"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"
import { GlassCard } from "@/components/ui/GlassCard"
import { Button } from "@/components/ui/Button"
import { ArrowRight, Github } from "lucide-react"
import Link from "next/link"

const projects = [
    {
        title: "Smart Dustbin",
        category: "IoT & Hardware",
        description: "An intelligent waste management system using Arduino and GSM technology. Automatically opens lid and notifies authorities when full.",
        tags: ["Arduino", "C++", "Sensors", "GSM"],
        image: "/projects/smart-dustbin.jpg", // Placeholder path
        href: "/projects/smart-dustbin",
        github: "https://github.com/sarwannandh",
    },
    {
        title: "RFID Attendance System",
        category: "Embedded Systems",
        description: "Automated attendance tracking system for schools and offices using RFID technology with real-time database logging.",
        tags: ["ESP8266", "RFID", "MySQL", "PHP"],
        image: "/projects/rfid.jpg", // Placeholder path
        href: "/projects/rfid-attendance",
        github: "https://github.com/sarwannandh",
    },
    {
        title: "Object Detection AI",
        category: "Machine Learning",
        description: "Real-time object detection model capable of identifying multiple classes of objects with high accuracy using YOLO architecture.",
        tags: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
        image: "/projects/object-detection.jpg", // Placeholder path
        href: "/projects/object-detection",
        github: "https://github.com/sarwannandh",
    },
]

export function Projects() {
    return (
        <Section id="projects" className="bg-black/50">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Featured <span className="text-gold">Projects</span>
                    </motion.h2>
                    <motion.p
                        className="text-zinc-400 max-w-xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        A selection of my technical work across AI, IoT, and Web Development.
                        Solving complex problems with innovative code and hardware.
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <Button variant="ghost" asChild>
                        <Link href="/projects">
                            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <GlassCard className="h-full flex flex-col p-0 overflow-hidden group">
                            {/* Image Placeholder */}
                            <div className="h-48 bg-zinc-900 relative overflow-hidden">
                                <div className="absolute inset-0 bg-linear-to-t from-black to-transparent z-10" />
                                {/* Replace with actual Image component when images are available */}
                                <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-mono text-sm">
                                    Project Preview
                                </div>
                            </div>

                            <div className="p-6 flex flex-col grow relative z-20 -mt-12">
                                <span className="text-xs font-medium text-gold mb-2">{project.category}</span>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-zinc-400 mb-4 grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3 mt-auto">
                                    <Button size="sm" className="flex-1" asChild>
                                        <Link href={project.href}>
                                            Details
                                        </Link>
                                    </Button>
                                    <Button size="sm" variant="outline" className="w-10 px-0" asChild>
                                        <Link href={project.github} target="_blank">
                                            <Github className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </Section>
    )
}
