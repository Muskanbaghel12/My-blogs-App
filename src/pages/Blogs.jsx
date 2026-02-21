import { useDispatch, useSelector } from "react-redux"
import NewEntryModal from "../components/NewEntryModal"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { toast } from "react-toastify"
import Loader from "../components/Loader"
import { getBlogs } from "../features/blogs/blogSlice"



const Blogs = () => {


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
        <div className="min-h-screen bg-black text-white p-6 md:p-12 font-mono">
            <div className="max-w-6xl mx-auto">
                <header className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <Link to="/" className="text-cyan-400 text-xs uppercase mb-4 block hover:underline">
                            {"< Return Home"}
                        </Link>
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                            Archive <span className="text-cyan-400">_01</span>
                        </h1>
                    </div>
                    <div className="flex flex-col items-end gap-6">
                        <NewEntryModal />
                        <div className="text-[10px] text-zinc-500 uppercase tracking-widest text-right">
                            Total Records: {blogs.length} <br />
                            Access Level: Level_4
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <Link
                            key={blog._id}
                            to={`/blogs/${blog._id}`}
                            className="backdrop-blur-md bg-white/5 border border-white/10 p-6 group hover:border-cyan-400 transition-all duration-300 hover:scale-[1.02]"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-[10px] text-cyan-400 uppercase border border-cyan-400/30 px-2 py-0.5">
                                    ID: {blog._id}
                                </span>
                                <span className="text-[10px] text-zinc-500">{blog.createdAt}</span>
                            </div>

                            <h2 className="text-xl font-bold uppercase mb-4 leading-tight group-hover:text-cyan-400 transition-colors">
                                {blog.title}
                            </h2>

                            <p className="text-zinc-400 text-xs leading-relaxed mb-8 line-clamp-3">{blog.description}</p>

                            <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[10px] uppercase tracking-widest">
                                <span className="text-purple-400">{blog.author}</span>
                                <span className="group-hover:translate-x-1 transition-transform">Read Detail →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blogs

