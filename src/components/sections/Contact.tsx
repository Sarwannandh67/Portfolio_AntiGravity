"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"
import { GlassCard } from "@/components/ui/GlassCard"
import { Button } from "@/components/ui/Button"
import { Mail, MapPin, Phone, Send, Linkedin, Github, Twitter, Instagram } from "lucide-react"
import Link from "next/link"

export function Contact() {
    return (
        <Section id="contact">
            <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Let's <span className="text-gold">Connect</span>
                    </h2>
                    <p className="text-zinc-400 text-lg mb-8 max-w-md">
                        Have a project in mind or want to discuss a potential partnership?
                        I'm always open to new opportunities and innovative ideas.
                    </p>

                    <div className="space-y-6 mb-8">
                        <div className="flex items-center gap-4 text-zinc-300">
                            <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                                <Mail className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-xs text-zinc-500 uppercase tracking-wider">Email</p>
                                <a href="mailto:contact@sarwan.dev" className="hover:text-gold transition-colors">contact@sarwan.dev</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-zinc-300">
                            <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                                <MapPin className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-xs text-zinc-500 uppercase tracking-wider">Location</p>
                                <p>Chennai, India</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {[
                            { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com" },
                            { icon: <Github className="h-5 w-5" />, href: "https://github.com" },
                            { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com" },
                            { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com" },
                        ].map((social, index) => (
                            <Button key={index} variant="outline" size="icon" className="rounded-full" asChild>
                                <Link href={social.href} target="_blank">
                                    {social.icon}
                                </Link>
                            </Button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <GlassCard className="p-8">
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-zinc-400">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-zinc-400">Subject</label>
                                <select
                                    id="subject"
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors appearance-none"
                                >
                                    <option value="" className="bg-zinc-900">Select a topic</option>
                                    <option value="project" className="bg-zinc-900">Project Inquiry</option>
                                    <option value="consulting" className="bg-zinc-900">Consulting</option>
                                    <option value="partnership" className="bg-zinc-900">Partnership</option>
                                    <option value="other" className="bg-zinc-900">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-zinc-400">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <Button className="w-full" size="lg">
                                Send Message <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </GlassCard>
                </motion.div>
            </div>
        </Section>
    )
}
