import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode
    hoverEffect?: boolean
    className?: string
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
    ({ children, className, hoverEffect = true, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                className={cn(
                    "glass-card rounded-2xl p-6 relative overflow-hidden",
                    className
                )}
                initial={hoverEffect ? { y: 0 } : undefined}
                whileHover={hoverEffect ? {
                    y: -5,
                    boxShadow: "0 10px 30px -10px rgba(212, 175, 55, 0.15)",
                    borderColor: "rgba(212, 175, 55, 0.3)"
                } : undefined}
                transition={{ duration: 0.3 }}
                {...props}
            >
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10">
                    {children}
                </div>
            </motion.div>
        )
    }
)
GlassCard.displayName = "GlassCard"

export { GlassCard }
