import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        setCaptainData({
            email: email,
            password: password
        })
        console.log(captainData)
        setEmail('')
        setPassword('')
    }
    return (
        <div className='p-5 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-16' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
                <form onSubmit={(e) => {
                    submitHandler(e)
                }}>
                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                    <input
                        required
                        type="email"
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'

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
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />

                    <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 text-lg w-full'>Login</button>
                </form>
                <p className='text-center'>Join a fleet? <Link to={'/captain-signup'} className='text-blue-600 '>Register as a Captain</Link></p>
            </div>

            <div>
                <Link to={'/login'} className='flex items-center justify-center bg-[#d5622d] text-white font-semibold mb-2 rounded px-4 py-2 text-lg w-full'>Sign in as User</Link>

            </div>

        </div>
    )
}

export default CaptainLogin
CaptainLogin