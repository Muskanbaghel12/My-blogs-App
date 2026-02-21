import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import { toast } from 'react-toastify'
import { getBlogs } from '../features/blogs/blogSlice'
import Header from '../components/Header'

const Home = () => {

    const { blogs, isLoading, isError, message } = useSelector((state) => state.blog)

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getBlogs())

        if (isError && message) {
            toast.error(message, {
                position: "top-center",
                theme: "dark",
            })
        }

    }, [isError, message])



    if (isLoading) {
        return (
            <Loader />
        )
    }



    return (
        <div className="min-h-screen flex flex-col items-center justify-between p-6 md:p-12 relative overflow-hidden bg-black text-white font-mono">
            {/* Background Grid Pattern */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            <Header />

            <main className="flex-1 flex flex-col items-center justify-center text-center z-10 max-w-4xl">
                <div className="mb-4 text-xs tracking-[0.3em] uppercase text-cyan-400 animate-pulse">
                    Establishing Connection...
                </div>

                <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-none">
                    Write. Read. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                        Rewrite the future.
                    </span>
                </h1>

                <p className="text-zinc-400 max-w-lg mb-12 text-sm md:text-base leading-relaxed">
                    The next-generation blogging platform for digital architects and code poets. Built for the year 2026.
                    Minimalist aesthetics meets cyberpunk performance.
                </p>

                <div className="flex flex-col md:flex-row gap-6">
                    <a
                        href="/blogs"
                        className="px-8 py-4 bg-cyan-400 text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                    >
                        Explore Blogs
                    </a>
                    <a
                        href="/login"
                        className="px-8 py-4 border border-cyan-400 text-cyan-400 font-bold uppercase tracking-widest hover:bg-cyan-400/10 transition-colors"
                    >
                        Start Writing
                    </a>
                </div>
            </main>

            <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 py-20 z-10 border-t border-white/5">
                {blogs.map((blog) => (
                    <div
                        key={blog._id}
                        className="backdrop-blur-md bg-white/5 border border-white/10 p-8 group hover:border-cyan-400/50 transition-colors"
                    >
                        <h3 className="text-xl font-bold uppercase mb-2 tracking-tight group-hover:text-cyan-400 transition-colors">
                            {blog.title}
                        </h3>
                        <p className="text-zinc-500 text-xs leading-loose">{blog.description}</p>
                    </div>
                ))}
            </section>

            <footer className="w-full pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-muted-foreground z-10">
                <div>© 2026 V0_CORP. ALL RIGHTS RESERVED.</div>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-primary transition-colors">
                        Protocol
                    </a>
                    <a href="#" className="hover:text-primary transition-colors">
                        Nexus
                    </a>
                    <a href="#" className="hover:text-primary transition-colors">
                        Archives
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Home
