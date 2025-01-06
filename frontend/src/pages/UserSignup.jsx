import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

const UserSignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})

    const navigate = useNavigate()
    const { user, setUser } = useContext(UserDataContext)

    const submitHandler = async(e) => {
        e.preventDefault()
        const newUser = {
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

        if (response.status === 201) {
            const data = response.data;
            setUser(data.user)
            localStorage.setItem("token", data.token)
            navigate('/login')
        }

        console.log(userData)
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
    }
    return (
        <div className='p-5 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-16' src="https://logospng.org/download/uber/logo-uber-4096.png" alt="" />
                <form onSubmit={(e) => {
                    submitHandler(e)
                }}>
                    <h3 className='text-lg font-medium mb-2'>What's your Name</h3>
                    <div className='flex gap-3 mb-6'>
                        <input
                            type="text"
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-base'
                            placeholder="First name" />
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-base'
                            placeholder="Last name" />
                    </div>

                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                    <input
                        required
                        type="email"
                        className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-base'

                        placeholder='email@example.com'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />

                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                    <input
                        required
                        type="password"
                        className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-base'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />

                    <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 text-lg w-full'>Create Account</button>
                </form>
                <p className='text-center'>Already have a account? <Link to={'/login'} className='text-blue-600 '>Login here</Link></p>
            </div>

            <div>
                <p className='text-[11px] text-center leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>

            </div>

        </div>
    )
}

export default UserSignup
