'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { ventures } from '@/data/ventures'

declare global {
    interface Window {
        gtag?: (
            command: string,
            action: string,
            params?: {
                event_category?: string;
                event_label?: string;
                transport_type?: string;
                [key: string]: any;
            }
        ) => void;
    }
}

const Ventures: React.FC = () => {
    const handleVentureClick = (ventureName: string, url: string) => {
        if (typeof window !== 'undefined' && url !== '#') {
            window.gtag?.('event', 'outbound_click', {
                event_category: 'Ventures',
                event_label: ventureName,
                transport_type: 'beacon',
            })
        }
    }

    return (
        <section id="ventures" className="py-20 lg:py-32 bg-black-800/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold mb-4 text-center">
                        My Ventures
                    </h2>
                    <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                        Companies and brands I've founded and built, spanning AI services, e-commerce,
                        and marketing technology.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {ventures.map((venture, index) => (
                            <motion.div
                                key={venture.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full flex flex-col">
                                    <div className="mb-4">
                                        {venture.status === 'upcoming' && (
                                            <span className="inline-block px-3 py-1 text-xs rounded-full bg-gold/20 text-gold border border-gold/30 mb-3">
                                                Upcoming
                                            </span>
                                        )}
                                        <h3 className="text-2xl font-bold text-gold mb-2">{venture.name}</h3>
                                        <p className="text-gold-400 text-sm mb-4">{venture.tagline}</p>
                                    </div>

                                    <p className="text-gray-300 mb-6 grow">{venture.description}</p>

                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-gold mb-3">Key Highlights:</h4>
                                        <ul className="space-y-2">
                                            {venture.highlights.map((highlight, idx) => (
                                                <li key={idx} className="flex items-start space-x-2 text-gray-400 text-sm">
                                                    <span className="text-gold mt-1">▸</span>
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {venture.website && venture.website !== '#' && (
                                        <div className="mt-auto pt-4 border-t border-gold/20">
                                            <Button
                                                variant="default"
                                                className="w-full"
                                                onClick={() => handleVentureClick(venture.name, venture.website || '#')}
                                                asChild
                                            >
                                                <Link href={venture.website} target="_blank" rel="noopener noreferrer">
                                                    Visit Website
                                                </Link>
                                            </Button>
                                        </div>
                                    )}
                                    {venture.website === '#' && (
                                        <div className="mt-auto pt-4 border-t border-gold/20">
                                            <Button
                                                variant="outline"
                                                className="w-full cursor-not-allowed opacity-50"
                                                disabled
                                            >
                                                Coming Soon
                                            </Button>
                                        </div>
                                    )}
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Ventures

