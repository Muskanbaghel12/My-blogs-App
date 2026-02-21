import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../features/auth/authSlice'

const Register = () => {


    const { user, userLoading, userSuccess, userError, userErrorMessage } = useSelector(state => state.auth)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const { name, email, password } = formData

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(registerUser(formData))
    }


    useEffect(() => {

        if (user) {
            navigate("/")
        }


        if (userError && userErrorMessage) {
            toast.error(userErrorMessage, {
                position: "top-center",
                theme: "dark",
            })
        }



    }, [user, userError, userErrorMessage])

    if (userLoading) {
        return (
            <Loader />
        )
    }




    return (
        <div className="min-h-screen flex items-center justify-center p-6 font-mono relative overflow-hidden bg-black text-white">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />

            <div className="backdrop-blur-md bg-white/5 border border-white/10 w-full max-w-md p-8 md:p-12 relative">
                <div className="text-[10px] text-purple-400 uppercase tracking-[0.3em] mb-8 text-center animate-pulse">
                    New Entity Protocol
                </div>

                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-black uppercase tracking-tighter mb-2">Register</h1>
                    <p className="text-xs text-muted-foreground tracking-widest uppercase">Create unique digital signature</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-muted-foreground ml-1">Callsign // Name</label>
                        <input
                            type="text"
                            name='name'
                            value={name}
                            onChange={handleChange}
                            placeholder="Arch_V0"
                            className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:border-purple-400 outline-none transition-colors"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-muted-foreground ml-1">
                            Identity // Email
                        </label>
                        <input
                            name='email'
                            value={email}
                            onChange={handleChange}
                            type="email"
                            placeholder="user@v0.nexus"
                            className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:border-purple-400 outline-none transition-colors"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-muted-foreground ml-1">
                            Access Key // Password
                        </label>
                        <input
                            name='password'
                            value={password}
                            onChange={handleChange}
                            type="password"
                            placeholder="••••••••"
                            className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:border-purple-400 outline-none transition-colors"
                        />
                    </div>

                    <button className="w-full py-4 bg-purple-500 text-white font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all">
                        Establish Identity
                    </button>
                </form>

                <div className="mt-8 pt-8 border-t border-white/5 text-center">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                        Already Verified?{" "}
                        <a href="/login" className="text-purple-400 hover:underline ml-2">
                            Login Here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register
