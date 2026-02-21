import { useState, useEffect } from "react"
import { Edit, Plus, X } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { addBlog, updateBlog } from "../features/blogs/blogSlice"
import { toast } from "react-toastify"
import Loader from "./Loader"
import { useNavigate } from "react-router-dom"


const NewEntryModal = ({ editMode = false }) => {

    const { edit, isSuccess, isLoading, isError, message } = useSelector(state => state.blog)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({ title: "", description: "", author: "" })

    const { title, description, author } = formData

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }



    const handleSubmit = (e) => {
        e.preventDefault()

        !edit.isEdit ?
            // Add Blog
            dispatch(addBlog(formData)) :
            // Update Blog
            dispatch(updateBlog({ _id: edit.blog._id, title, description, author }))

        if (isSuccess) {
            closeModal()
            navigate("/blogs")
        }

    }


    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
        document.body.style.overflow = "hidden"
    }

    const closeModal = () => {
        setIsOpen(false)
        document.body.style.overflow = "unset"
    }

    useEffect(() => {

        console.log("Runs Again")
        setFormData(edit.blog)

        if (isError && message) {
            toast.error(message, { position: "top-center", theme: "dark" })
        }

    }, [edit, isError, message])


    if (isLoading) {
        return <Loader />
    }




    return (
        <>
            {/* Trigger Button - Using native button and plain Tailwind */}
            <button
                onClick={openModal}
                className="flex items-center bg-cyan-400 text-black font-bold uppercase tracking-widest hover:bg-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] h-12 px-6 transition-all duration-300 active:scale-95"
            >
                {
                    editMode ? (
                        <>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Entry
                        </>
                    ) : (
                        <>
                            <Plus className="mr-2 h-4 w-4" />
                            Create Entry
                        </>
                    )
                }

            </button>

            {/* Custom Modal Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-in fade-in"
                        onClick={closeModal}
                    />

                    {/* Modal Container */}
                    <div className="relative w-full max-w-lg bg-black border border-white/10 backdrop-blur-xl text-white font-mono overflow-hidden animate-in zoom-in-95 duration-300">
                        {/* Top Accent Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />

                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <div className="p-8 md:p-10">
                            <div className="mb-8">
                                <div className="text-[10px] text-cyan-400 uppercase tracking-[0.3em] mb-4 animate-pulse">
                                    Archive Injection Protocol
                                </div>
                                <h2 className="text-4xl font-black uppercase tracking-tighter text-white">
                                    New <span className="text-cyan-400">Record</span>
                                </h2>
                            </div>

                            <form
                                className="space-y-6"
                                onSubmit={handleSubmit}
                            >
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">Header // Title</label>
                                    <input
                                        name="title"
                                        value={title}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 px-4 h-12 outline-none focus:border-cyan-400 transition-colors placeholder:text-zinc-700"
                                        placeholder="Neural Network Efficiency..."
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">
                                        Data Stream // Description
                                    </label>
                                    <textarea
                                        name="description"
                                        value={description}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 p-4 min-h-[120px] outline-none focus:border-cyan-400 transition-colors placeholder:text-zinc-700 resize-none"
                                        placeholder="Initialize record details..."
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">Source // Author</label>
                                        <input
                                            name="author"
                                            value={author}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 px-4 h-12 outline-none focus:border-cyan-400 transition-colors placeholder:text-zinc-700"
                                            placeholder="Arch_V0"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full h-14 bg-cyan-400 text-black font-black uppercase tracking-[0.2em] hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all active:scale-[0.98]"
                                >
                                    Execute Commit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}


export default NewEntryModal