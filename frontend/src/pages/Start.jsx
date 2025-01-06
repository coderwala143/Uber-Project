import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
    return (
        <div>
            <div className='bg-cover bg-[url(https://images.unsplash.com/photo-1633885274964-d5a5d914bcb3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen flex justify-between flex-col w-full'>
                <div className='flex justify-end pt-8 p-5 '>
                    <img className='w-16 text-right ' src="https://logospng.org/download/uber/logo-uber-4096.png" alt="" />
                </div>
                <div className='bg-white pb-7 py-4 px-4'>
                    <h2 className='text-xl font-bold'>Get Started with Uber</h2>
                    <Link to={"/login"} className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
                </div>
            </div>
        </div>
    )
}

export default Start
