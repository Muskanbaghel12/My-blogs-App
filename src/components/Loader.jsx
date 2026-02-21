import React from 'react'

const Loader = () => {
    return (
        <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50 font-mono">
            <div className="relative w-32 h-32 mb-8">
                <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
                <div className="absolute inset-0 border-4 border-t-primary rounded-full animate-spin" />
                <div className="absolute inset-4 border-2 border-accent/20 rounded-full" />
                <div className="absolute inset-4 border-2 border-b-accent rounded-full animate-spin-reverse" />
            </div>

            <div className="flex gap-1">
                <div className="w-2 h-2 bg-primary animate-pulse" style={{ animationDelay: "0s" }} />
                <div className="w-2 h-2 bg-primary animate-pulse" style={{ animationDelay: "0.2s" }} />
                <div className="w-2 h-2 bg-primary animate-pulse" style={{ animationDelay: "0.4s" }} />
            </div>

            <div className="mt-4 text-[10px] uppercase tracking-[0.5em] text-primary">Syncing Nexus...</div>
        </div>
    )
}

export default Loader
