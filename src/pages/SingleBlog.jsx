import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NewEntryModal from '../components/NewEntryModal'
import { editBlog, getBlog, removeBlog } from '../features/blogs/blogSlice'
import Loader from '../components/Loader'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'

const SingleBlog = () => {

    const { user } = useSelector(state => state.auth)
    const { blog, isLoading, isSuccess, isError, message, edit } = useSelector(state => state.blog)

    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleEdit = () => {
        if (!edit.isEdit) {
            dispatch(editBlog(blog))
        }
    }

    const handleRemove = (id) => {
        dispatch(removeBlog(id))
        navigate("/blogs")
    }


    useEffect(() => {

        dispatch(getBlog(id))

        if (isError && message) {
            toast.error(message, {
                position: "top-center",
                theme: "dark",
            })
        }

    }, [isError, message, id])





    if (isLoading) {
        return (
            <Loader />
        )
    }






    return (
        <div className="min-h-screen bg-black text-white p-6 md:p-12 font-mono">
            <div className="max-w-4xl mx-auto">
                <a href="/blogs" className="text-cyan-400 text-xs uppercase mb-8 block hover:underline">
                    {"< Return to Archives"}
                </a>

                <header className="mb-12">
                    <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-zinc-500 mb-4">
                        <span>Published // {new Date(blog.createdAt).toLocaleDateString('en-IN')}</span>
                        <span className="text-cyan-400">|</span>
                        <span>Author // {blog.author}</span>

                    </div>
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                        <span className="text-cyan-400">{blog.title}</span>
                    </h1>
                    <div className="h-1 w-24 bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                </header>

                <article className="backdrop-blur-md bg-white/5 border border-white/10 p-8 md:p-12 mb-12">
                    <div className="prose prose-invert max-w-none space-y-6 text-sm md:text-base leading-loose text-zinc-400">

                        <p className="text-white font-bold">
                            {blog.description}
                        </p>
                    </div>
                </article>

                {
                    user._id === blog.user && (
                        <>
                            <div className="flex flex-wrap gap-4 border-t border-white/10 pt-8">
                                <button onClick={handleEdit}>
                                    <NewEntryModal editMode={true} />
                                </button>
                                <button onClick={() => handleRemove(blog._id)} className="px-6 py-2 border border-red-500 text-red-500 text-[10px] font-bold uppercase tracking-widest hover:bg-red-500/10 transition-colors">
                                    Delete File
                                </button>
                                <button className="px-6 py-2 border border-muted text-muted text-[10px] font-bold uppercase tracking-widest ml-auto hover:text-foreground transition-colors">
                                    Share a
                                </button>
                            </div>
                        </>
                    )
                }

            </div>
        </div>
    )
}

export default SingleBlog
