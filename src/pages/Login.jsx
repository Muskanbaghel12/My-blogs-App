import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../features/auth/authSlice'

const Login = () => {

    const { user, userLoading, userSuccess, userError, userErrorMessage } = useSelector(state => state.auth)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const { email, password } = formData

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUser(formData))
    }


    useEffect(() => {

        if (user) {
            navigate("/blogs")
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
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />

            <div className="backdrop-blur-md bg-white/5 border border-white/10 w-full max-w-md p-8 md:p-12 relative">
                <div className="text-[10px] text-cyan-400 uppercase tracking-[0.3em] mb-8 text-center animate-pulse">
                    Secure Login Portal
                </div>

                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-black uppercase tracking-tighter mb-2">Initialize</h1>
                    <p className="text-xs text-muted-foreground tracking-widest uppercase">Enter Credentials to proceed</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
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
                            className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:border-primary outline-none transition-colors"
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
                            className="w-full bg-white/5 border border-white/10 p-4 text-sm focus:border-primary outline-none transition-colors"
                        />
                    </div>

                    <button type='submit' className="w-full py-4 bg-cyan-400 text-black font-bold uppercase tracking-widest hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all">
                        Unlock Interface
                    </button>
                </form>

                <div className="mt-8 pt-8 border-t border-white/5 text-center">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                        New Entity?{" "}
                        <a href="/register" className="text-primary hover:underline ml-2">
                            Register Access
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
