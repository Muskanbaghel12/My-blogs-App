import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../features/auth/authSlice'
import { toast } from 'react-toastify'

const Header = () => {

    const { user } = useSelector(state => state.auth)

    const dispatch = useDispatch()


    const handleLogout = () => {
        dispatch(logoutUser())
        toast.success("LoggedOut", { position: "top-center", theme: "dark" })
    }

    return (
        <header className="my-6 w-full flex justify-between items-center z-10">
            <div className="text-xl font-bold tracking-tighter uppercase">
                AIR <span className="text-cyan-400">//</span> BLOG
            </div>
            {
                user && (
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 bg-red-400 text-sm text-white font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                    >
                        Logout
                    </button>
                )
            }
        </header>
    )
}

export default Header
