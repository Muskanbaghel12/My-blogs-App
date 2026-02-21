import React from 'react'

const PageNotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 font-mono text-center">
            <div className="mb-8">
                <h1 className="text-[12rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-primary to-transparent opacity-20 relative">
                    404
                </h1>
                <div className="text-4xl font-black uppercase tracking-tighter -mt-20 relative z-10">Void Detected</div>
            </div>

            <p className="text-muted-foreground uppercase tracking-widest text-xs mb-12 max-w-xs leading-loose">
                Error: Record not found in current timeline. <br />
                You are lost in the future.
            </p>

            <a
                href="/"
                className="px-8 py-4 border border-primary text-primary font-bold uppercase tracking-widest hover:bg-primary text-background transition-all neon-glow"
            >
                Return to Source
            </a>
        </div>
    )
}

export default PageNotFound

