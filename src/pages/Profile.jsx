import React from 'react'

const Profile = () => {
    return (
        <div className="min-h-screen bg-background p-6 md:p-12 font-mono">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* User Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="glass p-6 text-center lg:text-left sticky top-12">
                            <div className="w-24 h-24 bg-primary/20 border border-primary mx-auto lg:mx-0 mb-6 flex items-center justify-center">
                                <div className="w-16 h-16 border-2 border-primary border-t-transparent animate-spin rounded-full opacity-50" />
                            </div>
                            <h2 className="text-xl font-black uppercase tracking-tighter mb-1">Arch_V0</h2>
                            <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-6">
                                Master Architect // Lvl 99
                            </p>

                            <div className="space-y-4 border-t border-white/5 pt-6 text-[10px] uppercase tracking-widest">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">ID:</span>
                                    <span className="text-primary">USR_8829_X</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Posts:</span>
                                    <span>14</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Rank:</span>
                                    <span className="text-accent">Legend</span>
                                </div>
                            </div>

                            <button className="w-full mt-8 py-3 bg-primary text-background text-[10px] font-bold uppercase tracking-widest hover:neon-glow transition-all">
                                Settings
                            </button>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="lg:col-span-3">
                        <header className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                            <h1 className="text-5xl font-black uppercase tracking-tighter leading-none">
                                My <span className="text-primary">Vault</span>
                            </h1>
                            <a
                                href="/blogs"
                                className="w-full md:w-auto px-8 py-3 border border-accent text-accent text-[10px] font-bold uppercase tracking-widest hover:bg-accent/10 text-center"
                            >
                                + Create New Entry
                            </a>
                        </header>

                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="glass p-6 flex flex-col md:flex-row justify-between items-center gap-6 group">
                                    <div className="flex-1">
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2">
                                            Ref: #00{i} // 2026.05.15
                                        </div>
                                        <h3 className="text-lg font-bold uppercase group-hover:text-primary transition-colors">
                                            Digital Twin Synchronization Patterns
                                        </h3>
                                    </div>
                                    <div className="flex gap-4">
                                        <button className="px-4 py-2 border border-white/10 text-[10px] font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-all">
                                            Edit
                                        </button>
                                        <button className="px-4 py-2 border border-white/10 text-[10px] font-bold uppercase tracking-widest hover:border-destructive hover:text-destructive transition-all">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Profile
