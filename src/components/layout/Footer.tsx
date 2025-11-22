import Link from "next/link"

export function Footer() {
    return (
        <footer className="py-8 border-t border-white/10 text-center text-zinc-500 text-sm bg-black">
            <div className="container mx-auto px-4">
                <p>&copy; {new Date().getFullYear()} Sarwan Nandh. All rights reserved.</p>
                <div className="mt-2 flex justify-center gap-4">
                    <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    )
}
