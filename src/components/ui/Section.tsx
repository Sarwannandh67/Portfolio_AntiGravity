import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    id?: string
    className?: string
    fullWidth?: boolean
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ children, id, className, fullWidth = false, ...props }, ref) => {
        return (
            <section
                ref={ref}
                id={id}
                className={cn("py-16 md:py-24 relative", className)}
                {...props}
            >
                <div className={cn(
                    "mx-auto",
                    fullWidth ? "w-full" : "container container-padding max-w-7xl"
                )}>
                    {children}
                </div>
            </section>
        )
    }
)
Section.displayName = "Section"

export { Section }
